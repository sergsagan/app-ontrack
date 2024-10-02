<script setup lang="ts">
import BaseSelect from './BaseSelect.vue'
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import RemainingActivitySeconds from './RemainingActivitySeconds.vue'
import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from '@/constans.ts'
import { deleteActivity, updateActivity } from '@/activities.ts'
import { resetTimelineItemActivities, timelineItems } from '@/timeline-items.ts'
import { IconName, type Activity } from '@/types.ts'

defineProps<{ activity: Activity }>()

function deleteAndResetActivity(activity: Activity): void {
  resetTimelineItemActivities(timelineItems.value, activity)
  deleteActivity(activity)
}
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton
        :type="BUTTON_TYPE_DANGER"
        @click="deleteAndResetActivity(activity)"
      >
        <BaseIcon
          :name="IconName.TRASH"
          class="text-white"
        />
      </BaseButton>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        class="grow font-mono"
        :selected="activity.secondsToComplete || null"
        :options="PERIOD_SELECT_OPTIONS"
        placeholder="hh:mm"
        @select="updateActivity(activity, { secondsToComplete: $event || 0 })"
      />
      <RemainingActivitySeconds
        v-if="activity.secondsToComplete"
        :activity="activity"
      />
    </div>
  </li>
</template>
