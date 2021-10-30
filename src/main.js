import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.min.css';
import 'primevue/resources/themes/arya-orange/theme.css';
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

app.mount('#app');
