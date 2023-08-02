// @ts-nocheck
import type { PageServerLoad } from './$types';

import { getTodos } from '$lib/server/database';

export const load = async () => {
    const todos = getTodos();
    return { todos };
};;null as any as PageServerLoad;