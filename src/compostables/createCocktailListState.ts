import { Cocktail } from '../schema/cocktailList';

export interface CocktailListState {
    name: string;
    menu: string;
    recipe: string[];
    tags?: string[];
    isFirstChar: boolean;
    hidden: boolean;
}

export const useCreateCocktailListState = (
    query: Cocktail[]
): CocktailListState[] => {
    return query
        .sort((a, b) => {
            return a.name?.localeCompare(b.name) ?? 0;
        })
        .map((drink, index, arr): CocktailListState => {
            /**
             * Converts all numerics from 0-9 into #, and leaves
             * regular characters untouched
             * @param drink a drink key from the imported json
             * @returns the original character or a '#' if [0-9]
             */
            const _determineHeaderChar = (drink: Cocktail) => {
                const char = drink?.name[0] ?? '';
                const isNumeric = char.match(/[0-9]/);

                return isNumeric ? '#' : char;
            };

            // track last and current first chars to see if its the
            // first in sequence to have a new char, flag it if so for
            // later processing
            const lastDrinkChar = _determineHeaderChar(arr[index - 1]);
            const drinkChar = _determineHeaderChar(drink);

            const { name, menu, recipe: recipeRaw, tags: tagsRaw } = drink;
            const recipe = recipeRaw.split('\n');
            const tags = tagsRaw?.map((tag) => tag.name);

            return {
                name,
                recipe,
                menu,
                tags: tags
                    ? [...(menu === 'unsorted' ? [] : [menu]), ...tags]
                    : undefined,
                isFirstChar: lastDrinkChar !== drinkChar,
                hidden: false,
            };
        });
};
