import App from "./App.vue";
import { createApp, VueElement } from "vue";
import { registerPlugins } from "@/plugins";
import vuetify from "./plugins/vuetify";
import router from "@/router/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(fab);

const app = createApp(App);

registerPlugins(app);

app
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(vuetify)
  .use(router)
  .mount("#app");
