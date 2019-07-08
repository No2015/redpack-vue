import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '个人中心',
        keepAlive: true,
        scrollTop: 0
      }
    },
    {
      path: '/addredpack',
      name: 'AddRedpack',
      component: resolve => require(['@/views/AddRedpack'], resolve),
      meta: {
        title: '发红包'
      }
    },
    {
      path: '/myredpack',
      name: 'MyRedpack',
      component: resolve => require(['@/views/MyRedpack'], resolve),
      meta: {
        title: '我的红包'
      }
    },
    {
      path: '/userinfo',
      name: 'UserInfo',
      component: resolve => require(['@/views/UserInfo'], resolve),
      meta: {
        title: '我的资料'
      }
    },
    {
      path: '/userinfo-edit',
      name: 'UserInfoEdit',
      component: resolve => require(['@/views/UserInfoEdit'], resolve),
      meta: {
        title: '编辑我的资料'
      }
    },
    {
      path: '*',
      name: 'P404',
      component: resolve => require(['@/views/404'], resolve),
      meta: {
        title: '页面找不到'
      }
    }
  ]
})
