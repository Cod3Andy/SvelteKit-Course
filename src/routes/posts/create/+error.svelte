<script lang="ts">
    import { page } from '$app/stores'
</script>
<h1>Boom</h1>
<p>Explosion was contained in this route.</p>
<h1>{$page.error?.message}</h1>
<pre>
    {JSON.stringify($page, null, 2)}
</pre>