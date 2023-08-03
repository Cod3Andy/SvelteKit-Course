// @ts-nocheck
import type { Actions, PageServerLoad } from './$types';

function sleep(ms: number){
    return new Promise((resolve) => setTimeout(resolve, ms));
};

// export const load: PageServerLoad = async () => {
    // await sleep(2000);
    // await fetch('http://joyofcode.xyz/');

// };
export const actions = {
    default: async ({ locals }: import('./$types').RequestEvent) => {
        console.log(locals.formData);
    },
};;null as any as Actions;