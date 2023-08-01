<script lang="ts">
    import { page } from '$app/stores';
	import type { LayoutData } from './$types';
    import '../app.css';

    export let data: LayoutData;
</script>

<svelte:head>
    <title>{$page.data.post?.title}</title>
</svelte:head>

<nav>
    <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/posts">Posts</a>
        </li>
    </ul>
</nav>

<slot />