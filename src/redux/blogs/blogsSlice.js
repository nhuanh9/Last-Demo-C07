import {createSlice} from "@reduxjs/toolkit";
import {addBlog, getBlogs} from "../../services/blogsService";

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
        });
        builder.addCase(addBlog.fulfilled, (state, action) => {
            state.blogs.push(action.payload)
        });
    }
})

export default blogsSlice.reducer;
