import { computed } from 'vue'
import { calculateActivityComplectionPercentage } from '@/activities.js'
import { calculateTrackedActivitySeconds, timelineItems } from '@/timeline-items.js'
import { getProgressColorClass } from '@/function.js'

export function useProgress(activity) {
  const colorClass = computed(() => getProgressColorClass(percentage.value))

  const percentage = computed(() =>
    calculateActivityComplectionPercentage(activity, trackedSeconds.value)
  )

  const trackedSeconds = computed(() =>
    calculateTrackedActivitySeconds(timelineItems.value, activity)
  )

  return {
    colorClass,
    percentage,
    trackedSeconds,
  }
}
