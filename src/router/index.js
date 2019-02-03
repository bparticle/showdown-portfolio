import Vue from 'vue'
import Router from 'vue-router'

const PortfolioView = () =>
  import('@/views/PortfolioView.vue')
const About = () =>
  import('@/views/AboutView.vue')
const PortfolioItemView = () =>
  import('@/views/PortfolioItemView.vue')

Vue.use(Router)

export default new Router({
  history: true,
  saveScrollPosition: true,
  routes: [{
      path: '/',
      name: 'PortfolioView',
      component: PortfolioView
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/work/:id',
      name: 'PortfolioItemView',
      component: PortfolioItemView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
})
