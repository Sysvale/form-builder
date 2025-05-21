import { createApp } from "vue";
import Cuida from "@sysvale/cuida";
import "@sysvale/cuida/dist/style.css";
import App from "./App.vue";
import * as VeeValidate from "vee-validate";
import validationConfig from "./validationConfig";

const app = createApp(App);

const validateConfig = {
	inject: true,
	fieldsBagName: "veeFields",
};

const cdsUtils = Cuida.utils;

app.use(Cuida);
app.use(VeeValidate, validateConfig);
app.use(VeeValidate, {
	inject: true,
	fieldsBagName: "veeFields",
});

app.provide("cdsUtils", cdsUtils);

validationConfig(VeeValidate);
app.mount("#app");
