<script setup>
import { computed } from 'vue'
import { isActivityValid } from '@/validators.js'
import { formatSecondsWithSign } from '@/function.js'
import { calculateTrackedActivitySeconds, timelineItems } from '@/timeline-items.js'

const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityValid
  }
})

const colorClasses = computed(() =>
  remainingSeconds.value < 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
)

const remainingSeconds = computed(() =>
  calculateTrackedActivitySeconds(timelineItems.value, props.activity) - props.activity?.secondsToComplete
)
</script>

<template>
  <div :class="colorClasses" class="flex items-center rounded px-2 font-mono text-xl">
    {{ formatSecondsWithSign(remainingSeconds) }}
  </div>
</template>
