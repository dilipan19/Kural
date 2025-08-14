import React from 'react';
import { Link } from 'react-router-dom'; 
import './index.css'

// Navbar component
function NavbarComponent() {
  return (
    <div className='navbar'>
       <Link to="/" className='navbar-button'>Home</Link>
       <Link to="/post-issues" className='navbar-button'>Post Issues</Link>
    </div>
  );
}

export default NavbarComponent;
