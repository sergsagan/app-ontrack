import { generatePeriodSelectOptions } from '@/function.ts'
import { IconName, type NavItem, type ButtonType } from '@/types.ts'

export const LOCAL_STORAGE_KEY = 'app-tracker'

export const PAGE_TIMELINE = 'timeline'
export const PAGE_ACTIVITIES = 'activity'
export const PAGE_PROGRESS = 'progress'

export const NAV_ITEMS: NavItem[] = [
  {
    page: PAGE_TIMELINE,
    icon: IconName.CLOCK
  },
  {
    page: PAGE_ACTIVITIES,
    icon: IconName.LIST_BULLET
  },
  {
    page: PAGE_PROGRESS,
    icon: IconName.CHART_BAR
  }
]

export const BUTTON_TYPE_PRIMARY = 'primary'
export const BUTTON_TYPE_DANGER = 'danger'
export const BUTTON_TYPE_NEUTRAL = 'neutral'
export const BUTTON_TYPE_SUCCESS = 'success'
export const BUTTON_TYPE_WARNING = 'warning'

export const BUTTON_TYPES: ButtonType[] = [
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_PRIMARY,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING
]

export const MILLISECONDS_IN_SECOND = 1000
export const MINUTES_IN_HOUR = 60
export const SECONDS_IN_MINUTE = 60
export const HOURS_IN_DAY = 24
export const SECONDS_IN_HOUR = MINUTES_IN_HOUR * SECONDS_IN_MINUTE
export const SECONDS_IN_DAY = HOURS_IN_DAY * SECONDS_IN_HOUR
export const MIDNIGHT_HOUR = 0
export const RANDOM_HOUR = 36
export const HUNDRED_PERCENT = 100
export const LOW_PERCENT = 50

export const PERIOD_SELECT_OPTIONS = generatePeriodSelectOptions()
