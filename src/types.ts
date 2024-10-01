import {
  PAGE_ACTIVITIES,
  PAGE_PROGRESS,
  PAGE_TIMELINE
} from '@/constans.ts'

export type PageName = typeof PAGE_TIMELINE | typeof PAGE_ACTIVITIES | typeof PAGE_PROGRESS

export interface Activity {
  id: string
  name: string
  secondsToComplete: number
}

export interface SelectOption<T = string> {
  value: T
  label: string
}

export interface State {
  timelineItems: TimelineItem[]
  activities: Activity[]
  lastActiveAt: Date
}

export interface TimelineItem {
  hour: number
  activityId: Activity['id'] | null
  activitySeconds: number
  isActive: boolean
}

export interface NavItem {
  page: PageName
  icon: string
}

export enum ProgressColorClass {
  RED = 'bg-red-500',
  YELLOW = 'bg-yellow-500',
  GREEN = 'bg-green-500'
}

export enum IconName {
  CHECK_CIRCLE = 'CheckCircle',
  LIST_BULLET = 'ListBullet',
  ARROW_PATH = 'ArrowPath',
  CHART_BAR = 'ChartBar',
  CLOCK = 'Clock',
  TRASH = 'Trash',
  X_MARK = 'XMark',
  PAUSE = 'Pause',
  PLAY = 'Play',
  PLUS = 'Plus'
}

export enum ButtonType {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  WARNING = 'warning',
  NEUTRAL = 'neutral',
  DANGER = 'danger'
}
