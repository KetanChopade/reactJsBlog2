import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/SinglePost/SinglePost"

function Single() {
  return (
    <>
      <div className="container">
        <div className="row gx-0">
          <div className="col-md-9 col-12">
            <SinglePost/>
          </div>
          <div className="col-md-3 col-12">
            <Sidebar/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Single;
