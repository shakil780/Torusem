import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

import useFirebase from '../../useFirebase/useFirebase';



import './Nav.css'

const Nav = () => {
  const {user,logout}=useAuth()
  console.log(user);
    return (
        <nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto ">
        <li className="nav-item mx-3 ">
          <Link className="nav-<Link active list" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-<Link list" to="/services">service</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-<Link list" to="/about">about</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-<Link list" to="/contacet">contacet</Link>
        </li>
        <li className="nav-item mx-3">
        {user.email?<button className="btn btn-primary mx-3 "  onClick={logout}>logout</button>:
                   <Link className="nav-<Link list" to="/login">login</Link>
                  }
          
        </li>
        <span>{user?.displayName}</span>
        <li className="nav-item mx-3">
          <Link className="nav-<Link list" to="/hook">AddBook</Link>
        </li>
       
        
        
      </ul>
    </div>
  </div>
  
</nav>
            
        </nav>
    );
};

export default Nav;