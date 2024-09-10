import { computed, ref } from 'vue'
import { generateActivities, generateActivitySelectOptions } from '@/function.js'
import { getTotalActivitySeconds } from '@/timeline-items.js'
import { HUNDRED_PERCENT } from '@/constans.js'

export const activities = ref(generateActivities())
export const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))
export const trackedActivities = computed(() =>
  activities.value.filter(({ secondsToComplete }) => secondsToComplete)
)
export function createActivity(activity) {
  activities.value.push(activity)
}

export function updateActivity(activity, fields) {
  return Object.assign(activity, fields)
}

export function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}

export function getActivityProgress(activity) {
  return Math.floor(
    getTotalActivitySeconds(activity) * HUNDRED_PERCENT / activity.secondsToComplete
  )
}
