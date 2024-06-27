import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {

    let auto = localStorage.getItem("loggedin")
    return auto ? <Outlet /> : <Navigate to={"/login"} />


}

export default PrivateRoute
