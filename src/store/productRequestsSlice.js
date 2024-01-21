import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {BASE_URL} from "../env/env.js";

export const fetchProductRequests = createAsyncThunk('productRequests/fetch', async () => {
    const response = await fetch(`${BASE_URL}/productRequests`);
    return await response.json();
});

export const productRequestsSlice = createSlice({
    name: 'productRequests',
    initialState: {
        productRequests: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductRequests.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProductRequests.fulfilled, (state, action) => {
                state.loading = false;
                state.productRequests = action.payload.map(productRequest => {
                    return {
                        ...productRequest,
                        commentsCount: productRequest.comments ? productRequest.comments?.length : 0,
                    }
                })
            })
            .addCase(fetchProductRequests.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },

})
export default productRequestsSlice.reducer