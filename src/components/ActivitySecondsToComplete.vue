<script setup>
import { computed, inject } from 'vue'
import { isActivityValid } from '@/validators.js'
import { formatSeconds, getTotalActivitySeconds } from '@/function.js'

const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityValid
  }
})

const timelineItems = inject('timelineItems')

const colorClasses = computed(() =>
  secondsDiff.value < 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
)

const seconds = computed(() => `${sign.value}${formatSeconds(secondsDiff.value)}`)

const sign = computed(() => secondsDiff.value >= 0 ? '+' : '-')

const secondsDiff = computed( () =>
  getTotalActivitySeconds(props.activity, timelineItems) - props.activity.secondsToComplete)
</script>

<template>
  <div :class="colorClasses" class="flex items-center rounded px-2 font-mono text-xl">
    {{ seconds }}
  </div>
</template>

<style scoped>

</style>
