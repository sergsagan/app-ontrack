<script setup>
import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/outline';

const navItems = ['timeline', 'activities', 'progress'];
</script>

<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <li
        v-for="page in navItems"
        :key="page"
        class="flex-1"
      >
        <a
          class="flex flex-col items-center p-2 text-xs capitalize"
          :href="`#${page}`"
        >
          <ClockIcon v-if="page === 'timeline'" class="h-6 w-6" />
          <ListBulletIcon v-else-if="page === 'activities'" class="h-6 w-6" />
          <ChartBarIcon v-else class="h-6 w-6" />
          {{ page }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>
