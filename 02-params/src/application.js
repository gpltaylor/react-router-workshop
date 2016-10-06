import React from "react";

var application = ({params}) => {
  return <div>
    <h1>Application</h1>
    <p>Application : {params.appId}</p>
    <p>Notes : {params.noteId}</p>
  </div>
}

export default application;
