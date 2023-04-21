import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
        <Link to='/' className="mr-10">Home</Link>
        <Link to='/login' className="mr-10">Login</Link>
        <Link to='/register' className="mr-10">Register</Link>
      </div>
    </div>
  );
};

export default Header;
