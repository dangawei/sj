import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login/login.vue'
import Home from '@/views/home/home.vue'
import Topic from '@/views/topic/topic.vue'
import Concern from '@/views/concern/concern.vue'
import Host from '@/views/host/host.vue'
import ChangeNav from '@/components/nav/children/changeNav.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/topic',
      name: 'Topic',
      component: Topic
    },
    {
      path: '/concern',
      name: 'Concern',
      component: Concern
    },
    {
      path: '/host',
      name: 'Host',
      component: Host
    },
    {
      path: '/changeNav',
      name: 'ChangeNav',
      component: ChangeNav
    }
  ]
})
