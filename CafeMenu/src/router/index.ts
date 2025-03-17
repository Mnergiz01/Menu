import { createRouter, createWebHistory } from 'vue-router'
import Loginpage from '@/views/Loginpage.vue'
import Homepage from '@/views/Homepage.vue'
import Categorypage from '@/views/Categorypage.vue'
import Products from '@/views/Products.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Loginpage,
    },
    {
      path: '/home',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/category',
      name: 'category',
      component: Categorypage,
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
    },
    
  ],
})

export default router
