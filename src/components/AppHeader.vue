<script setup>
import HeaderLogo from '@/components/HeaderLogo.vue';
import HeaderProgress from '@/components/HeaderProgress.vue';
import { isPageValid } from '@/validators.js'
import { PAGE_PROGRESS, PAGE_TIMELINE } from '@/constans.js'

const emit = defineEmits({
  navigate: isPageValid()
});

</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <HeaderLogo @click="emit('navigate', PAGE_TIMELINE)" />
    <HeaderProgress @click="emit('navigate', PAGE_PROGRESS)" />
  </header>
</template>

<style scoped>

</style>
