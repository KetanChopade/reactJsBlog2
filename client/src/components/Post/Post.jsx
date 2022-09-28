import React from 'react'
import "./post.css"
import { Link } from "react-router-dom";
import postimg from '../../Images/articleimg.jpg';

function Post() {
  return (
    <div className="post">
      <img
        className="postImg image-flid"
        src={postimg}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats d-flex align-items-center justify-content-center">
          <span className="postCat ">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link text-black text-decoration-none">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <p className="postDate float-end">1 hour ago</p>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  )
}

export default Post