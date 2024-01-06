import React, { useState } from 'react'

import axios from 'axios'
import { API_BASE_URL } from '../../src/config'
import Swal from 'sweetalert2'

const Register = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const register = (event) => {
        event.preventDefault();
        setLoading(true);
        const requestData = { firstName: firstName, lastName, email, password }
        axios.post(`${API_BASE_URL}/signup`, requestData)
            .then((result) => {
                if (result.status === 201) {
                    setLoading(false);
                    Swal.fire({
                        icon: 'success',
                        title: 'User successfully registered'
                    })
                }
                setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Some error occurred please try again later!'
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
                {/* heading */}
                <h2 className='text-center mt-3'>REGISTRATION FORM</h2>
                {/* Registration from */}
                <form onSubmit={(e) => register(e)}>
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input type="text" value={firstName} onChange={(ev) => {setFirstName(ev.target.value) }} className="form-control" id="exampleInputFirstName" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" value={lastName} onChange={(ev) => {setLastName(ev.target.value) }} className="form-control" id="exampleInputLastName" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" value={email} onChange={(ev) => {setEmail(ev.target.value) }} className="form-control" id="exampleInputEmail1" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" value={password} onChange={(ev) => {setPassword(ev.target.value) }} className="form-control" id="exampleInputPassword1" />
                    </div>
                    {/* button */}
                    <div className='mb-2 d-grid'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register