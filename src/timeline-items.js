import { ref } from 'vue'
import { activities } from '@/activities.js'
import { HOURS_IN_DAY } from '@/constans.js'

export const timelineItems = ref(generateTimelineItems())

export function updateTimelineItem(timelineItem, fields) {
  return Object.assign(timelineItem, fields)
}

export function resetTimelineItemActivities(activity) {
  filterTimelineItemsWithActivity(activity)
    .forEach(timelineItem => updateTimelineItem(timelineItem, { activityId: null, activitySeconds: 0 }))
}

export function getTotalActivitySeconds(activity) {
  return filterTimelineItemsWithActivity(activity)
    .reduce((totalSeconds, timelineItem) => Math.round(timelineItem.activitySeconds + totalSeconds), 0)
}

function filterTimelineItemsWithActivity(activity) {
  if (Array.isArray(timelineItems.value)) {
    return timelineItems.value.filter(timelineItem => hasActivity(timelineItem, activity))
  }
  return []
}

function hasActivity(timelineItem, activity) {
  return timelineItem.activityId === activity.id
}

function generateTimelineItems() {
  return [...Array(HOURS_IN_DAY).keys()].map((hour) => ({
    hour,
    activityId: [0, 1, 2, 3, 4].includes(hour) ? activities.value[hour % 3].id : null,
    activitySeconds: [0, 1, 2, 3, 4].includes(hour) ? hour * 600 : 0
    /*activityId: hour % 4 === 0 ? null : activities[hour % 2].id,
    activitySeconds: hour % 4 === 0 ? 0 : (15 * SECONDS_IN_MINUTE * hour) % SECONDS_IN_HOUR*/
  }))
}
