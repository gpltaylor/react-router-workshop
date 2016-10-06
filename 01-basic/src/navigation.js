import React from "react";
import Link from 'react-router/Link';

var Navigation = () => {
  return <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </div>
}

export default Navigation;
