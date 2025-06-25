import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"


const Navbar = () => {
   
    return (
        <div >
            <nav className="navbar">
                <ul className="navbar-links">
                    <li><NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/addpuppy">Add Puppy</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;