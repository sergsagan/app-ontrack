<script setup>
import ProgressItem from '@/components/ProgressItem.vue'
import { trackedActivities } from '@/activities.js'
import ProgressEmptyState from '@/components/ProgressEmptyState.vue'
</script>

<template>
  <ul v-if="trackedActivities.length" class="divide-y">
    <ProgressItem
      v-for="activity in trackedActivities"
      :key="activity.id"
      :activity="activity"
    />
  </ul>
  <ProgressEmptyState v-else />
</template>
