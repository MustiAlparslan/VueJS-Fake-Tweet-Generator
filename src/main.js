import { createApp } from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import "./index.css"
import store from './store'

createApp(App).use(Vuex).use(store).mount('#app')
