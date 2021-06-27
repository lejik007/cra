import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    wish4: "",
    need4: ""
}

const Goal4Slice = createSlice({
    name: 'Goal4',
    initialState,
    reducers: {
        saveGoal4Wish: (state, action) => {
            state.wish4 = action.payload
        },
    },
})

export default Goal4Slice