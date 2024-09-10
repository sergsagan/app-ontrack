<script setup>
import { ref, watch } from 'vue'
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import {
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING,
  MILLISECONDS_IN_SECONDS
} from '@/constans.js'

import { isTimelineItemValid } from '@/validators.js'
import { currentHour, formatSeconds } from '../function.js'
import { updateTimelineItem } from '@/timeline-items.js'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  }
})

const seconds = ref(props.timelineItem?.activitySeconds)
const isRunning = ref(false)
let isInterval = null

const isStartButtonDisabled = props.timelineItem?.hour !==currentHour()

watch(
  () => props.timelineItem?.activityId,
  () => updateTimelineItem(props.timelineItem, { activitySeconds: seconds.value }))

function start() {


  if (!isRunning.value) {
    isRunning.value = true

    isInterval = setInterval(() => {
      updateTimelineItem(props.timelineItem, { activitySeconds: props.timelineItem?.activitySeconds + 1 })
      seconds.value++
    }, MILLISECONDS_IN_SECONDS)
  }
}
function stop() {
  clearInterval(isInterval)

  isRunning.value = false
}
function reset() {
  stop()
  updateTimelineItem(props.timelineItem, { activitySeconds :props.timelineItem?.activitySeconds - seconds.value })
  seconds.value = 0
}
</script>

<template>
  <div class="flex w-full gap-2 items-center">
    <BaseButton
      :type="BUTTON_TYPE_DANGER"
      :disabled="!seconds"
      @click="reset"
    >
      <BaseIcon name="ArrowPath" class="h-8 text-white" />
    </BaseButton>
    <div class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-3xl">
      {{ formatSeconds(seconds) }}
    </div>
    <BaseButton
      v-if="isRunning"
      :type="BUTTON_TYPE_WARNING"
      @click="stop"
    >
      <BaseIcon name="Pause" class="h-8 text-white" />
    </BaseButton>
    <BaseButton
      v-else
      :type="BUTTON_TYPE_SUCCESS"
      @click="start"
      :disabled="isStartButtonDisabled"
    >
      <BaseIcon name="Play" class="h-8 text-white" />
    </BaseButton>
  </div>
</template>
