import React, {useState, useEffect} from 'react';
import {
 FaArrowRight,
 FaSearch,
 FaCheck
} from "react-icons/fa";
import { Field, Form, Formik, FormikProps } from 'formik';

import data from "../../data/posts.json";

export default function Sidebar() {
    const [latestPosts, setLatestPosts] = useState([]);
    const postsNumbers = 4;
    useEffect(()=>{
        setLatestPosts(data.posts.slice(0, postsNumbers));
    },[]);

    return (
        <div className="deneb_sidebar">
            <div className="widget widget_search">
                <Formik
                    initialValues={{ search_text: '' }}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            console.log(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                        }, 1000);
                    }}
                >
                    {() => (
                        <Form>
                            <div className="form_group">
                                <Field
                                    type="text"
                                    name="search_text"
                                    className="form_control"
                                    placeholder="Search..."
                                    required
                                />
                                <i className="fa-search"><FaSearch /></i>
                                <button className="search_btn" type="submit"><i><FaArrowRight /></i></button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className="widget widget_categories">
                <h3 className="widget-title">Category</h3>
                <ul>
                    <li>
                        <a href="#">Design <span>15</span></a>
                    </li>
                    <li>
                        <a href="#">Development <span>10</span></a>
                    </li>
                    <li>
                        <a href="#">SEO <span>20</span></a>
                    </li>
                    <li>
                        <a href="#">App Design <span>8</span></a>
                    </li>
                    <li>
                        <a href="#">Branding <span>22</span></a>
                    </li>
                </ul>
            </div>
            <div className="widget featured_news">
                <h3 className="widget-title">Recent Post</h3>
                {latestPosts.map(post=>(
                    <div className="post_wrap"  key={post.id}>
                        {post.blogImage ?
                        <div className="post_img">
                            <a href={`/blog_details/${post.id}`}>
                                <img src={post.blogImage} className="img-fluid" alt={post.title} />
                            </a>
                        </div>
                        : null }
                        <div className="post_info">
                        <h3><a href={`/blog_details/${post.id}`}>{post.title}</a></h3>
                        <p>{post.postedOn}</p>
                        </div>
                    </div>
                ))}

            </div>
            <div className="widget widget_archive">
                <h3 className="widget-title">Archives</h3>
                <ul>
                    <li>
                        <a href="#">January <span>15</span></a>
                    </li>
                    <li>
                        <a href="#">Fabruary <span>10</span></a>
                    </li>
                    <li>
                        <a href="#">March <span>20</span></a>
                    </li>
                    <li>
                        <a href="#">April<span>8</span></a>
                    </li>
                    <li>
                        <a href="#">May <span>22</span></a>
                    </li>
                    <li>
                        <a href="#">Jun <span>22</span></a>
                    </li>
                    <li>
                        <a href="#">July <span>22</span></a>
                    </li>
                </ul>
            </div>
            <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Tages</h3>
                <ul>
                    <li>
                        <a href="#">
                            <span><i><FaCheck/></i></span>Business
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span><i><FaCheck/></i></span>News
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span><i><FaCheck/></i></span>Brand
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span><i><FaCheck/></i></span>Website
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span><i><FaCheck/></i></span>Website
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span><i><FaCheck/></i></span>Strategy
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span><i><FaCheck /></i></span>Brand
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span><i><FaCheck /></i></span>Mission
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
