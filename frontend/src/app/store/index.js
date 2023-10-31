import { configureStore } from '@reduxjs/toolkit'
import chartSliceReducer from './chartSlice'

export default configureStore({
    reducer: {
        chartSlice: chartSliceReducer,
    },
})