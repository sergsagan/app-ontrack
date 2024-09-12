import { ref } from 'vue'
import { MILLISECONDS_IN_SECONDS } from '@/constans.js'

export function useStopwatch(initialSeconds) {
  const seconds = ref(initialSeconds)
  const isRunning = ref(false)
  let isInterval = null

  function start() {
    if (!isRunning.value) {
      isRunning.value = true

      isInterval = setInterval(() => {seconds.value++}, MILLISECONDS_IN_SECONDS)
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
