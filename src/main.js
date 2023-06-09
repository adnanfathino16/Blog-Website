import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Jquery
import jQuery from "jquery";
window.$ = jQuery;

// Fontawesome
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

// Template Bootstrap Clean Blog
import "@/assets/css/styles.css";
import "@/assets/js/scripts.js";

createApp(App).use(router).mount("#app");
