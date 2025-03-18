import { createRouter, createWebHistory } from 'vue-router'
import Loginpage from '@/views/Loginpage.vue'
import Homepage from '@/views/Homepage.vue'
import Categorypage from '@/views/Categorypage.vue'
import Subcategorypage from '@/views/Subcategorypage.vue' // Alt kategori sayfası ekledim
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
      path: '/category/:id',
      name: 'category',
      component: Categorypage,
      props: true, // Route parametrelerini prop olarak geç
    },
    {
      path: '/subcategory/:id',
      name: 'subcategory',
      component: Subcategorypage,
      props: true,
    },
    {
      path: '/products/:id',
      name: 'products',
      component: Products,
      props: true,
    },
  ],
})

export default router
