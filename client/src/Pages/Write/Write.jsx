import React from "react";
import "./write.css";
import writebanner from '../../Images/writebanner.jpeg';

function Write() {
  return (
    <>
      <div className="container">
        <div className="p-2">
          <img
            className="writeImg"
            src={writebanner}
            alt=""
          />
          <form className="writeForm m-5 text-center">
            <div className="writeFormGroup ">
            
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
              <input id="fileInput" type="file" style={{ display: "none" }} />
              <div className="mb-3 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Title"
                      name="title" 
                    />
                  </div>
            </div>
            <div className="writeFormGroup mb-3 text-center">
              <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
            <button className="writeSubmit text-white mt-3" type="submit">
              Publish
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Write;
