import React from 'react';
import aboutImg from "../../images/about.png";
import awardImg from "../../images/BuildOnLogo.png";
import signImg from "../../images/sign_2.png";

export default function HireUs() {
    return (
        <section className="deneb_about about_v2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="deneb_img_box">
                            <img src={aboutImg} className="img-fluid" alt="about"/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="deneb_content_box">
                            <h2>Why is adaptive learning important?</h2>
                            <p>Here, an instructor is tutoring a student to help them understand a difficult concept. Almost inevitably this instructor will alter their hints and advice in response to verbal and nonverbal cues from the learner — shifting the lesson flow to accommodate questions and lingering confusion, referencing current events or known student passions and preferences, changing activities in the moment (e.g. the student is having trouble, so walking them through the assignment instead of asking them to work alone).</p>
                            <p>
                                The instructor in the above example is adapting to the learner and therefore we call tutoring an adaptive learning experience. But responding to the exact needs of one or two learners at a time is the most a single instructor can be expected to effectively manage at once. The more students, the less an instructor is able to flex their teaching prowess to ensure every individual is progressing.
                            </p>
                        </div>
                        <div className="award_box">
                            <div className="award_img">
                                <img src={awardImg} alt="award"/>
                            </div>
                            <div className="award_info">
                                {/* <img src={signImg} className="img-fluid" alt="signin"/> */}
                                <h4>T3N Team</h4>
                                <h5>Menber of BuildOn VietNam 2021</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
