import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '~pages'

routes.push({
  path: '/',
  redirect: '/home',
});

const router = createRouter({
  history: createWebHashHistory(), // HashHistory createWebHashHistory(),
  base:'/four/',
  routes,
})
export default router