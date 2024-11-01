import { configureStore } from '@reduxjs/toolkit'
import details from "../redux/details.js"

export const store = configureStore({
    reducer: {
        cart: details
    }
})