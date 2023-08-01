// @ts-nocheck
//SSR
import type { Post } from '@prisma/client';
import type { PageLoad } from './$types';

export const load = async ({ fetch }: Parameters<PageLoad>[0]) => {
    const response = await fetch('api/posts');
    const posts: Post[] = await response.json();
    return { posts };
};