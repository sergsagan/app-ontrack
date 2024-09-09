<script setup>
import { PAGE_TIMELINE } from '@/constans.js'
import { currentPage, navigate } from '@/router.js'
import { scrollToHour } from '@/timeline-items.js'

function handleClick() {
  currentPage.value === PAGE_TIMELINE ? scrollToHour() : navigate(PAGE_TIMELINE)
}
</script>

<template>
  <a
    :href="`#${PAGE_TIMELINE}`"
    @click="handleClick"
  >
    <img
      class="h-9"
      src="@/assets/img/logo.png"
      alt="Logo"
    >
  </a>
</template>
