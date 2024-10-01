<script setup>
import { ICONS } from '@/icons.ts'
import { isIconValid, isNotEmptyString } from '@/validators.ts'

defineProps({
  name: {
    type: String,
    required: true,
    validator: isIconValid
  },
  classes: {
    type: String,
    default: 'h-8',
    validator: isNotEmptyString
  }
})
</script>

<template>
  <component :is="ICONS[name]" :class="classes" />
</template>
