import { createApp } from 'vue';
import App from './App.vue';

import PrimeVue from 'primevue/config';

import 'primeflex/primeflex.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import './assets/css/global.css';

const app = createApp(App);

app.use(PrimeVue);

app.mount('#app');
