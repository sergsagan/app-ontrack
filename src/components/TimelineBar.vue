<script setup lang="ts">
import { computed, ref } from 'vue'
import { HUNDRED_PERCENT } from '@/constans.ts'
import { secondsSinceMidnightInPercentage } from '@/time.ts'

const barRef = ref<HTMLHRElement | null>(null)

const topOffset = computed((): number => {
  return (secondsSinceMidnightInPercentage.value * getTimelineHeight()) / HUNDRED_PERCENT
})

function getTimelineHeight(): number {
  return barRef.value?.parentElement?.getBoundingClientRect().height ?? 0
}
</script>

<template>
  <hr
    ref="barRef"
    class="pointer-events-none absolute z-10 w-full border-b-2 border-red-600"
    :style="{ top: `${topOffset}px` }"
  >
</template>
