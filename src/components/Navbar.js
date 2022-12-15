import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBlogs} from "../services/blogsService";

export default function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => {
        return state.user.user
    })
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/home">Logo</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="add-blog">Add new Blog <span
                                        className="sr-only">(current)</span></Link>
                                </li>
                            </ul>
                        </div>

                        <div className="form-inline my-2 my-lg-0">
                            {user.username}
                                <button className=" ml-3 btn btn-outline-danger my-2 my-sm-0" type="submit" onClick={()=> {
                                    localStorage.clear()
                                    navigate('/')
                                }}>Logout
                                </button>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
