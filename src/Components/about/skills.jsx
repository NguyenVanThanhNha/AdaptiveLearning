import React from 'react';
import skillImg from "../../images/skill.png";

export default function Skills() {
    return (
        <section className="deneb_skill">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="section_title">
                            <h2>Our development roadmap</h2>
                            <p>In the near future, our team will try to complete the tasks set out by this project, in order to provide an effective learning environment for Vietnamese students.</p>
                        </div>
                        <div className="skill_wrapper">
                            <div className="single_bar">
                                <div className="progress_title">
                                    <h5>UI/UX Design<span>55%</span></h5>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar wow slideInLeft" style={{width: "55%"}}><div className="dot"></div></div>
                                </div>
                            </div>
                            <div className="single_bar">
                                <div className="progress_title">
                                    <h5>Web Design<span>75%</span></h5>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar wow slideInLeft" style={{ width: "75%" }}><div className="dot"></div></div>
                                </div>
                            </div>
                            <div className="single_bar">
                                <div className="progress_title">
                                    <h5>Back-end Database<span>40%</span></h5>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar wow slideInLeft" style={{ width: "40%" }}><div className="dot"></div></div>
                                </div>
                            </div>
                            <div className="single_bar">
                                <div className="progress_title">
                                    <h5>Adaptive Algrorithm<span>35%</span></h5>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar wow slideInLeft" style={{ width: "35%" }}><div className="dot"></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="deneb_img_box">
                            <img src={skillImg} className="img-fluid" alt="skill" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
