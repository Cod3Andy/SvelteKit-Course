import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types';
export const load: PageLoad = async () => {
    // throw new Error('Oops!')
    throw error(404, { message: 'Oopsee!'})
};