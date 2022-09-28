import React from "react";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/Posts/Posts";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);
  // const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      // setPosts(res.data);
      console.log(res)
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row gx-0">
          <div  className="col-md-9 col-12">
            <Posts />
          </div>
          <div  className="col-md-3 col-12">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
