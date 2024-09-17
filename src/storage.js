import { APP_NAME } from '@/constans.js';
import { isToday, today } from '@/time.js'
import { timelineItems } from '@/timeline-items.js'
import { activities } from '@/activities.js'

export function loadState() {
  const serializesState = localStorage.getItem(APP_NAME)

  const state = serializesState ? JSON.parse(serializesState) : {}

  timelineItems.value = isToday(new Date(state.date)) ? state.timelineItems : timelineItems.value
  activities.value = serializesState.activities || activities.value
}

export function saveState() {
  localStorage.setItem(
    APP_NAME,
    JSON.stringify({
      timelineItems: timelineItems.value,
      activities: activities.value,
      date: today()
    })
  )
}
