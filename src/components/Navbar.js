import {Link} from "react-router-dom";

export default function Navbar() {
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

                        <form className="form-inline my-2 my-lg-0">
                            <Link to={'/'}>
                                <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Logout</button>
                            </Link>
                        </form>
                    </nav>
                </div>
            </div>
        </>
    )
}
