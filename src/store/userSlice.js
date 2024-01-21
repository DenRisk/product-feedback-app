import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {BASE_URL} from "../env/env.js";

export const fetchUser = createAsyncThunk('user/fetch', async () => {
    const response = await fetch(`${BASE_URL}/user`);
    return await response.json();
});

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.currentUser = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },

})
export default userSlice.reducer