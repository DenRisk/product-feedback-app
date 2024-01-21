import {createSlice} from '@reduxjs/toolkit'

const initialCategories = [
    {
        code: 'all',
        name: 'All',
    },
    {
        code: 'feature',
        name: 'Feature',
    },
    {
        code: 'ui',
        name: 'UI',
    },
    {
        code: 'ux',
        name: 'UX',
    },
    {
        code: 'enhancement',
        name: 'Enhancement',
    },
    {
        code: 'bug',
        name: 'Bug',
    },
]

export const filterSlice = createSlice({
    name: 'productRequests',
    initialState: {
        initialCategories,
        selectedCategories: ['all'],
    },
    reducers: {
        addCategory: (state, action) => {
            state.selectedCategories.push(action.payload);
        },
        removeCategory: (state, action) => {
            state.selectedCategories = state.selectedCategories.filter(category => category !== action.payload)
        },
        resetCategories: (state) => {
            state.selectedCategories = ['all'];
        },
    }
})

export const {addCategory, removeCategory, resetCategories} = filterSlice.actions
export default filterSlice.reducer