import React from 'react';
import {
    FaClock,
    FaUser,
    FaPlay
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Post(props) {
    const { posts } = props;
    const scrollToTop = (e)=> {
          window.scrollTo({
              top: 0
          });
    }
    return (
      <>
        {posts.map(post=>(
            <div className="grid_item" key={post.id}>
                {post.blogImage ? 
                <div className="deneb_img">
                    <NavLink to={`/blog_details/${post.id}`} onClick={scrollToTop}>
                        <img src={post.blogImage} className="img-fluid w-100" alt={post.title} />
                    </NavLink>
                </div>
                : null }
                <div className="deneb_info">
                    <div className="post_meta">
                        <ul>
                          <li><i><FaClock /></i> {post.postedOn}</li>
                          <li><i><FaUser/></i> By {post.author}</li>
                        </ul>
                    </div>
                    <h3 className="title">
                        <NavLink to={`/blog_details/${post.id}`} onClick={scrollToTop}>{post.title}</NavLink>
                    </h3>
                    <p>{post.smallDesc}</p>
                    <NavLink to={`/blog_details/${post.id}`} onClick={scrollToTop} className="post_btn link_btn">
                        <i><FaPlay /></i> Read More
                    </NavLink>
                </div>
            </div>
        ))}
     </>
    )
}
