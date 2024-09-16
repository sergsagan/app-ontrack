<script setup>
import { computed, ref, watchEffect, onActivated, onDeactivated } from 'vue'
import {
  HUNDRED_PERCENT,
  MILLISECONDS_IN_SECONDS,
  MINUTES_IN_HOUR,
  SECONDS_IN_DAY,
  SECONDS_IN_MINUTE
} from '@/constans.js'

const barRef = ref()
const secondsSinceMidnight = ref(calculateSecondsSinceMidnight())

let timer = null

onActivated(() => {
  secondsSinceMidnight.value = calculateSecondsSinceMidnight()

  timer = setInterval(() => secondsSinceMidnight.value++, MILLISECONDS_IN_SECONDS)
})

onDeactivated(() => clearInterval(timer))

const topOffset = computed(() => {
  return (secondsSinceMidnightInPercentage.value * getTimelineHeight()) / HUNDRED_PERCENT
})

const  secondsSinceMidnightInPercentage = computed(() => {
  return (HUNDRED_PERCENT * secondsSinceMidnight.value) / SECONDS_IN_DAY
})

watchEffect(() => {
  if (secondsSinceMidnight.value > SECONDS_IN_DAY) {
    secondsSinceMidnight.value = 0
  }
})

function calculateSecondsSinceMidnight() {
  const now = new Date()

  return SECONDS_IN_MINUTE * MINUTES_IN_HOUR * now.getHours() +
    SECONDS_IN_MINUTE * now.getMinutes() +
    now.getSeconds()
}

function getTimelineHeight() {
  return barRef.value?.parentNode.getBoundingClientRect().height
}
</script>

<template>
  <hr
    ref="barRef"
    class="pointer-events-none absolute z-10 w-full border-b-2 border-red-600"
    :style="{ top: `${topOffset}px` }"
  >
</template>

