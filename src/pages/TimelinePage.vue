<script setup lang="ts">
import { onActivated } from 'vue'
import TimelineItem from '@/components/TimelineItem.vue'
import TimelineBar from '@/components/TimelineBar.vue'
import { timelineItems, timelineItemRefs, scrollToCurrentHour } from '@/timeline-items.ts'

onActivated(scrollToCurrentHour)
</script>

<template>
  <div class="relative mt-7">
    <TimelineBar />
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        ref="timelineItemRefs"
        :timeline-item="timelineItem"
      />
    </ul>
  </div>
</template>
