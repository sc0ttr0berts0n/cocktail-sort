import { z, object, array, string } from 'zod';

const menuSchema = object({
    name: string(),
});

const menuListSchema = array(menuSchema);

export type Menu = z.infer<typeof menuListSchema>;
