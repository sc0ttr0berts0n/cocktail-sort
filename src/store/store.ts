import drinkData from '../data/drinklist-v2.json';
import { reactive } from 'vue';

export interface DrinkListData {
    ID?: number;
    Name: string;
    Recipe: string[];
    Tags?: string[];
    isFirstChar: boolean;
    hidden: boolean;
}

const drinks: DrinkListData[] = drinkData
    .sort((a, b) => {
        return a.Name?.localeCompare(b.Name) ?? 0;
    })
    .map((drink, index, arr) => {
        /**
         * Converts all numerics from 0-9 into #, and leaves
         * regular characters untouched
         * @param drink a drink key from the imported json
         * @returns the original character or a '#' if [0-9]
         */
        const _determineHeaderChar = (drink: { Name: string }) => {
            const char = drink?.Name[0] ?? '';
            const isNumeric = char.match(/[0-9]/);

            return isNumeric ? '#' : char;
        };

        // track last and current first chars to see if its the
        // first in sequence to have a new char, flag it if so for
        // later processing
        const lastDrinkChar = _determineHeaderChar(arr[index - 1]);
        const drinkChar = _determineHeaderChar(drink);

        const { Name, Recipe, Tags, ID } = drink;

        return {
            ID,
            Name,
            Recipe,
            Tags,
            isFirstChar: lastDrinkChar !== drinkChar,
            hidden: false,
        };
    });

export const global = reactive({
    drinks,
    include: '',
    exclude: '',
});
