import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: []
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        },
    },
});

export const { setUsers } = userSlice.actions

export const selectUsersState = (state) => state.userGlobalState.users

export default userSlice.reducer