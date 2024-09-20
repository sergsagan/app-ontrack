import { createApp } from 'vue'
import { syncState } from '@/storage.js'
import { startCurrentDateTimer } from '@/time.js'
import App from './App.vue'

import './assets/main.css'

syncState()

startCurrentDateTimer()

document.addEventListener('visibilitychange', () =>
  syncState(document.visibilityState === 'visible')
)

createApp(App).mount('#app')
