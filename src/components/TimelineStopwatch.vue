<script setup>
import { watchEffect } from 'vue'
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import {
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING,
} from '@/constans.js'
import { ICON_ARROW_PATH, ICON_PAUSE, ICON_PLAY } from '@/icons.js'
import { isTimelineItemValid } from '@/validators.js'
import { formatSeconds } from '../function.js'
import { useStopwatch } from '@/composables/stopwatch.js'
import { updateTimelineItem } from '@/timeline-items.js'
import { now } from '@/time.js'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  }
})

const { seconds, isRunning, start, reset, stop } = useStopwatch(
  props.timelineItem?.activitySeconds
)

watchEffect(() => {
  if (props.timelineItem?.hour !== now.value.getHours() && isRunning.value) {
    stop()
  }
})

watchEffect(() =>
  updateTimelineItem(
    props.timelineItem,
    { activitySeconds: seconds.value }
  )
)
</script>

<template>
  <div class="flex w-full gap-2 items-center">
    <BaseButton
      :type="BUTTON_TYPE_DANGER"
      :disabled="!props.timelineItem.activitySeconds"
      @click="reset"
    >
      <BaseIcon :name="ICON_ARROW_PATH" class="text-white" />
    </BaseButton>
    <div class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-3xl">
      {{ formatSeconds(props.timelineItem.activitySeconds) }}
    </div>
    <BaseButton
      v-if="isRunning"
      :type="BUTTON_TYPE_WARNING"
      @click="stop"
    >
      <BaseIcon :name="ICON_PAUSE" class="text-white" />
    </BaseButton>
    <BaseButton
      v-else
      :type="BUTTON_TYPE_SUCCESS"
      @click="start"
      :disabled="props.timelineItem.hour !== now.getHours()"
    >
      <BaseIcon :name="ICON_PLAY" class="text-white" />
    </BaseButton>
  </div>
</template>
