<script setup>
import { PAGE_TIMELINE } from '@/constans.ts'
import { currentPage, navigate } from '@/router.js'
import { scrollToCurrentHour } from '@/timeline-items.js'
import { ICON_CLOCK } from '@/icons.js'
import BaseIcon from './BaseIcon.vue'

function handleClick() {
  currentPage.value === PAGE_TIMELINE ? scrollToCurrentHour(true) : navigate(PAGE_TIMELINE)
}
</script>

<template>
  <a
    :href="`#${PAGE_TIMELINE}`"
    @click="handleClick"
    class="origin-left scale-125 rounded bg-green-500 p-1 text-white"
  >
    <BaseIcon :name="ICON_CLOCK" class="h-5" />
  </a>
  Tracker
</template>
