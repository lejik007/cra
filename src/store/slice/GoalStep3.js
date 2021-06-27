import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    wish3: "",
    need3: ""
}

const Goal3Slice = createSlice({
    name: 'Goal3',
    initialState,
    reducers: {
        saveGoal3Wish: (state, action) => {
            state.wish3 = action.payload
        },
    },
})

export default Goal3Slice