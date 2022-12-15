import {createSlice, current} from "@reduxjs/toolkit";
import {loginUser} from "../../services/userService";

const initialState = {
    user: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload.data
        })
    }
})

export default userSlice.reducer
