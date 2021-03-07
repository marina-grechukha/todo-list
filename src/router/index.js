import firebase from 'firebase/app'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { protected: true, template: 'main' },
    component: Home
  },
  {
    path: '/sign-in',
    name: 'Sign In',
    meta: { protected: false, template: 'blank' },
    component: () => import(/* webpackChunkName: "sign-in" */ '../views/sign-in.vue')
  },
  {
    path: '/sign-up',
    name: 'Sign Up',
    meta: { protected: false, template: 'blank' },
    component: () => import(/* webpackChunkName: "sign-in" */ '../views/sign-up.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, _from, next) => {
  firebase.auth().onAuthStateChanged(user => {
    if (to.meta.protected && !user) next('/sign-in')
    else next()
  })
})

export default router
