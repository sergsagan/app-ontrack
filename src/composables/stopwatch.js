import { ref } from 'vue'
import { MILLISECONDS_IN_SECONDS } from '@/constans.js'

export function useStopwatch(initialSeconds, handleSecondsChange) {
  const seconds = ref(initialSeconds)
  const isRunning = ref(false)
  let isInterval = null

  function start() {
    if (!isRunning.value) {
      isRunning.value = true

      isInterval = setInterval(() => {
        seconds.value++

        handleSecondsChange()
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

    handleSecondsChange()
  }

  return {
    seconds,
    isRunning,
    start,
    stop,
    reset,
  }
}
