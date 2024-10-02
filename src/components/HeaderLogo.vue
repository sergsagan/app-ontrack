<script setup lang="ts">
import { PAGE_TIMELINE } from '@/constans.ts'
import { currentPage, navigate } from '@/router.ts'
import { scrollToCurrentHour } from '@/timeline-items.ts'
import { IconName } from '@/types.ts'
import BaseIcon from './BaseIcon.vue'

function handleClick(): void {
  currentPage.value === PAGE_TIMELINE
    ? scrollToCurrentHour(true)
    : navigate(PAGE_TIMELINE)
}
</script>

<template>
  <a
    :href="`#${PAGE_TIMELINE}`"
    class="origin-left scale-125 rounded bg-green-500 p-1 text-white"
    @click="handleClick"
  >
    <BaseIcon
      :name="IconName.CLOCK"
      class="h-5"
    />
  </a>
  Tracker
</template>
