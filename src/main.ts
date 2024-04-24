import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
    IoSearchCircleSharp,
    RiCloseCircleFill,
    FaSlidersH,
    MdKeyboardarrowrightSharp,
} from 'oh-vue-icons/icons';

addIcons(IoSearchCircleSharp, RiCloseCircleFill, FaSlidersH, MdKeyboardarrowrightSharp);

const app = createApp(App);

app.component('v-icon', OhVueIcon);
app.mount('#app');
