import {configureStore} from "@reduxjs/toolkit";
import blogReducer from "./blogs/blogsSlice";

export const store = configureStore({
    reducer: {
        blogs: blogReducer
    }
})
