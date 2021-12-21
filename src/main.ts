
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'default-passive-events'

// createApp(App).use(store).use(router).mount('#app')

const app = createApp(App)
app.config.globalProperties.version = 'v.1.0.1'
app.use(router).mount('#app')
