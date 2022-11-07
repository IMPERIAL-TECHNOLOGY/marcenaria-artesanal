import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to,from, savedPosition) {
    console.log(1111111,savedPosition);
    if(to.hash) {
      return {
        selector: to.hash,
        behavior:'smooth'
      }
    }

    return {x:0, y:0}
  }
})

export default router
