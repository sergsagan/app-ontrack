<script setup>
import { ICONS } from '@/icons.js'
import { isIconValid, isNotEmptyString } from '@/validators.js'

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
