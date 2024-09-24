import {
  RANDOM_HOUR,
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
  MILLISECONDS_IN_SECOND,
  LOW_PERCENT,
  HUNDRED_PERCENT
} from '@/constans.ts'
import { isNull } from './validators.js'

enum ProgressColorClass {
  RED = 'bg-red-500',
  YELLOW = 'bg-yellow-500',
  GREEN = 'bg-green-500'
}

interface PeriodSelectOption {
  value: number
  label: string
}

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

export function generatePeriodSelectOptions(): PeriodSelectOption[] {
  const periodsInMinutes = Array.from({ length: 32 }, (_, i) => (i + 1) * 15)

  return periodsInMinutes.map((periodsInMinutes): PeriodSelectOption => ({
    value: periodsInMinutes * SECONDS_IN_MINUTE,
    label: generatePeriodSelectOptionsLabel(periodsInMinutes)
  }))
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
