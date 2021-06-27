import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    wish6: "",
    need6: ""
}

const Goal6Slice = createSlice({
    name: 'Goal6',
    initialState,
    reducers: {
        saveGoal6Wish: (state, action) => {
            state.wish6 = action.payload
        },
    },
})

export default Goal6Slice