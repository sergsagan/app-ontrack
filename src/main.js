import { createApp } from 'vue'
import { syncState } from '@/storage.js'
import App from './App.vue'

import './assets/main.css'

syncState()

document.addEventListener('visibilitychange', () =>
  syncState(document.visibilityState === 'visible')
)

createApp(App).mount('#app')
