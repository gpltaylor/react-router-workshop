import React from "react";
import Link from 'react-router-dom/Link';

var Navigation = () => {
  return <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/aboutus">About</Link></li>
      <li><Link to="/aboutus/bob">User-About</Link></li>
      <li><Link to="/user/Bob">Bob</Link></li>
      <li><Link to="/missing">Missing</Link></li>
    </ul>
  </div>
}

export default Navigation;
