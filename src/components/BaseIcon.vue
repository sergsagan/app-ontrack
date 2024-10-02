<script setup lang="ts">
import { ICONS } from '@/icons.ts'
import type { IconName } from '@/types.ts'

defineProps<{ name: IconName }>()
</script>

<template>
  <component
    :is="ICONS[name]"
    :class="$attrs.class || 'h-8'"
  />
</template>
