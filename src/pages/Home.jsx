import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import IntroPost from "../components/IntroPost";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import GlobalApi from "../Services/GlobalApi";

const Home = () => {
  const [post, setPost] = useState([]);
  const [orgPost,setOrgPost]=useState([])

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
      setOrgPost(result);
    });
  };

  const filterPost=(tag)=>{
    if(tag=='All')
    {
      setPost(orgPost);
      return ;
    }
    const result=orgPost.filter(item=>item.tag==tag);
    setPost(result);
  }

  return (
    <div>
      <Search selectedTag={(tag)=>filterPost(tag)} />
      {post.length>0? <IntroPost post={post[0]} />:null}
      {post.length>0? <Blogs posts={post} />:null}
    </div>
  );
};

export default Home;
