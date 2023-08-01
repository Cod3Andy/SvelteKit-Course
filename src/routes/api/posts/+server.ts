import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

import db from '$lib/database';

export const GET: RequestHandler = async (event) => {
    const posts = await db.post.findMany({
        take: Math.round(Math.random() * 30),
    });

    event.setHeaders({
        'Cache-Control': 'public, max-age=0, s-maxage=60',
    });

    return json(posts);
};