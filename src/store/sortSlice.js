import {createSlice} from '@reduxjs/toolkit'

const initialSortCodes = [
    {
        code: 'mostupvotes',
        label: 'Most Upvotes',
    },
    {
        code: 'leastupvotes',
        label: 'Least Upvotes',
    },
    {
        code: 'mostcomments',
        label: 'Most Comments',
    },
    {
        code: 'leastcomments',
        label: 'Least Comments',
    },
]
export const sortSlice = createSlice({
    name: 'productRequests',
    initialState: {
        initialSortCodes,
        selectedSortCode: initialSortCodes[0].code,
    },
    reducers: {
        changeSortCode: (state, action) => {
            state.selectedSortCode = action.payload;
        },
    }
})

export const { changeSortCode } = sortSlice.actions
export default sortSlice.reducer