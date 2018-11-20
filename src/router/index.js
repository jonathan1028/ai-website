import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/components/MainLayout'
// import AppHeader from '@/components/AppHeader'
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import Learn from '@/components/Learn'
import Resume from '@/components/Resume'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '/',
          redirect: '/home'
        },
        {
          path: '/home',
          name: 'Home',
          component: Home,
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/projects',
          name: 'Projects',
          component: Projects
        },
        {
          path: 'crm.agilentinnovations.com',
          name: 'CRM'
        },
        {
          path: '/learn',
          name: 'Learn',
          component: Learn
        }
      ]
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    }
  ]
})
