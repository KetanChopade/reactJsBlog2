import React from "react";
import Post from "../../components/Post/Post";
import "./posts.css";

function Posts() {
  return (
    <div className="posts d-flex align-items-center justify-content-center flex-wrap">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  );
}

export default Posts;
