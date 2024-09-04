import {
  PAGE_TIMELINE,
  HOURS_IN_DAY,
  SECONDS_IN_HOUR,
  RANDOM_HOUR,
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
  MILLISECONDS_IN_SECONDS
} from '@/constans.js'
import { isPageValid, isNull } from './validators.js'

export function normalizePageHash() {
  const page = window.location.hash.slice(1)

  if (isPageValid(page)) {
    return page
  }
  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}

export function normalizeSelectValue(value) {
  return isNull(value) || isNaN(value) ? value : +value
}

export function generateActivities() {
  return ['Coding', 'Reading', 'Training'].map((name, hours) => ({
    id: id(),
    name,
    secondsToComplete: hours * SECONDS_IN_HOUR
  }))
}

export function id() {
  return Date.now().toString(RANDOM_HOUR) + Math.random().toString(RANDOM_HOUR).substring(2)
}

export function generateTimelineItems(activities) {
  return [...Array(HOURS_IN_DAY).keys()].map((hour) => ({
    hour,
    activityId: hour % 4 === 0 ? null : activities[hour % 2].id,
    activitySeconds: hour % 4 === 0 ? 0 : (15 * SECONDS_IN_MINUTE * hour) % SECONDS_IN_HOUR
  }))
}

export function formatSeconds(seconds) {
  const date = new Date()

  date.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECONDS)
  const utc = date.toUTCString()

  return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6)
}

export function generateActivitySelectOptions(activities) {
  return activities.map((activity) =>
    ({ value: activity.id, label: activity.name }))
}

export function generatePeriodSelectOptions(periodsInMinutes) {
  return periodsInMinutes.map((periodsInMinutes) => ({
      value: periodsInMinutes * SECONDS_IN_MINUTE,
      label: generatePeriodSelectOptionsLabel(periodsInMinutes)
  }))
}

function generatePeriodSelectOptionsLabel(periodsInMinutes) {
  const hours = Math.floor(periodsInMinutes / MINUTES_IN_HOUR).toString().padStart(2, 0)
  const minutes = (periodsInMinutes % MINUTES_IN_HOUR).toString().padStart(2, 0)

  return `${hours} : ${minutes}`
}
