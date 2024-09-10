<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppNavigation from '@/components/AppNavigation.vue'
import { routes, currentPage } from '@/router.js'
</script>

<template>
  <AppHeader />
  <main class="flex flex-grow flex-col">
    <KeepAlive>
      <component :is="routes[currentPage]" />
    </KeepAlive>
  </main>
  <AppNavigation />
</template>
