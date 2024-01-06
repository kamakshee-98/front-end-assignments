import React from 'react'
/*import navbar.css */
import './Navbar.css'
/* Link */
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.userReducer);

    const logout = () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({type: "LOGIN_ERROR"});
        navigate("/login");
    }
    return (
        <div>
            {/* Nav bar */}
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" href="#">Sales App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      { user ? <> <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/addsales">Add Sales</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sales">Top 5 Sales</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/revenue">Today's Total Revenue</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login" onClick={()=> logout()}>Logout</Link>
                            </li>
                        </ul> </> :''}
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar