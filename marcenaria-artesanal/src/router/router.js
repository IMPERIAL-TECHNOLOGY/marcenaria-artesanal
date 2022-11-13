import { createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/Home')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to,from, savedPosition) {
    if(to.hash) {
      return {
        el: to.hash,
        behavior:'smooth'
      }
    }
      else if(savedPosition) {
        return savedPosition
      } else return {x:0, y:0}
  }
})

export default router
