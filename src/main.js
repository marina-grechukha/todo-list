import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import { ValidationProvider } from 'vee-validate'
import Toast from 'vue-toastification'
import BlankTemplate from '@/components/templates/blank'
import MainTemplate from '@/components/templates/main'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

import 'tailwindcss/tailwind.css'
import 'vue-toastification/dist/index.css'
import '@/assets/styles.scss'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
}

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

Vue.use(Toast, {})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('blank-template', BlankTemplate)
Vue.component('main-template', MainTemplate)
Vue.component('pulse-loader', PulseLoader)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
