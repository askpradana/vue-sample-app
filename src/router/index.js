import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LeftFirst from '../components/home/helper/LeftMainComponents.vue'
import LeftSecond from '../components/home/helper/SecondMainComponents.vue'
import LeftThird from '../components/home/helper/ThirdMainComponents.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'left',
          component: LeftFirst
        },
        {
          path: 'kedua',
          component: LeftSecond
        },
        {
          path: 'ketiga',
          component: LeftThird
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }

    // {
    //   path: '/left',
    //   name: 'left',
    //   component: () => import('../components/home/helper/LeftMainComponents.vue')
    // }
  ]
})

export default router
