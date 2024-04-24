import { reactive } from 'vue';
import { CocktailListState } from '../compostables/createCocktailListState';
import { useSanityClient } from '../compostables/sanityClient';
import { Menu } from '../schema/menuList';

interface GlobalStore {
    drinks: CocktailListState[] | null;
    menus: string[] | null;
    include: string;
    exclude: string;
    settings: { darkMode: boolean };
}

const darkMode = window?.matchMedia('(prefers-color-scheme: dark)').matches;

window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
        global.settings.darkMode = e.matches;
    });

useSanityClient.fetch('*[_type=="menu"]{name}').then((data: Menu) => {
    global.menus = data.map((obj) => obj.name);
});

export const global: GlobalStore = reactive({
    drinks: null,
    menus: null,
    include: '',
    exclude: '',
    settings: {
        darkMode,
    },
});
