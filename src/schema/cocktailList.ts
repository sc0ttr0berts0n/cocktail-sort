import { z, object, array, string } from 'zod';

const cocktailSchema = object({
    name: string(),
    recipe: string(),
    menu: string(),
    tags: array(object({ name: string() })).optional(),
});

const cocktailListSchema = array(cocktailSchema);

export type Cocktail = z.infer<typeof cocktailSchema>;
