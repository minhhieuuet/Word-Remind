import { createApp } from 'vue'
import App from './App.vue'
import routers from './configs/routes';

const app = createApp(App)
app.config.devtools = true
app.config.debug = true
app.use(routers).mount('#app')