<script setup>
import { formatSeconds } from '@/function.js'
import { isActivityValid } from '@/validators.js'
import { useProgress } from '@/composables/progress.js'

const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityValid
  }
})

const { colorClass, percentage, trackedSeconds} = useProgress(props.activity)
</script>

<template>
  <li class="flex flex-col gap-1 p-4">
    <div class="truncate text-xl">{{ props.activity.name }}</div>
    <div class="flex h-5 overflow-hidden rounded bg-neutral-200">
      <div
        :class="colorClass"
        :style="`width: ${percentage}%`"
      />
    </div>
    <div class="flex justify-between font-mono text-sm">
      <span>{{ percentage }}%</span>
      <span>
        {{ formatSeconds(trackedSeconds) }} /
        {{ formatSeconds(props.activity.secondsToComplete) }}
      </span>
    </div>
  </li>
</template>

