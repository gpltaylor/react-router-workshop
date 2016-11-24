import React from "react";

var NotFound = ({location}) => {
  return <div>
    <h1>Not Found</h1>
    <p>Sorry but the page {location.pathname}, can not be found.</p>
  </div>
}

export default NotFound;
