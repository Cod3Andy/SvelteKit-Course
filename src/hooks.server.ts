import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
// import type { HandleFetch } from "@sveltejs/kit"; 

import { parseFormData } from 'parse-nested-form-data';

// export const handle: Handle = async ({event, resolve}) => {
    // if (event.url.pathname.startsWith('/xD')){
    // return new Response('xD');
    // };
    // const session = event.cookies.get('session');
    // const user = await getUser(session);
    // event.locals.user = 'Test';

    // return resolve(event);


    // const locale = 'ua';

    // event.locals.locale = locale;

    // return resolve(event, {
    //     transformPageChunk: ({ html }) => html.replace('%lang%', locale),
    // });





    // const route = event.url;

    // let start = performance.now();
    // const response = await resolve(event);
    // let end = performance.now();

    // let responseTime = end - start;

    // if(responseTime > 2000){
    //     console.log(`${route} took ${responseTime.toFixed(2)} ms`);
    // };

    // return response;

    //PASSING FORM DATA:

    // if (event.request.method === 'POST'){
    //     const formData = await event.request.formData();
    //     const data = parseFormData(formData);
    //     event.locals.formData = data;
    // };

    // return resolve(event);

   
// };

 //USING MULTIPLE HOOKS TOGETHER:

const auth: Handle = async ({ event, resolve }) => {
    console.log('auth hook');
    return resolve(event);
};

const i18n: Handle = async ({ event, resolve }) => {
    console.log('internationalization hook');
    return resolve(event);
};

export const handle = sequence(auth, i18n);

// export const handleFetch: HandleFetch = ({ request }) => {
//     if (request.url.startsWith('http')) {
//         const url = request.url.replace('http', 'https');
//         request = new Request(url, request);

//         console.log(request.url);
//     };
//     return fetch(request);
// };