import React from "react";
import Sidebar from "../blogs/sidebar";
import {
    FaClock,
    FaUser,
    FaFacebookF,
    FaTwitter,
    FaPinterestP
} from "react-icons/fa";

import UserComments from "../comments/user_comments";
import CommentsForm from "../comments//comments_form";
export default function PostContent(props) {
    const { title, blogImage, blogText, postedOn, author } = props.post;
    return (
        <section className="deneb_single_blog section_padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="single_blog_wrapper">
                            <div className="post_top_content">
                                {blogImage ? (
                                    <div className="post_img">
                                        <img
                                            src={blogImage}
                                            className="img-fluid w-100"
                                            alt={title}
                                        />
                                    </div>
                                ) : null}
                                <div className="post_meta border-bottom pb-4">
                                    <ul>
                                        {postedOn ? (
                                            <li className="date"><i><FaClock /></i> {postedOn}</li>
                                        ) : null}
                                        {author ? (
                                            <li><i><FaUser /></i>By {author}</li>
                                        ) : null}
                                    </ul>
                                </div>
                            </div>
                            <div className="post_content mt-3">
                                <p>{blogText}</p>
                            </div>
                            <div className="post_share_tag">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="tag">
                                            Tags:
                                            <a href="#" rel="tag"> WordPress </a> , 
                                            <a href="#" rel="tag"> Hosting </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="social-share">
                                            <div className="share">
                                                <ul>
                                                    <li>Share</li>
                                                    <li>
                                                        <a href="#" title="Share on Facebook"><i><FaFacebookF /></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Share on Twitter"><i><FaTwitter /></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Share on Pinterest"><i><FaPinterestP /></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comments-container pt-5 mt-5">
                                <UserComments/>
                                <CommentsForm/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </section>
    );
}
