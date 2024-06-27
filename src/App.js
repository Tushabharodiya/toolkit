import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./redux_toolkit/atoms/Atoms";
import Dashboard from "./redux_toolkit/admin/pages/Dashboard";
import Party from "./redux_toolkit/admin/pages/Party";
import Voter from "./redux_toolkit/admin/pages/Voter";
import Election from "./redux_toolkit/admin/pages/Election";
import Connection from "./redux_toolkit/admin/pages/Connection";
import Sidebar from "./redux_toolkit/component/Sidebar";
import { useDispatch } from "react-redux";
import { get_connection, get_election, get_party, get_user, get_voter } from "./redux_toolkit/admin/api/api";
import { useEffect } from "react";
import Login from "./redux_toolkit/component/Login";
import UserLogin from "./redux_toolkit/component/UserLogin";
import User from "./redux_toolkit/user/User";
import PrivateRoute from "./redux_toolkit/services/PrivateRoute";

function App() {

  let role = "admin"
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_party())
    dispatch(get_voter())
    dispatch(get_election())
    dispatch(get_connection())
    dispatch(get_user())
  }, [])

  let admin = JSON.parse(localStorage.getItem("admin"))
  let user = JSON.parse(localStorage.getItem("user"))
  // console.log(admin);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={admin.role == "Admin" ? <Home /> : <Navigate to={"/login"} />} />
      <Route path="userlogin" element={user.role == "User" ? <UserLogin /> : <Navigate to={"/userlogin"} />} />
      <Route path="/user" element={<User />} />
    </Routes>
  )

}

let Home = () => {

  let admin = JSON.parse(localStorage.getItem("admin"))
  // console.log(admin);

  return (
    <>
      <PrivateRoute />
      <Navbar name={admin.name} password={admin.password} role={admin.role} />
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <Sidebar />
            </div>
            <div className="col-lg-10">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/party" element={<Party />} />
                <Route path="/voter" element={<Voter />} />
                <Route path="/election" element={<Election />} />
                <Route path="/conction" element={<Connection />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
