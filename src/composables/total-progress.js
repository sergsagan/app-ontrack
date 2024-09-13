import { computed } from 'vue'
import { getProgressColorClass } from '@/function.js'
import { trackedActivities, calculateComplectionPercentage } from '@/activities.js'
import { calculateTrackedActivitySeconds, timelineItems } from '@/timeline-items.js'

export function useTotalProgress() {
  const colorClass = computed(() => getProgressColorClass(percentage.value))

  const percentage = computed(() => calculateComplectionPercentage(totalTrackedSeconds.value))

  const totalTrackedSeconds = computed(() => {
    return trackedActivities.value.reduce((total, activity) => {
      let trackedSeconds = calculateTrackedActivitySeconds(timelineItems.value, activity)

      trackedSeconds = trackedSeconds < activity.secondsToComplete ? trackedSeconds : activity.secondsToComplete

      return total + trackedSeconds
    }, 0)
  })

  return {
    colorClass,
    percentage
  }
}
