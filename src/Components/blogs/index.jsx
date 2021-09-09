import React from 'react';
import SectionTitle from "../section_title";
import BlogItem from "../../SingleFeatures/blog_item";
import data from "../../data/posts.json";
import "./blogs.scss";

export default function Index() {
    const postsNumber = 3;
    const latestPosts = data.posts.slice(0, postsNumber);
    return (
        <section className="deneb_blog blog_v1">
            <div className="container">
                <SectionTitle
                  title="Study Blog"
                  description="When unknow printer took a gallery of type and scramblted it to make a type specimen book"
                />
                <div className="row">
                    {latestPosts.map(post=>(
                        <BlogItem key={post.id}
                            title={post.title}
                            url={`blog_details/${post.id}`}
                            description={post.smallDesc}
                            date={post.postedOn}
                            img={post.blogImage}
                        />
                    ))}
                </div>
            </div>
        </section>

    )
}
