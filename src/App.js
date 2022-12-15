import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import {Route, Routes} from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/home/Home";
import ListBlog from "./pages/home/blog/ListBlog";
import AddBlog from "./pages/home/blog/AddBlog";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBlogs} from "./services/blogsService";

function App() {
    return (
        <>
            <div className='container-fluid'>
                <Routes>
                    <Route path={''} element={<Login/>}/>
                    <Route path={'register'} element={<Register/>}/>
                    <Route path={'home'} element={<Home/>}>
                        <Route path={''} element={<ListBlog/>}></Route>
                        <Route path={'add-blog'} element={<AddBlog/>}></Route>
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
