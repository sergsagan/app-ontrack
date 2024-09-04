<script setup>
import { nextTick, ref, watchPostEffect } from 'vue'
import TimelineItem from '@/components/TimelineItem.vue'
import {
  isActivityValid, isPageValid,
  isTimelineItemValid,
  validateActivities,
  validateSelectOptions,
  validateTimelineItems
} from '@/validators.js'
import { MIDNIGHT_HOUR, PAGE_TIMELINE } from '@/constans.js'


const props = defineProps({
  timelineItems: {
    type: Array,
    required: true,
    validator: validateTimelineItems
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
  },
  currentPage: {
    type: String,
    required: true,
    validator: isPageValid
  }
})

const emit = defineEmits({
  setTimelineItemActivity(timelineItem, activity) {
    return [isTimelineItemValid(timelineItem), isActivityValid(activity)].every(Boolean)
  }
})

const timelineItemRefs = ref([])

watchPostEffect(async() => {
  if (props.currentPage === PAGE_TIMELINE) {
    await nextTick()

    scrollToCurrentTimelineItem()
  }
})

function scrollToCurrentTimelineItem() {
  const currentHour = new Date().getHours()

  if (currentHour === MIDNIGHT_HOUR) {
    document.body.scrollIntoView()
  } else {
    timelineItemRefs.value[currentHour - 1].$el.scrollIntoView()
  }
}
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        :activities="activities"
        :activity-select-options="activitySelectOptions"
        @select-activity="emit('setTimelineItemActivity', { timelineItem, $event})"
        ref="timelineItemRefs"
      />
    </ul>
  </div>
</template>
