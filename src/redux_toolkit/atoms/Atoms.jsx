import { useNavigate } from "react-router-dom"
import logo from "../images/logo.png"
import { useState } from "react";

let Navbar = ({ name, password, role, cardNo, sex }) => {

    const [profile, setprofile] = useState("none")

    let navigate = useNavigate();

    let logout = () => {
        localStorage.removeItem("loggedin")
        if (role == "Admin") {
            navigate("/login")
        } else {
            navigate("/userlogin")
        }
    }
    let hide = () => {
        setprofile("block")
    }

    return (
        <>
            <header>
                <div className="navbar">
                    <div className="container">
                        <div className="head-logo d-flex align-items-center">
                            <img src={logo} alt="logo" />
                            <h4 className="mb-0 ms-2">E-ELECTION</h4>
                        </div>
                        <div className="user" onClick={hide}>
                            <button>{name[0]}</button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="profile" style={{ display: `${profile}` }} >
                <div className="profile-name position-relative">
                    <div className="space"></div>
                    <div className="user position-absolute">
                        <button><i className="fa-solid fa-user"></i></button>
                    </div>
                    <ul className="mt-3">
                        <li><a href="#">name: {name}</a></li>
                        {password && <li><a href="#">password: {password}</a></li>}
                        {cardNo && <li><a href="#">cardNo : {cardNo}</a></li>}
                        {sex && <li><a href="#">sex :{sex} </a></li>}
                    </ul>
                    <button className="logout" onClick={logout}>
                        <i className="fa-solid fa-arrow-right-from-bracket pe-2"></i>Log out
                    </button>
                </div>
            </div>
        </>
    );
}

export { Navbar }

