<script setup>
import { ref } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import Navigation from '@/components/Navigation.vue';
import TimelinePage from '@/pages/TimelinePage.vue';
import ActivitiesPage from '@/pages/ActivitiesPage.vue';
import ProgressPage from '@/pages/ProgressPage.vue';
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constans.js';

const currentPage = ref(normalizePageHash());

function normalizePageHash() {
  const hash = window.location.hash.slice(1);

  if ([PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE].includes(hash)) {
    return hash;
  }
  window.location.hash = PAGE_TIMELINE;

  return PAGE_TIMELINE;
}
</script>

<template>
  <AppHeader />
  <main class="flex flex-grow flex-col">
    <TimelinePage v-show="currentPage === PAGE_TIMELINE" />
    <ActivitiesPage v-show="currentPage === PAGE_ACTIVITIES" />
    <ProgressPage v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <Navigation :current-page="currentPage" @navigate="currentPage = $event" />
</template>
