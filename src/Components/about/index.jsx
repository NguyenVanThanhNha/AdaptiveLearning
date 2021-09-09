import React from 'react';
import aboutImg from "../../images/about.png";
import { Link } from "react-router-dom";
import "./about.scss";

export default function Index() {
    const scrollToTop = (e) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <section className="deneb_about about_v1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="deneb_img_box wow fadeInLeft">
                            <img src={aboutImg} className="img-fluid" alt="about"/>
						</div>
                    </div>
                    <div className="col-lg-7">
                        <div className="deneb_content_box wow fadeInRight">
                            <h2>Why is adaptive learning important?</h2>
                            <p>Here, an instructor is tutoring a student to help them understand a difficult concept. Almost inevitably this instructor will alter their hints and advice in response to verbal and nonverbal cues from the learner — shifting the lesson flow to accommodate questions and lingering confusion, referencing current events or known student passions and preferences, changing activities in the moment (e.g. the student is having trouble, so walking them through the assignment instead of asking them to work alone).</p>
                            <p>
                                The instructor in the above example is adapting to the learner and therefore we call tutoring an adaptive learning experience. But responding to the exact needs of one or two learners at a time is the most a single instructor can be expected to effectively manage at once. The more students, the less an instructor is able to flex their teaching prowess to ensure every individual is progressing.
                            </p>
                            <Link to="/about" onClick={scrollToTop} className="deneb_btn">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
		</section>
    )
}
