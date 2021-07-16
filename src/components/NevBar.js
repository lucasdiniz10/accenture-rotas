import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

function NavBar() {
  return (
    <ul>
      <li><Link className="active" to="/">Home</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/contacts">Contacts</Link></li>
      <li><Link to="/whoweare">Who we are</Link></li>
    </ul>
  );
}

export default NavBar;