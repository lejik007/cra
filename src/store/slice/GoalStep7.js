import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    wish7: "",
    need7: ""
}

const Goal7Slice = createSlice({
    name: 'Goal7',
    initialState,
    reducers: {
        saveGoal7Wish: (state, action) => {
            state.wish7 = action.payload
        },
    },
})

export default Goal7Slice