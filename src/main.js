import Vue from 'vue'
import App from './App.vue'
// import Home from './views/Home.vue'
// import AddCard from './views/AddCard.vue'

// Vue.component('AddCard', AddCard);
// Vue.component('Home', Home);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
