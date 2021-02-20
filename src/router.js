import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Profile from './components/Profile.vue'
import Works from './components/Works.vue'
import Skill from './components/Skill.vue'
import Contact from './components/Contact.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
    //   name: 'home',
      component: Home
    },
    {
      path: '/profile',
    //   name: 'home',
      component: Profile
    },
    {
      path: '/works',
    //   name: 'home',
      component: Works
    },
    {
      path: '/skill',
    //   name: 'home',
      component: Skill
    },
    {
      path: '/contact',
    //   name: 'home',
      component: Contact
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})