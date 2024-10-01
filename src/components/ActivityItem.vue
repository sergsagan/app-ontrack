<script setup>
import BaseSelect from './BaseSelect.vue'
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import RemainingActivitySeconds from './RemainingActivitySeconds.vue'
import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from '@/constans.ts'
import { ICON_TRASH } from '@/icons.ts'
import { isActivityValid } from '@/validators.ts'
import { deleteActivity, updateActivity } from '@/activities.ts'
import { resetTimelineItemActivities, timelineItems } from '@/timeline-items.ts'

const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityValid
  }
})

function deleteAndResetActivity(activity) {
  resetTimelineItemActivities(timelineItems.value, activity)
  deleteActivity(activity)
}
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="deleteAndResetActivity(props.activity)">
        <BaseIcon :name="ICON_TRASH" class="text-white" />
      </BaseButton>
      <span class="truncate text-xl">{{ props.activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        class="grow font-mono"
        :selected="props.activity.secondsToComplete || null"
        :options="PERIOD_SELECT_OPTIONS"
        @select="updateActivity(props.activity, { secondsToComplete: $event || 0 })"
        placeholder="hh:mm"
      />
      <RemainingActivitySeconds
        v-if="props.activity.secondsToComplete"
        :activity="props.activity"
      />
    </div>
  </li>
</template>
