import { BUTTON_TYPES, HOURS_IN_DAY, MIDNIGHT_HOUR, NAV_ITEMS } from '@/constans.js'
import { ICONS } from './icons.js'

export function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value)
}

export function isPageValid(page) {
  return NAV_ITEMS.some((navItem) => navItem.page === page)
}

export function isIconValid(icon) {
  return Object.keys(ICONS).includes(icon)
}

export function isTimelineItemValid({ hour }) {
  return isHourValid(hour)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

export function isNavItemValid(navItem) {
  return NAV_ITEMS.includes(navItem)
}

export function isActivityValid({ id, name, secondsToComplete }) {
  if (isNull(id)) {
    return true
  }

  return [isNotEmptyString(id), isNotEmptyString(name), isNumber(secondsToComplete)].every(Boolean)
}

export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}

export function isButtonTypeValid(type) {
  return BUTTON_TYPES.includes(type)
}

export function isNull(value) {
  return value === null
}

export function isSelectValueValid(value) {
  return isNotEmptyString(value) || isNumberOrNull(value)
}

export function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}

function isString(value) {
  return typeof value === 'string'
}

function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}

function isBetween(value, start, end) {
  return value >= start && value <= end
}

function isSelectOptionValid({ value, label }) {
  return (isNumber(value) || isNotEmptyString(value)) && isNotEmptyString(label)
}

function isUndefined(value) {
  return value === undefined
}

function isNumber(value) {
  return typeof value === 'number'
}
