import React from "react";
import Link from 'react-router/Link';

var Navigation = () => {
  return <div>
    <ul>
      <li><Link to="/" activeStyle={{color:"green"}} activeOnlyWhenExact={true}>Home</Link></li>
      <li><Link to="/about" activeStyle={{color:"green"}}>About</Link></li>
      <li><Link to="/missing">Missing</Link></li>
    </ul>
  </div>
}

export default Navigation;
