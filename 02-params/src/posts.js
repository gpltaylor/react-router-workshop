import React from "react";

var Posts = ({params}) => {
  return <div>
    <h1>Posts</h1>
    <p>View the latest posts</p>
    <p>Currently searching for post {params.name}</p>
  </div>
}

export default Posts;
