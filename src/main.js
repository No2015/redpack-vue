// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import layer from 'easy-layer'
import './assets/css/styles.css'

Vue.use(layer)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (from.meta.keepAlive) {
    const $content = document.querySelector('#content');
    const scrollTop = $content ? $content.scrollTop : 0;
    from.meta.scrollTop = scrollTop;
  }
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
