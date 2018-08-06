import Vue from 'vue'
import PageTitle from 'vue-page-title'
import App from './App.vue'
import router from './router'
import { isProduction } from './env'

import './registerServiceWorker'

Vue.config.productionTip = !isProduction
Vue.config.performance = !isProduction

Vue.use(PageTitle, {
  suffix: ' - Avatar URL Generator  '
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
