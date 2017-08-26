import Vue from 'vue'
import Router from 'vue-router'

// Components
import Dashboard from '@/components/Dashboard'
import Stream from '@/components/Stream'
import BotSettings from '@/components/BotSettings'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/stream',
      name: 'Stream',
      component: Stream
    },
    {
      path: '/bot-settings',
      name: 'BotSettings',
      component: BotSettings
    }
  ]
})
