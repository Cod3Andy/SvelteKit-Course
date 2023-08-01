// @ts-nocheck
import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types';
export const load = async () => {
    // throw new Error('Oops!')
    throw error(404, { message: 'Oopsee!'})
};;null as any as PageLoad;