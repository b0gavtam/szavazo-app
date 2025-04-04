import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useToast } from "vue-toastification"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
