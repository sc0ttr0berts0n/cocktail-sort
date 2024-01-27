import { global } from '../store/store';

export const useFilterDrinks = () => {
    return global.drinks.forEach((drink) => {
        const megaString = `${drink.Name}${drink.Recipe}${
            drink?.Tags ?? ''
        }`.toLocaleLowerCase();
        const includes = global.include.toLocaleLowerCase().trim().split(/\s+/);
        const excludes = global.exclude.toLocaleLowerCase().trim().split(/\s+/);
        const includeTest =
            global.include === '' ||
            includes.every((word) => megaString.includes(word));
        const excludeTest =
            global.exclude !== '' &&
            excludes.some((word) => megaString.includes(word));

        drink.hidden = !includeTest || excludeTest;
    });
};
