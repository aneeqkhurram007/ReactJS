import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Slices/userSlice'
import buyerReducer from './Slices/buyerSlice'
export const store = configureStore({
    reducer: {
        user: userReducer,
        buyer: buyerReducer,
    },
})