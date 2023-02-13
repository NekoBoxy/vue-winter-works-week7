import { createApp } from "vue";
import { createPinia } from "pinia";
// Import all of Bootstrap's JS
// eslint-disable-next-line no-unused-vars
import * as bootstrap from "bootstrap";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
// Import our custom CSS
import "./scss/styles.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
