<script setup>
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'
import TimelineStopwatch from './TimelineStopwatch.vue'

import { isTimelineItemValid } from '@/validators.js'
import { updateTimelineItem } from '@/timeline-items.js'
import { activitySelectOptions } from '@/activities.ts'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  }
})
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <TimelineHour :hour="props.timelineItem.hour" />
    <BaseSelect
      :selected="props.timelineItem.activityId"
      :options="activitySelectOptions"
      @select="updateTimelineItem(props.timelineItem, { activityId: $event })"
      placeholder="Rest"
    />
    <TimelineStopwatch :timeline-item="props.timelineItem" />
  </li>
</template>
