import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './tp-component-communication.vue'

const routes = [
  { path: '/', component: Home, name:"home" },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})