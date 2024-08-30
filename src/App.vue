<script setup>
import { ref } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import AppNavigation from '@/components/AppNavigation.vue';
import TimelinePage from '@/pages/TimelinePage.vue';
import ActivitiesPage from '@/pages/ActivitiesPage.vue';
import ProgressPage from '@/pages/ProgressPage.vue';
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constans.js';
import { normalizePageHash } from '@/function.js'

const currentPage = ref(normalizePageHash());

function goTo(page) {
  currentPage.value = page
}
</script>

<template>
  <AppHeader
    @go-to-timeline="goTo(PAGE_TIMELINE)"
    @go-to-progress="goTo(PAGE_PROGRESS)"
  />
  <main class="flex flex-grow flex-col">
    <TimelinePage v-show="currentPage === PAGE_TIMELINE" />
    <ActivitiesPage v-show="currentPage === PAGE_ACTIVITIES" />
    <ProgressPage v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <AppNavigation
    :current-page="currentPage"
    @navigate="goTo($event)"
  />
</template>
