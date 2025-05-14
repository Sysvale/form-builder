import FormBuilder from './components/FormBuilder.vue';
import FormReader from './components/FormReader.vue';

export { FormBuilder, FormReader };

export default {
    install: (app) => {
        app.component('FormBuilder', FormBuilder);
        app.component('FormReader', FormReader);
    }
}