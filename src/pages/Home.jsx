import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import IntroPost from "../components/IntroPost";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import GlobalApi from "../Services/GlobalApi";

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    GlobalApi.getPost.then((resp) => {
      const result = resp.data.data.map((item) => ({
        id: item.id,
        title: item.attributes.title,
        desc: item.attributes.description,
        tag: item.attributes.tag,
        coverImage: item.attributes.coverImage.data.attributes.url,
      }));
      setPost(result);
    });
  };

  return (
    <div>
      <Header />
      <Search />
      {post.length>0? <IntroPost post={post[0]} />:null}
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
