import React from "react";
import "./header.css"
import bannerimg from '../../Images/banner.webp';

function Header() {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">BLOG</span>
        </div>
        <img
          className="headerImg"
          src={bannerimg}
          alt=""
        />
      </div>
    </>
  );
}

export default Header;
