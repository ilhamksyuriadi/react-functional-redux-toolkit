import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTodos } from './todoApi'

const initialState = {
    todos: [],
    status: 'idle',
};

export const getTodosAsync = createAsyncThunk(
    'todo/getTodos',
    async () => {
        const response = await getTodos();
        return response.data;
    }
);

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        deleteAllTodo: (state) => {
            state.todos = [];
        },
        deleteTodo: (state) => {
            state.todos = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTodosAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getTodosAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.todos = action.payload;
            });
    },
});

export const { deleteAllTodo, deleteTodo } = todoSlice.actions

// need some works about this part
export const selectTodosState = (state) => state.todo

export default todoSlice.reducer