<script setup>
import { TrashIcon } from '@heroicons/vue/24/outline/index.js'
import BaseSelect from './BaseSelect.vue'
import BaseButton from './BaseButton.vue'
import ActivitySecondsToComplete from './ActivitySecondsToComplete.vue'
import { BUTTON_TYPE_DANGER } from '@/constans.js'
import { isActivityValid } from '@/validators.js'
import { inject } from 'vue'


defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityValid
  },
})

const periodSelectOptions = inject('periodSelectOptions')
const setActivitySecondsToComplete = inject('setActivitySecondsToComplete')
const deleteActivity = inject('deleteActivity')
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton
        :type="BUTTON_TYPE_DANGER"
        @click="deleteActivity(activity)"
      >
        <TrashIcon class="h-8 text-white" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        class="grow font-mono"
        :selected="activity.secondsToComplete || null"
        :options="periodSelectOptions"
        @select="setActivitySecondsToComplete(activity, $event || 0)"
        placeholder="hh:mm"
      />
      <ActivitySecondsToComplete
        v-if="activity.secondsToComplete"
        :activity="activity"
      />
    </div>
  </li>
</template>
