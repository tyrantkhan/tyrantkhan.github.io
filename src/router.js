import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Resume from './pages/Resume.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/resume', component: Resume },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash }
    return { top: 0 }
  },
})
