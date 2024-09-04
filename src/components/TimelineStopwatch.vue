<script setup>
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/outline/index.js'
import {
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING,
  MILLISECONDS_IN_SECONDS
} from '@/constans.js'
import { isHourValid, isNumber } from '@/validators.js'
import { formatSeconds } from '../function.js'

const props = defineProps({
  seconds: {
    type: Number,
    default: 0,
    validator: isNumber
  },
  hour: {
    type: Number,
    required: true,
    validator: isHourValid
  }
})

const seconds = ref(props.seconds)
const isRunning = ref(false)
let isInterval = null

const isStartButtonDisabled = props.hour !== new Date().getHours()

function start() {
  if (!isRunning.value) {
    isRunning.value = true
    isInterval = setInterval(() => {
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
      <ArrowPathIcon class="h-8 text-white" />
    </BaseButton>
    <div class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-3xl">
      {{ formatSeconds(seconds) }}
    </div>
    <BaseButton
      v-if="isRunning"
      :type="BUTTON_TYPE_WARNING"
      @click="stop"
    >
      <PauseIcon class="h-8 text-white" />
    </BaseButton>
    <BaseButton
      v-else
      :type="BUTTON_TYPE_SUCCESS"
      @click="start"
      :disabled="isStartButtonDisabled"
    >
      <PlayIcon class="h-8 text-white" />
    </BaseButton>
  </div>
</template>
