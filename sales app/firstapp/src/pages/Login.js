import React, { useState } from 'react'
/* import login.css */
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import axios from 'axios'
import { API_BASE_URL } from '../../src/config'
import Swal from 'sweetalert2'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();
        setLoading(true);
        const requestData = { email: email, password }
        axios.post(`${API_BASE_URL}/login`, requestData)
            .then((result) => {
                if (result.status === 200) {
                    setLoading(false);
                    localStorage.setItem("token", result.data.result.token);
                    localStorage.setItem('user', JSON.stringify(result.data.result.user));
                    dispatch({type: 'LOGIN _SUCCESS', payload: result.data.result.user });
                    setLoading(false);
                    navigate('/addsales');
                }
        
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data.error
                })
            })
    }
    return (
        <div>
            <div className='container'>
                {loading ? <div className='col-md-12 mt-3 text-center'>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div> : ''}
                {/* Heading */}
                <h2 className='text-center mt-3'>LOGIN FORM</h2>
                {/* login form  */}
                <form onSubmit={(e) => login(e)}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" value={email} onChange={(ev) => { setEmail(ev.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" value={password} onChange={(ev) => { setPassword(ev.target.value) }} className="form-control" id="exampleInputPassword1" />
                    </div>
                    {/*button */}
                    <div className='mb-2 d-grid'>
                        <button type="submit" className="btn btn-primary">
                            <Link to='/addsales' className='text-dark'>Submit</Link></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login