import { computed, ref } from 'vue'
import { HUNDRED_PERCENT } from '@/constans.ts'

interface Activity {
  id: string
  name: string
  secondsToComplete: number
}

interface ActivitySelectOption {
  value: string
  label: string
}

export const activities = ref<Activity[]>([])

export const activitySelectOptions = computed<ActivitySelectOption[]>(() => generateActivitySelectOptions(activities.value))

export const trackedActivities = computed<Activity[]>(() =>
  activities.value.filter(({ secondsToComplete }): boolean => secondsToComplete !== 0)
)

export function initializeActivities(state: any): void {
  return (activities.value = state.activities || [])
}

export function calculateActivityComplectionPercentage({ secondsToComplete }: Activity, trackedSeconds: number): number {
  return Math.floor((trackedSeconds * HUNDRED_PERCENT) / secondsToComplete)
}

export function calculateComplectionPercentage(totalTrackedSeconds: number): number {
  return Math.floor((totalTrackedSeconds * HUNDRED_PERCENT) / totalActivitySecondsToComplete.value)
}

export function createActivity(activity: Activity) {
  activities.value.push(activity)
}

export function updateActivity(activity: Activity, fields: any): Activity {
  return Object.assign(activity, fields)
}

export function deleteActivity(activity: Activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}

const totalActivitySecondsToComplete = computed(() => {
  return trackedActivities.value
    .map(({ secondsToComplete }): number => secondsToComplete)
    .reduce((total, seconds) => total + seconds, 0)
})

function generateActivitySelectOptions(activities: Activity[]): ActivitySelectOption[] {
  return activities.map((activity) => ({ value: activity.id, label: activity.name }))
}
