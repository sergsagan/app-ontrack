import { APP_NAME, MILLISECONDS_IN_SECOND, SECONDS_IN_HOUR } from '@/constans.js'
import { isToday, today } from '@/time'
import { timelineItems } from '@/timeline-items'
import { activities } from '@/activities'

export function loadState() {
  const serializedState = localStorage.getItem(APP_NAME)

  const state = serializedState ? JSON.parse(serializedState) : {}

  activities.value = state.activities || activities.value

  const lastActiveAt = new Date(state.lastActiveAt)

  timelineItems.value = isToday(lastActiveAt)
    ? syncIdleSeconds(state.timelineItems, lastActiveAt)
    : timelineItems.value

}

export function saveState() {
  localStorage.setItem(
    APP_NAME,
    JSON.stringify({
      timelineItems: timelineItems.value,
      activities: activities.value,
      lastActiveAt: today()
    })
  )
}

function syncIdleSeconds(timelineItems, lastActiveAt) {
  const activeTimelineItem = timelineItems.find(({ isActive }) => isActive)

  if (activeTimelineItem) {
    activeTimelineItem.activitySeconds += calculateIdleSeconds(lastActiveAt)
  }

  return timelineItems
}

function calculateIdleSeconds(lastActiveAt) {
  let idleMilliseconds = today() - lastActiveAt

  if (lastActiveAt.getHours() !== today().getHours()) {
    idleMilliseconds = getEndIdleHour(lastActiveAt) - lastActiveAt
  }

  return idleMilliseconds / MILLISECONDS_IN_SECOND
}

function getEndIdleHour(lastActiveAt) {
  const endIdleHour = new Date(lastActiveAt)

  endIdleHour.setTime(endIdleHour.getTime() + SECONDS_IN_HOUR * MILLISECONDS_IN_SECOND)

  endIdleHour.setMinutes(0, 0, 0)

  return endIdleHour
}
