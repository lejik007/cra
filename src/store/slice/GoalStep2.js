import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    wish2: "",
    need2: ""
}

const Goal2Slice = createSlice({
    name: 'Goal2',
    initialState,
    reducers: {
        saveGoal2Wish: (state, action) => {
            state.wish2 = action.payload
        },
    },
})

export default Goal2Slice