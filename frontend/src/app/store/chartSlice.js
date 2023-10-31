import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'chartSlice',
    initialState: {
        barList: [],
    },
    reducers: {
        setChartBarValue: (state, action) => {
            state.barList = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setChartBarValue } = counterSlice.actions

export default counterSlice.reducer