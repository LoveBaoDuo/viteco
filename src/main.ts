import { createApp } from 'vue'
import App from './App.vue'
import router from '@/route'
import { createPinia } from 'pinia'
// 重置样式
import '@/style/normalize.css'
createApp(App).use(router).use(createPinia()).mount('#app')
