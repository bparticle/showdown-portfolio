// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Fullpage from 'fullpage.js'
import "fullpage.js/dist/fullpage.min.css";
import VueFullPage from 'vue-fullpage.js'
import VueLazyload from 'vue-lazyload'
import dataSrc from '@/../static/source.json'
import axios from 'axios'
import router from './router'

// import custom components
import PortfolioItem from '@/components/PortfolioItem'

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  loading: '@/assets/loader.svg'
})
Vue.use(VueFullPage)

/* Global components */
Vue.component('portfolio-item', PortfolioItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
    VueFullPage
  },
  template: '<App/>'
})
