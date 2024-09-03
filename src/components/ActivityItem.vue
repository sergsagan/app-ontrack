<script setup>
import { TrashIcon } from '@heroicons/vue/24/outline/index.js'
import BaseSelect from './BaseSelect.vue'
import BaseButton from './BaseButton.vue'
import { PERIOD_SELECT_OPTIONS, BUTTON_TYPE_DANGER } from '@/constans.js'
import { isActivityValid, isUndefined, isNumber } from '@/validators.js'

defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityValid
  }
})

const emit = defineEmits({
  setSecondsToComplete: isNumber,
  delete: isUndefined,
})
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton
        :type="BUTTON_TYPE_DANGER"
        @click="emit('delete')"
      >
        <TrashIcon class="h-8 text-white" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div>
      <BaseSelect
        class="font-mono"
        :selected="activity.secondsToComplete || null"
        :options="PERIOD_SELECT_OPTIONS"
        placeholder="h:mm"
        @select="emit('setSecondsToComplete', $event || 0)"
      />
    </div>
  </li>
</template>
