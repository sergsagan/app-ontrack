import {
  SECONDS_IN_HOUR,
  RANDOM_HOUR,
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
  MILLISECONDS_IN_SECONDS
} from '@/constans.js'
import { isNull } from './validators.js'

export function normalizeSelectValue(value) {
  return isNull(value) || isNaN(value) ? value : +value
}

export function currentHour() {
  return new Date().getHours()
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

export function formatSeconds(seconds) {
  const date = new Date()

  date.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECONDS)
  const utc = date.toUTCString()

  return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6)
}

export function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({ value: activity.id, label: activity.name }))
}

export function generatePeriodSelectOptions() {
  const periodsInMinutes = Array.from({ length: 32 }, (_, i) => (i + 1) * 15)

  return periodsInMinutes.map((periodsInMinutes) => ({
    value: periodsInMinutes * SECONDS_IN_MINUTE,
    label: generatePeriodSelectOptionsLabel(periodsInMinutes)
  }))
}

function generatePeriodSelectOptionsLabel(periodsInMinutes) {
  const hours = Math.floor(periodsInMinutes / MINUTES_IN_HOUR)
    .toString()
    .padStart(2, 0)
  const minutes = (periodsInMinutes % MINUTES_IN_HOUR).toString().padStart(2, 0)

  return `${hours} : ${minutes}`
}
