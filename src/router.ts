import { ref } from 'vue'
import TimelinePage from '@/pages/TimelinePage.vue'
import ActivitiesPage from '@/pages/ActivitiesPage.vue'
import ProgressPage from '@/pages/ProgressPage.vue'
import { isPageValid } from '@/validators.js'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from '@/constans.ts'
import type { PageName } from '@/types.ts'
import type { Component } from 'vue'

export const routes: Record<PageName, Component> = {
  [PAGE_TIMELINE]: TimelinePage,
  [PAGE_ACTIVITIES]: ActivitiesPage,
  [PAGE_PROGRESS]: ProgressPage
}

export const currentPage = ref<PageName>(normalizePageHash())

export function navigate(page: PageName) {
  document.body.scrollIntoView()

  currentPage.value = page
}

export function normalizePageHash(): PageName {
  const page = window.location.hash.slice(1)

  if (isPageValid(page)) {
    return page as PageName
  }
  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}
