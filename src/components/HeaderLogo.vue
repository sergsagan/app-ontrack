<script setup lang="ts">
import { currentPage, navigate } from '@/router.ts'
import { scrollToCurrentHour } from '@/timeline-items.ts'
import { IconName, PageName } from '@/types.ts'
import BaseIcon from './BaseIcon.vue'

function handleClick(): void {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  currentPage.value === PageName.TIMELINE
    ? scrollToCurrentHour(true)
    : navigate(PageName.TIMELINE)
}
</script>

<template>
  <a
    :href="`#${PageName.TIMELINE}`"
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
