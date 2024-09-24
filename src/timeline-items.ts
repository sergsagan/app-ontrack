import { computed, ref, watch } from 'vue'
import { HOURS_IN_DAY, MIDNIGHT_HOUR } from '@/constans.ts'
import { endOfHour, isToday, now, today, toSeconds } from '@/time.ts'
import { stopTimelineItemTimer } from '@/timeline-item-timer.js'
import type { Activity, State, TimelineItem } from '@/types.ts'

export const timelineItemRefs = ref<any>([])

export const timelineItems = ref<TimelineItem[]>([])

export const activeTimelineItem = computed((): TimelineItem | undefined => {
  return timelineItems?.value.find(({ isActive }): boolean => isActive)
})

watch(now, (after, before) => {
  if (activeTimelineItem.value && activeTimelineItem.value.hour !== after.getHours()) {
    stopTimelineItemTimer()
  }

  if (before.getHours() !== after.getHours() && after.getHours() === MIDNIGHT_HOUR) {
    resetTimelineItems()
  }
})

export function initializeTimelineItems(state: State) {
  const lastActiveAt = new Date(state.lastActiveAt)

  timelineItems.value = state.timelineItems ?? generateTimelineItems()

  if (activeTimelineItem.value && isToday(lastActiveAt)) {
    syncIdleSeconds(lastActiveAt)
  } else if (state.timelineItems && !isToday(lastActiveAt)) {
    resetTimelineItems()
  }
}

export function updateTimelineItem(timelineItem: TimelineItem, fields: any): TimelineItem {
  return Object.assign(timelineItem, fields)
}

export function calculateTrackedActivitySeconds(timelineItems: TimelineItem[], activity: Activity): number {
  return filterTimelineItemsWithActivity(timelineItems, activity)
    .map(({ activitySeconds }: TimelineItem): number => activitySeconds)
    .reduce((total: number, seconds: number): number => Math.round(total + seconds), 0)
}

export function scrollToCurrentHour(isSmooth = false) {
  scrollToHour(today().getHours(), isSmooth)
}

export function scrollToHour(hour: number, isSmooth = true) {
  const el: any = hour === MIDNIGHT_HOUR ? document.body : timelineItemRefs.value[hour - 1].$el

  el.scrollIntoView({ behavior: isSmooth ? 'smooth' : 'instant' })
}

export function resetTimelineItemActivities(timelineItems: TimelineItem[], activity: Activity) {
  filterTimelineItemsWithActivity(timelineItems, activity).forEach((timelineItem: TimelineItem): void => {
      updateTimelineItem(timelineItem, {
        activityId: null,
        activitySeconds: timelineItem.hour === today().getHours() ? timelineItem.activitySeconds : 0
      })
  })
}

function filterTimelineItemsWithActivity(timelineItems: TimelineItem[], { id }: Activity): TimelineItem[] {
  return timelineItems.filter(({ activityId }) => activityId === id)
}

function generateTimelineItems() {
  return [...Array(HOURS_IN_DAY).keys()].map((hour) => ({
    hour,
    activityId: null,
    activitySeconds: 0,
    isActive: false
  }))
}

function syncIdleSeconds(lastActiveAt: Date) {
  updateTimelineItem(activeTimelineItem.value as any, {
    activitySeconds: (activeTimelineItem.value as any).activitySeconds + calculateIdleSeconds(lastActiveAt)
  })
}

function calculateIdleSeconds(lastActiveAt: Date) {
  return lastActiveAt.getHours() === today().getHours()
    ? toSeconds((today() as any) - (lastActiveAt as any))
    : toSeconds((endOfHour(lastActiveAt) as any) - (lastActiveAt as any))
}

function resetTimelineItems() {
  timelineItems.value.forEach((timelineItem): void => {
      updateTimelineItem(timelineItem, {
        activitySeconds: 0,
        isActive: false
      })
  })
}
