import { createApp } from 'vue'
import './style.css'
import Main from './tp-component-communication.vue'
import { router } from './router.js'
createApp(Main).use(router).mount('#app')
