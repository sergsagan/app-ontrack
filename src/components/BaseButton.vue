<script lang="ts">
import { ButtonType } from '@/types.ts'

const typeClasses: Record<ButtonType, string> = {
  [ButtonType.DANGER]: 'bg-red-500 enabled:hover:bg-red-600',
  [ButtonType.NEUTRAL]: 'bg-gray-100 enabled:hover:bg-gray-200',
  [ButtonType.PRIMARY]: 'bg-purple-500 enabled:hover:bg-purple-600',
  [ButtonType.SUCCESS]: 'bg-green-500 enabled:hover:bg-green-600',
  [ButtonType.WARNING]: 'bg-yellow-500 enabled:hover:bg-yellow-600'
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<{ type?: ButtonType }>(), {
  type: ButtonType.PRIMARY
})

const classes = [
  'rounded p-3 disabled:cursor-not-allowed disabled:opacity-50',
  typeClasses[props.type]
]
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>
