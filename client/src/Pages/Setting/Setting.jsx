import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./setting.css";
import writebanner from '../../Images/writebanner.jpeg';

function Setting() {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-9 col-12">
          <div className="row align-items-center justify-content-center">
            <div className="col-6">
              <span className="settingsTitleUpdate float-start">
                Update Your Account
              </span>
            </div>
            <div className="col-6">
              <span className="settingsTitleDelete float-end ">
                Delete Account
              </span>
            </div>
            <form className="settingsForm">
            <div>
              <div className="text-center p-4">Profile Picture</div>
              <div className="row align-items-center justify-content-center">
                <div className="col-6 ">
                  <div className="settingsPP float-end pb-4">
                    <img 
                      src={writebanner}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-6 ">
                  <label htmlFor="fileInput">
                    <i className="settingsPPIcon far fa-user-circle"></i> choose
                    File
                  </label>
                  <input
                    id="fileInput"
                    type="file"
                    style={{ display: "none" }}
                    className="settingsPPInput"
                  />
                </div>
                <div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      UserName
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Ketan Chopade"
                      name="name" 
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Ketan@gmail.com" 
                      name="email"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                </div>
                <button className="writeSubmit text-white mt-3" type="submit">
                  Publish
                </button>
              </div>
            </div>
            </form>
          </div>
        </div>
        <div className="col-md-3 col-12">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Setting;
