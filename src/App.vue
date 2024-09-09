<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppNavigation from '@/components/AppNavigation.vue'
import TimelinePage from '@/pages/TimelinePage.vue'
import ActivitiesPage from '@/pages/ActivitiesPage.vue'
import ProgressPage from '@/pages/ProgressPage.vue'

import {
  PAGE_ACTIVITIES,
  PAGE_PROGRESS,
  PAGE_TIMELINE
} from './constans.js'

import { currentPage } from '@/router.js'
</script>

<template>
  <AppHeader />
  <main class="flex flex-grow flex-col">
    <TimelinePage v-show="currentPage === PAGE_TIMELINE" />
    <ActivitiesPage v-show="currentPage === PAGE_ACTIVITIES" />
    <ProgressPage v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <AppNavigation />
</template>
