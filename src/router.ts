import { ref, type Component } from 'vue'
import TimelinePage from '@/pages/TimelinePage.vue'
import ActivitiesPage from '@/pages/ActivitiesPage.vue'
import ProgressPage from '@/pages/ProgressPage.vue'
import { NAV_ITEMS } from '@/constans.ts'
import { PageName } from '@/types.ts'

export const routes: Record<PageName, Component> = {
  [PageName.TIMELINE]: TimelinePage,
  [PageName.ACTIVITIES]: ActivitiesPage,
  [PageName.PROGRESS]: ProgressPage
}

export const currentPage = ref<PageName>(normalizePageHash())

export function navigate(page: PageName) {
  document.body.scrollIntoView()

  currentPage.value = page
}

export function normalizePageHash(): PageName {
  const page = window.location.hash.slice(1)

  if (NAV_ITEMS.some((navItem) => navItem.page === page)) {
    return page as PageName
  }
  window.location.hash = PageName.TIMELINE

  return PageName.TIMELINE
}
