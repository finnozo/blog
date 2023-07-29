import React, { useEffect } from "react";
import GlobalApi from "../Services/GlobalApi";
const IntroPost = () => {
  useEffect(()=>{
    getPost();
  },[]);
  const getPost = () => {
    GlobalApi.getPost.then((resp) => {
      console.log(resp.data.data);
    });
  };

  return <div>Page Test</div>;
};

export default IntroPost;
