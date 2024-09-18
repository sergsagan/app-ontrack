import { ref } from 'vue'
import { MILLISECONDS_IN_SECOND } from '@/constans.js'

export function useStopwatch(initialSeconds) {
  const seconds = ref(initialSeconds)
  const isRunning = ref(false)
  let isInterval = null
  const temp = 1

  function start() {
    if (!isRunning.value) {
      isRunning.value = true

      isInterval = setInterval(() => {seconds.value += temp}, MILLISECONDS_IN_SECOND)
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

  return {
    seconds,
    isRunning,
    start,
    stop,
    reset,
  }
}
