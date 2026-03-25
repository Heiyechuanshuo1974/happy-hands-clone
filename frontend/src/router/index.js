import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/HomeView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/product/ProductListView.vue')
  },
  {
    path: '/products/:id',
    name: 'product-detail',
    component: () => import('../views/product/ProductDetailView.vue')
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('../views/article/ArticleListView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact/ContactView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
