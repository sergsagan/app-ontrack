<script setup>
import { computed } from 'vue'
import BaseIcon from './BaseIcon.vue'
import { currentPage, navigate } from '@/router.js'
import { isNavItemValid } from '@/validators.js'
import { PAGE_TIMELINE } from '@/constans.js'
import { scrollToCurrentHour } from '@/timeline-items.js'

const props = defineProps({
  navItem: {
    type: Object,
    required: true,
    validator: isNavItemValid
  }
})

const classes = computed(() => [
  'flex flex-col items-center p-2 text-xs capitalize',
  { 'bg-gray-200': props.navItem?.page === currentPage.value }
])

function handleClick() {
  currentPage.value === PAGE_TIMELINE && props.navItem?.page === PAGE_TIMELINE
    ? scrollToCurrentHour(true)
    : navigate(props.navItem?.page)
}
</script>
<template>
  <li class="flex-1">
    <a
      :href="`#${props.navItem.page}`"
      :class="classes"
      @click="handleClick"
    >
      <BaseIcon :name="props.navItem.icon" class="h-6 w-6" /> {{ props.navItem.page }}
    </a>
  </li>
</template>
