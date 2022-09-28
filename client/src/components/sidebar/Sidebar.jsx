import React from 'react'
import "./sidebar.css"
import { Link } from "react-router-dom";
import aboutme from '../../Images/aboutme.jpg';

function Sidebar() {
  return (
    <div className="sidebar">
    <h1 className="sidebarTitle">ABOUT ME</h1>
      <div className="sidebarItem">
        <img className='img-fluid'
          src={aboutme}
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="navbar-brands fa-brands fa-facebook-square fa-lg" />
            <i className="navbar-brands fa-brands fa-twitter-square fa-lg" />
            <i className="navbar-brands fa-brands fa-pinterest-square fa-lg" />
            <i className="navbar-brands fa-brands fa-instagram-square fa-lg" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar