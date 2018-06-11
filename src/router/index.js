import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import Learn from '@/components/Learn'

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
      name: 'Home',
      component: Home
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
})
