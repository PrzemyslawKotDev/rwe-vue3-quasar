import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Materials from '@/views/Materials.vue'
import Blog from '@/views/Blog.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/materials',
    name: 'materials',
    component: Materials
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
