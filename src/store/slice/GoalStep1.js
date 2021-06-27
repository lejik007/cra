import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    wish1: "",
    need1: ""
}

const Goal1Slice = createSlice({
    name: 'Goal1',
    initialState,
    reducers: {
        saveGoal1Wish: (state, action) => {
            state.wish1 = action.payload
        },
    },
})

export default Goal1Slice