import drinkData from '../data/drinklist.json';
import { reactive } from 'vue';

export interface DrinkListData {
    ID?: number;
    Name: string;
    Menu: string;
    Recipe: string;
    Tags?: string;
    isFirstChar: boolean;
    hidden: boolean;
}

const drinks: DrinkListData[] = drinkData
    .sort((a, b) => {
        return a.Name?.localeCompare(b.Name) ?? 0;
    })
    .map((drink, index, arr) => {
        const lastDrinkChar = arr[index - 1]?.Name[0];
        const drinkChar = drink.Name[0];

        const { Name, Menu, Recipe, Tags } = drink;

        return {
            Name,
            Menu,
            Recipe,
            Tags,
            isFirstChar: lastDrinkChar !== drinkChar,
            hidden: false,
        };
    });

export const global = reactive({
    drinks: drinks,
    include: '',
    exclude: '',
});
