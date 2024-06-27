import React, { useRef } from 'react'
import logo from "../images/logo2.png"
import { add_data } from '../api/api';
import { USER_LOGIN } from '../constant';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserLogin = () => {

    let cardNo = useRef();
    let password = useRef();
    let navigate = useNavigate();

    let userLogin = async (e) => {
        e.preventDefault();
        if (localStorage.getItem("loggedin")) {
            alert("You are already voting.");
            return;
        }

        let data = {
            cardNo: cardNo.current.value,
            password: password.current.value,
        }
        try {
            let res = await add_data(USER_LOGIN, data)
            let list = res.data.data;
            localStorage.setItem("user", JSON.stringify(list))
            localStorage.setItem("loggedin", true);
            navigate("/user")
        } catch (error) {
            Swal.fire({
                title: "The user?",
                text: "user are not found?",
                icon: "question"
            });
        }
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
                        <form className='d-flex justify-content-center align-items-center h-100' onSubmit={UserLogin}>
                            <div className="form ">
                                <div className="admin-form">
                                    <h2>Login user</h2>
                                    <label>card no: <input type="text" name='name' ref={cardNo} className='form-control' placeholder='Enter name' /></label>
                                    <label>Password: <input type="password" name='password' ref={password} className='form-control' placeholder='Enter password' /></label>
                                    <div className="login-btn">
                                        <button className='button w-100 mt-4' onClick={userLogin} >Next</button>

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

export default UserLogin
