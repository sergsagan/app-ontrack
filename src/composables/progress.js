import { computed } from 'vue'
import { calculateActivityComplectionPercentage } from '@/activities.ts'
import { calculateTrackedActivitySeconds, timelineItems } from '@/timeline-items.js'
import { getProgressColorClass } from '@/function.ts'

export function useProgress(activity) {
  const colorClass = computed(() => getProgressColorClass(percentage.value))

  const percentage = computed(() =>
    calculateActivityComplectionPercentage(activity, trackedActivitySeconds.value)
  )

  const trackedActivitySeconds = computed(() =>
    calculateTrackedActivitySeconds(timelineItems.value, activity)
  )

  return {
    colorClass,
    percentage,
    trackedActivitySeconds
  }
}
