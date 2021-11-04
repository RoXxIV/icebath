import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router";
import SmartTable from "vuejs-smart-table";

createApp(App).use(SmartTable).use(router).mount("#app");
