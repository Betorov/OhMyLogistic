import Vue from 'vue'
import Router from 'vue-router'
import MapView from '@/components/MapView'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MapView',
      component: MapView
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
