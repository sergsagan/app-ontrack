import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from '@/constans.ts'

export type PageName = typeof PAGE_TIMELINE | typeof PAGE_ACTIVITIES | typeof PAGE_PROGRESS

export interface Activity {
  id: string
  name: string
  secondsToComplete: number
}

export interface ActivitySelectOption {
  value: string
  label: string
}

export interface State {
  timelineItems: any
  activities: Activity[]
  lastActiveAt: Date
}

export interface PeriodSelectOption {
  value: number
  label: string
}
