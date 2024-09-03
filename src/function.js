import {
  PAGE_TIMELINE,
  HOURS_IN_DAY,
  MIDNIGHT_HOUR,
  SECONDS_IN_HOUR,
  RANDOM_HOUR
} from '@/constans.js'
import { isPageValid } from './validators.js'

export function normalizePageHash() {
  const page = window.location.hash.slice(1)

  if (isPageValid(page)) {
    return page
  }
  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
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

export function generateTimelineItems() {
  const timelineItems = []

  for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour })
  }

  return timelineItems
}

export function generateActivitySelectOptions(activities) {
  return activities.map((activity) =>
    ({ value: activity.id, label: activity.name }))
}
