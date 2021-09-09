import React, { useState, useEffect } from 'react';
import Layout from "../Layouts";
import PageHeader from "../Components/page_header";
import Sidebar from "../Components/blogs/sidebar";
import Post from "../Components/blogs/post";
import Pagination from "../Components/blogs/pagination";
import data from "../data/posts.json";

export default function Blog() {

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    useEffect(()=>{
        const fetchPosts = async () => {
            setPosts(data.posts);
        }
        fetchPosts();
    },[]);
    const totalPosts = posts.length;
    const paginate = (e,pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 400, behavior: 'smooth' });
        e.preventDefault();
    }

    return (
        <Layout>
          <PageHeader title="Blog"/>
            <section className="blog_wrapper blog_v2 section_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog_wrap_content">
                                <Post posts={currentPosts} />
                                <Pagination 
                                    totalPosts={totalPosts}
                                    postsPerPage={postsPerPage}
                                    currentPage={currentPage}
                                    paginate = {paginate}
                                  />
                            </div>
                        </div>
                        <div className="col-lg-4">
                           <Sidebar/>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
