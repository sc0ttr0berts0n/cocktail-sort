import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { IoSearchCircleSharp, RiCloseCircleFill } from 'oh-vue-icons/icons';

addIcons(IoSearchCircleSharp, RiCloseCircleFill);

const app = createApp(App);

app.component('v-icon', OhVueIcon);
app.mount('#app');
