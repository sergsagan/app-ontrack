<script setup lang="ts">
import { ref, nextTick } from 'vue'
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import { id } from '@/function.ts'
import { createActivity } from '@/activities.ts'
import { ButtonType, IconName } from '@/types.ts'

const name = ref('')

async function submit(): Promise<void> {
  createActivity({
    id: id(),
    name: name.value,
    secondsToComplete: 0
  })

  name.value = ''

  await nextTick()
  window.scrollTo(0, document.body.scrollHeight)
}
</script>

<template>
  <form
    class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4"
    @submit.prevent="submit"
  >
    <input
      v-model="name"
      type="text"
      class="w-full rounded border px-4 text-xl"
      placeholder="Activity name"
    >
    <BaseButton
      :type="ButtonType.PRIMARY"
      :disabled="name.trim() === ''"
    >
      <BaseIcon :name="IconName.PLUS" />
    </BaseButton>
  </form>
</template>
