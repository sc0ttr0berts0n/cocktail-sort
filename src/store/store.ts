import { reactive } from 'vue';
import { CocktailListState } from '../compostables/createCocktailListState';

interface GlobalStore {
    drinks: CocktailListState[] | null;
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

export const global: GlobalStore = reactive({
    drinks: null,
    include: '',
    exclude: '',
    settings: {
        darkMode,
    },
});
