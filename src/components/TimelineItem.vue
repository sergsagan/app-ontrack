<script setup>
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'
import TimelineStopwatch from './TimelineStopwatch.vue'

import {
  isActivityValid,
  isTimelineItemValid,
  validateActivities,
  validateSelectOptions
} from '@/validators.js'
import { NULLABLE_ACTIVITY } from '@/constans.js'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  },
  activities: {
    type: Array,
    required: true,
    validator: validateActivities
  },
  activitySelectOptions: {
    type: Array,
    required: true,
    validator: validateSelectOptions
  }
})

const emit = defineEmits({
  selectActivity: isActivityValid
})

function selectActivity(id) {
  emit('selectActivity', findActivityById(id))
}

function findActivityById(id) {
  return props.activities.find((activity) => activity.id === id) || NULLABLE_ACTIVITY
}

</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour  :hour="timelineItem.hour"/>
    <BaseSelect
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      @select="selectActivity"
      placeholder="Rest"
    />
    <TimelineStopwatch :seconds="timelineItem.activitySeconds" />
  </li>
</template>

