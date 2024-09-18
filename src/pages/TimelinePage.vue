<script setup>
import { onActivated, onDeactivated } from 'vue'
import TimelineItem from '@/components/TimelineItem.vue'
import TimelineBar from '@/components/TimelineBar.vue'
import {
  timelineItems,
  timelineItemRefs,
  scrollToCurrentHour,
  stopTimelineItemTimer
} from '@/timeline-items.js'
import { startTimer, stopTimer } from '@/time.js'

stopTimelineItemTimer()

onActivated(() => {
  scrollToCurrentHour()

  startTimer()
})
onDeactivated(stopTimer)
</script>

<template>
  <div class="relative mt-7">
    <TimelineBar />
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        ref="timelineItemRefs"
      />
    </ul>
  </div>
</template>
