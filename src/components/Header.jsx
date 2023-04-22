import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
        <Link to='/orders' className="btn btn-ghost normal-case text-xl">Orders</Link>
        {user && <Link to='/profile' className="btn btn-ghost normal-case text-xl">Profile</Link>}
        <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
        <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
        {
          user ? <>
          <span>{user.email}</span>
          <button onClick={handleLogOut} className="btn btn-xs">Sign Out</button>
          </> : <Link to='/login'>Log In</Link>
        }
      </div>
    </div>
  );
};

export default Header;
