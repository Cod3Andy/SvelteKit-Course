<script lang="ts">
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
</form>