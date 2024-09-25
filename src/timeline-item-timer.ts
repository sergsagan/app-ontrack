import { ref } from 'vue'
import { MILLISECONDS_IN_SECOND } from '@/constans.ts'
import { activeTimelineItem, updateTimelineItem } from '@/timeline-items.ts'
import type { TimelineItem } from '@/types.ts'

const timelineItemTimer = ref<number | undefined>()

export function startTimelineItemTimer(timelineItem?: TimelineItem) {
  timelineItem = timelineItem ?? activeTimelineItem.value

  updateTimelineItem(timelineItem as any, { isActive: true })

  timelineItemTimer.value = setInterval(() => {
    updateTimelineItem(timelineItem as any, {
      activitySeconds: (timelineItem as any).activitySeconds + 1
    })
  }, MILLISECONDS_IN_SECOND)
}

export function stopTimelineItemTimer() {
  updateTimelineItem(activeTimelineItem.value as any, { isActive: false })

  clearInterval(timelineItemTimer.value)

  timelineItemTimer.value = undefined
}

export function resetTimelineItemTimer(timelineItem: TimelineItem) {
  updateTimelineItem(timelineItem, { activitySeconds: 0 })

  if (activeTimelineItem.value) {
    stopTimelineItemTimer()
  }
}
