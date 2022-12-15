import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import customAxios from "./api";

export const getBlogs = createAsyncThunk(
    'blogs/getBlogs',
    async () => {
        const res = await customAxios.get('blogs');
        return res.data
    }
)
export const addBlog = createAsyncThunk(
    'blogs/addBlog',
    async (data) => {
        const res = await customAxios.post('blogs', data);
        return data
    }
)
