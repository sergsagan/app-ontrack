import { computed } from 'vue'
import { getProgressColorClass } from '@/function.js'
import { trackedActivities, calculateComplectionPercentage } from '@/activities.js'
import { calculateTrackedActivitySeconds, timelineItems } from '@/timeline-items.js'

export function useTotalProgress() {
  const colorClass = computed(() => getProgressColorClass(percentage.value))

  const percentage = computed(() => calculateComplectionPercentage(totalTrackedSeconds.value))

  const totalTrackedSeconds = computed(() => {
    return trackedActivities.value
      .map((activity) =>
        Math.min(
          calculateTrackedActivitySeconds(timelineItems.value, activity),
          activity.secondsToComplete
        )
      )
      .reduce((total, seconds) => total + seconds, 0)
  })

  return {
    colorClass,
    percentage
  }
}
