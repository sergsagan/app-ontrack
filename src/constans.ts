import { generatePeriodSelectOptions } from '@/function.ts'
import { ButtonType, IconName, type NavItem, PageName } from '@/types.ts'

export const LOCAL_STORAGE_KEY = 'app-tracker'

export const NAV_ITEMS: NavItem[] = [
  {
    page: PageName.TIMELINE,
    icon: IconName.CLOCK
  },
  {
    page: PageName.ACTIVITIES,
    icon: IconName.LIST_BULLET
  },
  {
    page: PageName.PROGRESS,
    icon: IconName.CHART_BAR
  }
]

export const BUTTON_TYPES: ButtonType[] = [
  ButtonType.DANGER,
  ButtonType.NEUTRAL,
  ButtonType.PRIMARY,
  ButtonType.SUCCESS,
  ButtonType.WARNING
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
