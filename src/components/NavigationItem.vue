<script setup>
import { computed } from 'vue'
import BaseIcon from './BaseIcon.vue'
import { currentPage, navigate } from '@/router.js'
import { isNavItemValid } from '@/validators.js'

const props = defineProps({
  navItem: {
    type: Object,
    required: true,
    validator: isNavItemValid
  }
})
const classes = computed(() => [
  'flex flex-col items-center p-2 text-xs capitalize',
  { 'bg-gray-200 pointer-events-none': props.navItem.page === currentPage.value }
])
</script>
<template>
  <li class="flex-1">
    <a
      :href="`#${navItem.page}`"
      :class="classes"
      @click="navigate(navItem.page)"
    >
      <BaseIcon :name="navItem.icon" class="h-6 w-6" /> {{ navItem.page }}
    </a>
  </li>
</template>
