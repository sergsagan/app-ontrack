<script setup>
import { computed, ref } from 'vue'
import { HUNDRED_PERCENT, } from '@/constans.js'
import { useSecondsSinceMidnight } from '@/composables/seconds-since-midnight.js'

const barRef = ref()

const { secondsSinceMidnightInPercentage } = useSecondsSinceMidnight()

const topOffset = computed(() => {
  return (secondsSinceMidnightInPercentage.value * getTimelineHeight()) / HUNDRED_PERCENT
})

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

