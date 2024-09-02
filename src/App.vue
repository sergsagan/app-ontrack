<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppNavigation from '@/components/AppNavigation.vue'
import TimelinePage from '@/pages/TimelinePage.vue'
import ActivitiesPage from '@/pages/ActivitiesPage.vue'
import ProgressPage from '@/pages/ProgressPage.vue'

import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constans.js'
import { normalizePageHash, generateTimelineItems, generateActivitySelectOptions } from '@/function.js'

const timelineItems = generateTimelineItems()
const currentPage = ref(normalizePageHash())

const activities = ref(['Coding', 'Reading', 'Training'])

const activitySelectOptions = generateActivitySelectOptions(activities.value)

function goTo(page) {
  currentPage.value = page
}

function createActivity(activity) {
  activities.value.push(activity)
}

function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}

</script>

<template>
  <AppHeader  @navigate="goTo($event)" />
  <main class="flex flex-grow flex-col">
    <TimelinePage
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activity-select-options="activitySelectOptions"
    />
    <ActivitiesPage
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      @create-activity="createActivity"
      @delete-activity="deleteActivity"
    />
    <ProgressPage v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <AppNavigation
    :current-page="currentPage"
    @navigate="goTo($event)"
  />
</template>
