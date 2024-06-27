import React, { useRef } from 'react'
import logo from "../images/logo2.png"
import { add_data } from '../api/api';
import { LOGIN_ADMIN } from '../constant';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    let name = useRef();
    let password = useRef();
    let navigate = useNavigate();

    let adminLogin = async (event) => {
        event.preventDefault();
        let data = {
            name: name.current.value,
            password: password.current.value,
        }
        let res = await add_data(LOGIN_ADMIN, data)
        let list = res.data.data;

        localStorage.setItem("admin", JSON.stringify(list))
        localStorage.setItem("loggedin", true)
        navigate("/")
    }

    return (
        <div>
            <div className="login-form">
                <div className="row m-0">
                    <div className="col-lg-6 px-0">
                        <div className="login-back d-flex flex-wrap justify-content-center align-items-center">
                            <img src={logo} alt="logo image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <form className='d-flex justify-content-center align-items-center h-100' onSubmit={adminLogin}>
                            <div className="form ">
                                <div className="admin-form">
                                    <h2>Login admin</h2>
                                    <label>User name: <input type="text" name='name' ref={name} className='form-control' placeholder='Enter name' /></label>
                                    <label>Password: <input type="password" name='password' ref={password} className='form-control' placeholder='Enter password' /></label>
                                    <div className="login-btn">
                                        <button className='button w-100 mt-4' onClick={adminLogin} >Next</button>
                                        <Link to={"/userlogin"}> <button className='log-btn w-100 mt-4' >login with <span> user</span><i className="fa-solid fa-arrow-right-to-bracket ps-3"></i></button></Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
