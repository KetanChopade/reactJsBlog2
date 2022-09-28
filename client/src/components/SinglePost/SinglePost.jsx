import React from "react";
import { Link } from "react-router-dom";
import "../SinglePost/singlePost.css";
import writebanner from '../../Images/writebanner.jpeg';

function SinglePost() {
  return (
    <>
      <div className="singlePost p-1 m-1 mb-5">
        <div className="singlePostWrapper">
          <img
            className="singlePostImg"
            src={writebanner}
            alt=""
          />
          <div className="row">
            <div className="col-10">
              <h1 className="singlePostTitle">Lorem ipsum dolor sit amet</h1>
            </div>
            <div className="col-2 m-auto">
              <div className="float-end">
                <i className="singlePostIcon far fa-edit text-primary"></i>
                <i className="singlePostIcon far fa-trash-alt text-danger"></i>
              </div>
            </div>
          </div>
          <div className="singlePostInfo mb-5">
            <span className="float-start" >
              Author:
              <b className="singlePostAuthor">
                <Link className="link " to="/posts?username=Safak">
                  Safak
                </Link>
              </b>
            </span>
            <span className="float-end">1 day ago</span>
          </div>
          <div>
          <p className="singlePostDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
            quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
            Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
            eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
            impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
            odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
            voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus
            eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae,
            adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem
            doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus
            eum beatae, adipisci voluptas a odit modi eos!
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
            quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
            Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
            eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
            impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
            odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
            voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
          </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePost;
