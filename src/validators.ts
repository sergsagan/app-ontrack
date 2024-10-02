import { NAV_ITEMS } from '@/constans.ts'

export function isUndefinedOrNull(value: any): boolean {
  return isUndefined(value) || isNull(value)
}

export function isPageValid(page: any): boolean {
  return NAV_ITEMS.some((navItem) => navItem.page === page)
}

export function isNull(value: any): boolean {
  return value === null
}

function isUndefined(value: any): boolean {
  return value === undefined
}
