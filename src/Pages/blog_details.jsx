import React, { useState, useEffect} from 'react';
import PostContent from "../Components/blogs/post_content";
import { useParams,useLocation } from "react-router-dom";
import Layout from "../Layouts";
import PageHeader from "../Components/page_header";
import data from "../data/posts.json"
export default function BlogDetails(props) {
    const { id } = useParams();
    const postData = data.posts.find(post=>post.id === id);
    const [post, setPost] = useState([]);
    useEffect(()=>{
        setPost(postData);
    }, []);
    const postTitle = post.title;
    
    return (
        <Layout>
            <PageHeader title={postTitle ? postTitle : "Post Details"}/>
            <PostContent post={post}/>
        </Layout>
    )
}
