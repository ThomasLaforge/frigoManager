import { DbSchema } from '../modules/database'

export interface CategorySchema  {
    fields: {
        name: string
    }
}

export const CategoryDbSchema :DbSchema = {
    indexes : ['name']
}