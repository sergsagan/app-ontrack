import { LOCAL_STORAGE_KEY } from '@/constans.ts'
import { today } from '@/time.ts'
import { activeTimelineItem, initializeTimelineItems, timelineItems } from '@/timeline-items.ts'
import { activities, initializeActivities } from '@/activities.ts'
import { startTimelineItemTimer, stopTimelineItemTimer } from '@/timeline-item-timer.js'
import type { State } from '@/types.ts'

export function syncState(shouldLoad = true) {
  shouldLoad ? loadState() : saveState()

  if (activeTimelineItem.value) {
    shouldLoad ? startTimelineItemTimer() : stopTimelineItemTimer()
  }
}

function loadState() {
  const state = loadFromLocalStorage()

  initializeActivities(state)

  initializeTimelineItems(state)
}

function saveState() {
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify({
      timelineItems: timelineItems.value,
      activities: activities.value,
      lastActiveAt: today()
    })
  )
}

function loadFromLocalStorage(): State {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? '{}')
}
