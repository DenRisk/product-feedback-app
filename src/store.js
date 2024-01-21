import { configureStore } from '@reduxjs/toolkit'

// Reducers
import userReducer from './store/userSlice'
import ProductRequestsReducer from './store/productRequestsSlice'
import filterReducer from './store/filterSlice'
import sortReducer from './store/sortSlice'
export default configureStore({
    reducer: {
        user: userReducer,
        productRequests: ProductRequestsReducer,
        filter: filterReducer,
        sort: sortReducer,
    },
})