// @ts-nocheck
import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { addTodo, clearTodos, getTodos, removeTodo } from '$lib/server/database';

export const load = async () => {
    const todos = getTodos();
    return { todos };
};

async function sleep(ms: number){
    return new Promise((resolve) => setTimeout(resolve, ms))
};

export const actions = {
   addTodo: async({ request }: import('./$types').RequestEvent) => {
    const formData = await request.formData();
    const todo = String(formData.get('todo'));

    if (!todo){
        return fail(400, { todo, missing: true });
    };

    await sleep(2000);

    addTodo(todo);

    return { success: true }

   },
   removeTodo: async({ request }: import('./$types').RequestEvent) => {
    const formData = await request.formData();
    const todoId = Number(formData.get('id'));

    removeTodo(todoId);

    return { success: true };
   },
   clearTodos: () => {
    clearTodos();
   },
};;null as any as PageServerLoad;;null as any as Actions;