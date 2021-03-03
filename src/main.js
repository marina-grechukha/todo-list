import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'
import { ValidationProvider } from 'vee-validate'

import 'tailwindcss/tailwind.css'
import '@/assets/styles.scss'

const firebaseConfig = {
  apiKey: 'AIzaSyCudA09Vd5vK-DZtScG0ApinIxdMIh1YGw',
  authDomain: 'todo-list-marina.firebaseapp.com',
  databaseURL: 'https://todo-list-marina-default-rtdb.firebaseio.com',
  projectId: 'todo-list-marina',
  storageBucket: 'todo-list-marina.appspot.com',
  messagingSenderId: '776288536616',
  appId: '1:776288536616:web:364ff0a41c62fe3f334d1d'
}

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

Vue.component('ValidationProvider', ValidationProvider)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
