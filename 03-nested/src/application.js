import React from "react";
import {Match, Link} from 'react-router';
import Notes from "./notes";
import Note from "./note";

var application = ({pathname, params}) => {
  return <div>
    <div>
      <h1>Application</h1>
      <p>Application : {params.appId}</p>
    </div>
    <div style={{display:'flex', textAlign: 'left', paddingLeft: 15, paddingRight: 15 }}>
      <div style={{width: '20%'}}>
        <Link to={`${pathname}/notes`}>Notes</Link>
      </div>
      <div style={{width:'80%'}}>
        <Match pattern={`${pathname}/notes`} exactly component={Notes} />
        <Match pattern={`${pathname}/notes/:id`} exactly component={Note} />
      </div>
    </div>
  </div>
}

export default application;
