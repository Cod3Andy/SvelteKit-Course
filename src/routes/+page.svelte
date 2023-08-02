<!-- <script lang="ts">
    async function subscribe(event:Event) {
        const form = event.target as HTMLFormElement;
        const data = new FormData(form);

        await fetch('/api/newsletter', {
            method: 'POST',
            body: data
        });
    };
</script>
<h1>Home Page</h1>

<p>
    You can <a href="/posts/create">+create</a> or edit your posts here.
</p>

<h1>Newsletter</h1>

<form on:submit|preventDefault={subscribe}>
    <input type="email" name="email">
    <button>Submit</button>
</form> -->
 <!-- Client Side Rendering -->
<!-- 
<script lang="ts">
    import type { Post } from "@prisma/client";

    async function getPosts() {
        const response = await fetch('api/posts');
        const posts: Post[] = await response.json();
        return posts;
    }
</script>

<h1>Posts</h1>

{#await getPosts()}
    <p>Loading...</p>
{:then posts}
    <p>Showing {posts.length} posts.</p>
    {#each posts as { slug, title }}   
        <ul>
            <li>
                <a href="/posts/{slug}">{title}</a>
            </li>
        </ul>
    {/each}
{:catch error}
    <p>{error.message}</p>
{/await} -->

<script lang="ts">
	import { invalidate, invalidateAll } from "$app/navigation";
    import type { PageData } from "./$types";

    export let data: PageData

    $: ({ posts } = data)

    function rerunLoadFunction(){
    // 1st method:
    invalidate('posts');
    // 2nd method(works with stable url):
    //invalidate('api/posts');
    // 3rd method:
    //invalidate(url => url.href.includes('posts'));
    // 4th method(nuclear option):
    //invalidateAll()
    }
</script>

<h1>Posts</h1>

<button on:click={rerunLoadFunction}>Rerun</button>

<p>Showing {posts.length} posts.</p>

{#each posts as {slug, title}}
    <ul>
        <li>
            <a href="/posts/{slug}">{title}</a>
        </li>
    </ul>
{/each}

<h1>Forms</h1>

<form method="GET" action="/login">
    <input type="text" name="user"/>
    <input type="password" name="password"/>
    <button type="submit">Login</button>
</form>