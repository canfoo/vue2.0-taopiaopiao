import Vue from 'vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui';
import store from './store'

import VueResource from 'vue-resource'
import 'mint-ui/lib/style.css'
import 'assets/css/common.css'
import 'assets/css/swiper.min.css'

import Home from './views/Home'
import MovieDetail from './views/MovieDetail'
import Cinema from './views/Cinema'
import CinemaDetail from './views/CinemaDetail'
import Me from './views/Me'
import NoData from './views/NoData'
import App from './App'
import NotFound from './components/404'
import LazyLoad from './components/lazyload'

Vue.use(LazyLoad)
Vue.use(Mint)
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path : '/',
  component : Home
},{
  path : '/mv',
  component : Home
},{
  path : '/movie/detail/:id',
  name: 'detail',
  component : MovieDetail
},{
  path : '/cinema',
  component : Cinema
},{
  path : '/cinema/detail/:id',
  name: 'cdetail',
  component: CinemaDetail
},{
  path : '/me',
  component : Me
},{
  path : '/no',
  component : NoData
},{
  path : '*',
  component : NotFound
}];

const router = new VueRouter({
  // mode: 'history',  history模式
  routes
});

router.beforeEach((to, from, next) => {
  store._mutations.pushLoadStack[0]()
  next()
})


router.afterEach(route => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  window.onscroll = null
  setTimeout(() => {
    store._mutations.completeLoad[0]()
  }, 100)
})

var app = new Vue({
  el: '#app',
  router,
  store,
  ...App,
});
