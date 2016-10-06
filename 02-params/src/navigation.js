import React from "react";
import Link from 'react-router/Link';

var Navigation = () => {
  return <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <li><Link to="/posts/react-router-splat">Splat</Link></li>
      <li><Link to="/posts/react-router-intro">Intro</Link></li>
      <li><Link to="/posts/test/routing">Partial</Link></li>
      <li><Link to="/application/TAY215485/notes/232">Application</Link></li>
      <li><Link to="/post/missing">Missings</Link></li>
    </ul>
  </div>
}

export default Navigation;
