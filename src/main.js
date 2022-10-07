import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import PrimeVue from 'primevue/config';
import './styles/themes'
createApp(App).use(router).use(PrimeVue).mount('#app')
