import {
  RANDOM_HOUR,
  MINUTES_IN_HOUR,
  MILLISECONDS_IN_SECOND,
  LOW_PERCENT,
  HUNDRED_PERCENT,
  SECONDS_IN_MINUTE
} from '@/constans.ts'
import { isNull } from './validators.js'
import { type SelectOption, ProgressColorClass } from '@/types.ts'

export function normalizeSelectValue(value: any): any {
  return isNull(value) || isNaN(value) ? value : +value
}

export function id(): string {
  return Date.now().toString(RANDOM_HOUR) + Math.random().toString(RANDOM_HOUR).substring(2)
}

export function formatSecondsWithSign(seconds: number) {
  return `${seconds >= 0 ? '+' : '-'}${formatSeconds(seconds)}`
}

export function formatSeconds(seconds: number): string {
  const date = new Date()

  date.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECOND)
  const utc = date.toUTCString()

  return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6)
}

export function generatePeriodSelectOptions(): SelectOption<number>[] {
  const periodsInMinutes = Array.from({ length: 32 }, (_, i) => (i + 1) * 15)

  return periodsInMinutes.map(
    (periodsInMinutes): SelectOption<number> => ({
      value: periodsInMinutes * SECONDS_IN_MINUTE,
      label: generatePeriodSelectOptionsLabel(periodsInMinutes)
    })
  )
}

export function getProgressColorClass(percentage: number): ProgressColorClass {
  if (percentage < LOW_PERCENT) return ProgressColorClass.RED
  if (percentage < HUNDRED_PERCENT) return ProgressColorClass.YELLOW

  return ProgressColorClass.GREEN
}

function generatePeriodSelectOptionsLabel(periodsInMinutes: number) {
  const hours = Math.floor(periodsInMinutes / MINUTES_IN_HOUR)
    .toString()
    .padStart(2, '0')
  const minutes = (periodsInMinutes % MINUTES_IN_HOUR).toString().padStart(2, '0')

  return `${hours} : ${minutes}`
}
