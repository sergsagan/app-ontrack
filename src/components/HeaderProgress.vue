<script setup lang="ts">
import BaseIcon from './BaseIcon.vue'
import { HUNDRED_PERCENT } from '@/constans.ts'
import { navigate } from '@/router.ts'
import { useTotalProgress } from '@/composables/total-progress.ts'
import { IconName, PageName } from '@/types.ts'

const { colorClass, percentage } = useTotalProgress()
</script>

<template>
  <a
    :href="`#${PageName.PROGRESS}`"
    class="text-sm"
    @click="navigate(PageName.PROGRESS)"
  >
    <div
      v-if="percentage < HUNDRED_PERCENT"
      class="flex items-center gap-1"
    >
      <div>
        Progress: <span class="font-mono">{{ percentage }}%</span>
      </div>
      <div :class="`h-3 w-3 rounded-full ${colorClass}`" />
    </div>
    <div
      v-else
      class="flex items-center gap-1"
    >
      Day complete!
      <BaseIcon
        :name="IconName.CHECK_CIRCLE"
        classes="h-7 text-green-500"
      />
    </div>
  </a>
</template>
