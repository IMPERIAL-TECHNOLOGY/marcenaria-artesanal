import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify'
import router from '@/router/router'

const app = createApp(App)

registerPlugins(app)

app
  .use(vuetify)
  .use(router)
  .mount('#app')
