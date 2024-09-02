<script setup>
import { ref } from 'vue'
import { TrashIcon } from '@heroicons/vue/24/outline/index.js'
import BaseSelect from './BaseSelect.vue'
import BaseButton from './BaseButton.vue'
import { PERIOD_SELECT_OPTIONS, BUTTON_TYPE_DANGER } from '@/constans.js'
import { isActivityValid } from '@/validators.js'

defineProps({
  activity: {
    type: String,
    required: true,
    validator: isActivityValid
  }
})

const secondsToComplete = ref(null);
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER">
        <TrashIcon class="h-8 text-white" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity }}</span>
    </div>
    <div>
      <BaseSelect
        class="font-mono"
        :selected="secondsToComplete"
        :options="PERIOD_SELECT_OPTIONS"
        placeholder="h:mm"
        @select="secondsToComplete = $event"
      />
    </div>
  </li>
</template>
