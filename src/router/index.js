import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '@/components/home.vue'
import MenSection from '@/components/men-section.vue'
import WomenSection from '@/components/women-section.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/men',
    name: 'MenSection',
    component: MenSection
  },
  {
    path: '/women',
    name: 'Women',
    component: WomenSection
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
