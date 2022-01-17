import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: false,
    phase1: false,
    phase2: false,
    services: [],
    projects: [],
    allJobs: false,


}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            console.log(state, "jhgfghjk")
            console.log(action)
            state.user = action.payload
        },
        setPhase1: (state, action) => {
            state.phase1 = action.payload
        },
        setPhase2: (state, action) => {
            state.phase2 = action.payload
        },
        setServices: (state, action) => {
            state.services = action.payload
        },
        setProjects: (state, action) => {
            state.projects = action.payload
        },
        setAllJobs: (state, action) => {
            state.allJobs = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUserData, setPhase1, setPhase2, setServices, setProjects, setAllJobs } = userSlice.actions

export default userSlice.reducer