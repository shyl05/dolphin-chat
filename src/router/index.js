import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '../views/SignUp.vue'
import ChatBoxView from '../views/ChatBoxView.vue' 
import GroupsView from '../views/GroupsView.vue'
import JoinGroup from '../views/JoinGroup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/groups',
    name: 'Groups',
    component: GroupsView
  },
  {
    path: '/joingroup',
    name: 'Join',
    component: JoinGroup
  },
  {
    path: '/chatbox',
    name: 'Chatbox',
    component: ChatBoxView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
