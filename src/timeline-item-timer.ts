import { ref } from 'vue'
import { MILLISECONDS_IN_SECOND } from '@/constans.ts'
import { activeTimelineItem, updateTimelineItem } from '@/timeline-items.ts'
import type { TimelineItem } from '@/types.ts'

const timelineItemTimer = ref<number | undefined>()

export function startTimelineItemTimer(timelineItem?: TimelineItem) {
  timelineItem = timelineItem ?? activeTimelineItem.value

  if (!timelineItem) return

  updateTimelineItem(timelineItem, { isActive: true })

  timelineItemTimer.value = setInterval(() => {
    updateTimelineItem(timelineItem, {
      activitySeconds: timelineItem.activitySeconds + 1
    })
  }, MILLISECONDS_IN_SECOND)
}

export function stopTimelineItemTimer() {
  if (!activeTimelineItem.value) return
  updateTimelineItem(activeTimelineItem.value, { isActive: false })

  clearInterval(timelineItemTimer.value)

  timelineItemTimer.value = undefined
}

export function resetTimelineItemTimer(timelineItem: TimelineItem) {
  updateTimelineItem(timelineItem, { activitySeconds: 0 })

  if (activeTimelineItem.value) {
    stopTimelineItemTimer()
  }
}
