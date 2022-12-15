import {createSlice} from "@reduxjs/toolkit";
import {getBlogs} from "../../services/blogsService";

const initialState = {
    blogs: []
}
const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload
        })
    }
})

export default blogsSlice.reducer;
