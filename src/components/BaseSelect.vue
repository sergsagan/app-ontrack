<script setup>
import { computed } from 'vue'
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import { ICON_X_MARK } from '@/icons.js'
import { validateSelectOptions, isUndefinedOrNull, isSelectValueValid } from '@/validators.js'
import { BUTTON_TYPE_NEUTRAL } from '@/constans.js'
import { normalizeSelectValue } from '@/function.js'

const props = defineProps({
  selected: [Number, String],
  placeholder: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true,
    validator: validateSelectOptions
  }
})

const emit = defineEmits({
  select: isSelectValueValid
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))

function select(value) {
  emit('select', normalizeSelectValue(value))
}
</script>

<template>
  <div class="flex gap-2">
    <BaseButton
      :type="BUTTON_TYPE_NEUTRAL"
      @click="select(null)"
    >
      <BaseIcon :name="ICON_X_MARK" />
    </BaseButton>
    <select
      class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl"
      @change="select($event.target.value)"
    >
      <option :selected="isNotSelected" disabled>{{ placeholder }}</option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
