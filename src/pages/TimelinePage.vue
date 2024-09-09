<script setup>
import { nextTick, watchPostEffect } from 'vue'
import TimelineItem from '@/components/TimelineItem.vue'
import { PAGE_TIMELINE } from '@/constans.js'
import { currentPage } from '@/router.js'
import { timelineItems, timelineItemRefs, scrollToHour } from '@/timeline-items.js'

watchPostEffect(async() => {
  if (currentPage.value === PAGE_TIMELINE) {
    await nextTick()

    scrollToHour(null, false)
  }
})
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        ref="timelineItemRefs"
        @scroll-to-hour="scrollToHour(timelineItem.hour)"
      />
    </ul>
  </div>
</template>
