import {createRouter, createWebHistory} from 'vue-router'
import Index from "../views/main/Index.vue";
import Product from '../views/product/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/products',
      name: 'product',
      component: Product
    }


  ]
})

export default router
