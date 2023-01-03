import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: []
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload
        },
        deleteAllTodo: (state) => {
            state.todos = [];
        },
        deleteTodo: (state) => {
            state.todos = [];
        },
    },
});

export const { setTodos, deleteAllTodo, deleteTodo } = todoSlice.actions

export const selectTodosState = (state) => state.todosGlobalState.todos

export default todoSlice.reducer