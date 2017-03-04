import React from "react";
import Link from 'react-router-dom/Link';

var Navigation = () => {
  return <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/missing">Missing</Link></li>
    </ul>
  </div>
}

export default Navigation;
