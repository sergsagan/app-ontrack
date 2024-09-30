import { BUTTON_TYPES, HOURS_IN_DAY, MIDNIGHT_HOUR, NAV_ITEMS } from '@/constans.ts'
import { ICONS } from './icons.js'

export function isUndefinedOrNull(value: any): boolean {
  return isUndefined(value) || isNull(value)
}

export function isPageValid(page: any): boolean {
  return NAV_ITEMS.some((navItem) => navItem.page === page)
}

export function isIconValid(icon: any): boolean {
  return Object.keys(ICONS).includes(icon)
}

export function isTimelineItemValid({ hour }: any): boolean {
  return isHourValid(hour)
}

export function validateSelectOptions(options: any): boolean {
  return options.every(isSelectOptionValid)
}

export function isNavItemValid(navItem: any): boolean {
  return NAV_ITEMS.includes(navItem)
}

export function isActivityValid({ id, name, secondsToComplete }: any): boolean {
  if (isNull(id)) {
    return true
  }

  return [isNotEmptyString(id), isNotEmptyString(name), isNumber(secondsToComplete)].every(Boolean)
}

export function isHourValid(hour: any): boolean {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}

export function isButtonTypeValid(type: any): boolean {
  return BUTTON_TYPES.includes(type)
}

export function isNull(value: any): boolean {
  return value === null
}

export function isSelectValueValid(value: any): boolean {
  return isNotEmptyString(value) || isNumberOrNull(value)
}

export function isNotEmptyString(value: any): boolean {
  return isString(value) && value.length > 0
}

function isString(value: any): boolean {
  return typeof value === 'string'
}

function isNumberOrNull(value: any): boolean {
  return isNumber(value) || isNull(value)
}

function isBetween(value: any, start: any, end: any): boolean {
  return value >= start && value <= end
}

function isSelectOptionValid({ value, label }: any): boolean {
  return (isNumber(value) || isNotEmptyString(value)) && isNotEmptyString(label)
}

function isUndefined(value: any): boolean {
  return value === undefined
}

function isNumber(value: any): boolean {
  return typeof value === 'number'
}
