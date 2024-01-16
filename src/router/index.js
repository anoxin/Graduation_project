import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '@/pages/MainPage.vue'
import BlogPage from '@/pages/BlogPage.vue'
import OurProject from '@/pages/OurProject.vue'
import ErrorPage from '@/pages/ErrorPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: MainPage
    },
    {
      path: '/blog-page',
      name: 'blog-page',
      component: BlogPage
    },
    {
      path: '/our-project',
      name: 'our-project',
      component: OurProject
    },
    {
      path: '/*',
      name: 'error-page',
      component: ErrorPage
    },
  ]
})

