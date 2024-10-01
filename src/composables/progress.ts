import { computed } from 'vue'
import { calculateActivityComplectionPercentage } from '@/activities.ts'
import { calculateTrackedActivitySeconds, timelineItems } from '@/timeline-items.ts'
import { getProgressColorClass } from '@/function.ts'
import type { ProgressColorClass, Activity } from '@/types.ts'

export function useProgress(activity: Activity) {
  const colorClass = computed((): ProgressColorClass => getProgressColorClass(percentage.value))

  const percentage = computed((): number =>
    calculateActivityComplectionPercentage(activity, trackedActivitySeconds.value)
  )

  const trackedActivitySeconds = computed((): number =>
    calculateTrackedActivitySeconds(timelineItems.value, activity)
  )

  return {
    colorClass,
    percentage,
    trackedActivitySeconds
  }
}
