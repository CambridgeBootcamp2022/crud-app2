import './firebase';
import './services/note-service.js';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';

import 'primeflex/primeflex.min.css';
import 'primevue/resources/themes/vela-orange/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './assets/css/global.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.use(store);

app.component('Button', Button);
app.component('Dialog', Dialog);
app.component('InputText', InputText);
app.component('Textarea', Textarea);

app.mount('#app');
