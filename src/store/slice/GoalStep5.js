import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    wish5: "",
    need5: ""
}

const Goal5Slice = createSlice({
    name: 'Goal5',
    initialState,
    reducers: {
        saveGoal5Wish: (state, action) => {
            state.wish5 = action.payload
        },
    },
})

export default Goal5Slice