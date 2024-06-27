import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <h2><i className="fa-regular fa-folder-open pe-2"></i>Getting started</h2>
                <ul>
                    <li><i className="fa-solid fa-house"></i><Link to={"/"} href="#">dashborad</Link></li>
                    <li><i className="fa-regular fa-handshake"></i><Link to={"/party"} href="#">party</Link></li>
                    <li><i className="fa-solid fa-square-poll-vertical"></i><Link to={"/voter"} href="#">voter</Link></li>
                    <li><i className="fa-solid fa-atom"></i><Link to={"/election"} href="#">election</Link></li>
                    <li><i className="fa-solid fa-address-book"></i><Link to={"/conction"} href="#">conction</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;