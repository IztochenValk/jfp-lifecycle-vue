import { createMemoryHistory, createRouter } from 'vue-router'

import login from './components/login.vue'
import register from './components/register.vue'
import Form from './Form.vue'

const routes = [
  { path: '/', component: Form, name:"home" },
  { path: '/auth/login', component: login, name: 'login' },
  { path: '/register', component: register, name: 'register' }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})