import { global } from '../store/store';
import { useFilterDrinks } from './filterDrinks';

export const addOrRemoveTagFromInclude = (name: string) => {
    if (global.include.includes(name)) {
        global.include = global.include
            .split(name)
            .join(' ')
            .replace(/\s+/g, ' ')
            .trim();
    } else {
        global.include = `${global.include} ${name}`.trim();
    }

    useFilterDrinks();
};
