// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router/index'
import 'lib-flexible/flexible'
import store from './vuex/store'
// import VConsole from 'vconsole'
import { Swipe, SwipeItem, Field, Tab, Tabs, List, Picker, Popup, Pagination, Toast, Loading, Lazyload } from 'vant'
import 'vant/lib/index.css'

require('es6-promise').polyfill()

Vue.use(VueRouter)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Field)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(List)
Vue.use(Picker)
Vue.use(Popup)
Vue.use(Pagination)
Vue.use(Toast)
Vue.use(Loading)
Vue.use(Lazyload, {
  lazyComponent: true
})

const router = new VueRouter({
  mode: 'history',
  'linkActiveClass': 'active',
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

function setHtmlFontSize() {
  const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  const htmlDom = document.getElementsByTagName('html')[0]
  htmlDom.style.fontSize = htmlWidth / 10 + 'px'
  console.log(window.getComputedStyle(window.document.documentElement)["font-size"])
}

setHtmlFontSize()

window.onresize = setHtmlFontSize

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')

/* eslint-disable no-unused-vars */
if (process.env.NODE_ENV !== 'production') {
  // const vConsole = new VConsole()
}
