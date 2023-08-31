import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js"
import store from './store'

const app = createApp(App);


app.use(store);
app.use(router).mount('#app')