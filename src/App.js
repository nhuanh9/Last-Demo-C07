import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import {Route, Routes} from "react-router-dom";
import Register from "./pages/Register";

function App() {
    return (
        <>
            <div className='container-fluid'>
                <Routes>
                    <Route path={''} element={<Login></Login>}></Route>
                    <Route path={'register'} element={<Register></Register>}></Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
