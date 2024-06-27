import React, { useState } from 'react'
import { Navbar } from '../atoms/Atoms'
import PrivateRoute from '../services/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { post_user } from '../admin/api/api';
import { useNavigate } from 'react-router-dom';

const User = () => {

    let user = JSON.parse(localStorage.getItem("user"));
    let connection = useSelector((state) => state.adminSlice)
    const [vote, setvote] = useState({})
    let navigate = useNavigate();

    let dispatch = useDispatch();

    let userVote = (vote) => {
        console.log(vote);
        let data = {
            user: user._id,
            party: vote?.party._id,
            election: vote?.election._id,
        }
        setvote(data)
    }

    let submit = () => {
        dispatch(post_user(vote))
        document.getElementById('voteButton').disabled = true;
        setTimeout(function () {
            logout();
        }, 6000);
    }
    function logout() {
        localStorage.removeItem("loggedin");
        navigate("/userlogin")
    }

    return (
        <div>
            <PrivateRoute />
            <Navbar name={user.name} cardNo={user.cardNo} sex={user.sex} />
            <section className="user">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="sidebar">
                                <ul>
                                    <li><a href="#"> <i className="fa-solid fa-house pe-2"></i>home</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="admintable mt-5">
                                <div className="vote-btn d-flex justify-content-end">
                                    <button className='button' onClick={submit}>vote</button>
                                </div>
                                <table cellPadding="8px">
                                    <thead>
                                        <tr>
                                            <th>election name</th>
                                            <th>date</th>
                                            <th>view/delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            connection.Connection?.map((val, index) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <tr>
                                                            <td><img src={val.party?.party_logo} alt="party image" /></td>
                                                            <td>{val.party?.party_name}</td>
                                                            <td onClick={() => userVote(val)}><input type="radio" id='voteButton' name='vote' /></td>
                                                        </tr>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default User
