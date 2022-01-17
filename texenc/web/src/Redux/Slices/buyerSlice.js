import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    buyer: false,
    allJobs: false,


}

export const buyerSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setBuyerData: (state, action) => {
            state.buyer = action.payload
        },
        setAllJobs: (state, action) => {
            state.allJobs = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { setBuyerData, setAllJobs } = buyerSlice.actions

export default buyerSlice.reducer