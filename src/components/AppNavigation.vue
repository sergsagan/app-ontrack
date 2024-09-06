<script setup>
import NavigationItem from '@/components/NavigationItem.vue'
import { NAV_ITEMS } from '@/constans.js'

</script>

<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavigationItem
        v-for="navItem in NAV_ITEMS"
        :key="navItem.page"
        :nav-item="navItem"
      />
    </ul>
  </nav>
</template>
