<script setup lang="ts">
import { computed } from 'vue'
import { formatSecondsWithSign } from '@/function.ts'
import { calculateTrackedActivitySeconds, timelineItems } from '@/timeline-items.ts'
import type { Activity } from '@/types.js'

const props = defineProps<{ activity: Activity }>()

const colorClasses = computed((): string =>
  remainingSeconds.value < 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
)

const remainingSeconds = computed((): number =>
    calculateTrackedActivitySeconds(timelineItems.value, props.activity) -
    props.activity.secondsToComplete
)
</script>

<template>
  <div
    :class="colorClasses"
    class="flex items-center rounded px-2 font-mono text-xl"
  >
    {{ formatSecondsWithSign(remainingSeconds) }}
  </div>
</template>
