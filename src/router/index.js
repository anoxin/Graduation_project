import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '@/pages/MainPage.vue'
import BlogPage from '@/pages/BlogPage.vue'
import BlogDetailsPage from '@/pages/BlogDetailsPage.vue'
import OurProject from '@/pages/OurProject.vue'
import ProjectDetails from '@/pages/ProjectDetails.vue'
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
      path: '/blog-details-page',
      name: 'blog-details-page',
      component: BlogDetailsPage
    },
    {
      path: '/our-project',
      name: 'our-project',
      component: OurProject
    },
    {
      path: '/project-details',
      name: 'project-details',
      component: ProjectDetails
    },
    {
      path: '/*',
      name: 'error-page',
      component: ErrorPage
    },
  ]
})

