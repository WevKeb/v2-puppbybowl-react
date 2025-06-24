import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"


const Navbar = () => {
    
    return (
        <div >
            <nav className="navbar">
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/addpuppy">Add Puppy</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;