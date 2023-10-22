import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch, faArrowRight, faBars, faXmark } from '@fortawesome/pro-regular-svg-icons';

library.add(faSearch, faArrowRight, faBars, faXmark);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');

