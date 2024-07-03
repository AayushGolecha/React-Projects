import { createSlice } from "@reduxjs/toolkit";

export const hideSlice = createSlice({
    name: 'hidder',
    initialState: {
        value: true
    },
    reducers: {
        change: state => {
            state.value = !state.value
        }
    }
})

export const { change } = hideSlice.actions

export default hideSlice.reducer