import React from "react";
import Link from 'react-router/Link';

const rootQuery = {
    pathname: '/queries'    
}

const queryA = {
    pathname: '/queries',
    query: { firstName: "Garry", surname: "Taylor", age: 21 }
}

const queryB = {
    pathname: '/queries',
    query: { firstName: "John", surname: "Papa", age: 31 }
}

const Queries = ({location}) => {
    return <div>
    <h1>Links</h1>
    <ul>
        <li><Link to={rootQuery}>Root Query</Link></li>
        <li><Link to={queryA}>Query A</Link></li>
        <li><Link to={queryB}>Query B</Link></li>
    </ul>

    {location.query != null ?
        <div>
        <p><label>First Name:</label>{location.query.firstName}</p>
        <p><label>Surname:</label>{location.query.surname}</p>
        <p><label>Age:</label>{location.query.age}</p>
        </div>
    : ""}
    </div>
}

export default Queries;