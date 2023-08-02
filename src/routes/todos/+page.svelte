<script lang="ts">
	import { enhance } from '$app/forms';

	//import { invalidate, invalidateAll } from '$app/navigation';
    import type { ActionData, PageData, SubmitFunction } from './$types';
    
    export let data: PageData;
    export let form: ActionData;

    let loading = false;

    const addTodo: SubmitFunction = () => {
        //do something b4 the form sumbits
            loading = true;
        return async ({ update }) => {
            //do something after the form sumbits
            loading = false;
            await update();
        };
    };


    // type Data = {
    // success: boolean
    // errors: Record<string, string>
    // };
    
    // let form: Data;

    // async function addTodo(event: Event){
    //     const formEl = event.target as HTMLFormElement;
    //     const data = new FormData(formEl);

    //     const response = await fetch(formEl.action, {
    //         method: 'POST',
    //         body: data,
    //     });
    //     const responseData = await response.json();
        
    //     form = responseData;

    //     formEl.reset();

    //     await invalidateAll();
    // };

    // async function removeTodo(event: Event){
    //     const formEl = event.target as HTMLFormElement;
    //     const data = new FormData(formEl);

    //     const response = await fetch(formEl.action, {
    //         method: 'DELETE',
    //         body: data,
    //     });

    //     await invalidateAll();
    // };
</script>

<pre>
    {JSON.stringify(form, null, 2)}
</pre>

<ul>
    {#each data.todos as todo}
        <li>
            <span>{todo.text}</span>
            <form method="POST" action="?/removeTodo" use:enhance>
                <input type="hidden" name="id" value={todo.id}/>
                <button class="delete" type="submit">X</button>
            </form>
        </li>
    {/each}
</ul>

<form method="POST" action="?/addTodo" use:enhance={addTodo}>
    <input type="text" name="todo"/>
    {#if form?.missing}
        <p class="error">This field is required</p>
    {/if}
    <button 
    aria-busy={loading} 
    class:secondary={loading} 
    type="submit">{#if !loading}Add Todo{/if}</button>

    <button formaction="?/clearTodos" class="secondary" type="submit">Clear</button>
</form>

{#if form?.success}
    <p>Added todo!</p>
{/if}

<style>
    ul{
        padding: 0;
    }
    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    span{
        text-transform: capitalize;
    }

    .delete{
        margin: 0;
        background: none;
        border: none;
    }
    .error{
        color: orangered;
    }
</style>
