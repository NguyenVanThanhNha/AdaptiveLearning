import React from 'react';
import icon_07 from "../../images/icon_7.png";
import icon_08 from "../../images/icon_8.png";
import icon_09 from "../../images/icon_9.png";
import icon_10 from "../../images/icon_10.png";
import "./projects_info.scss";

export default function Index() {
    return (
        <section className="deneb_achivement section_padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6  wow fadeInLeft">
                        <div className="section_title">
                            <h2>Over 5+ Course & rich material</h2>
                        </div>
                        <div className="deneb_content_box">
                            <p>
                                With the hope of bringing knowledge to everyone in this country of Vietnam, 
                                our development team will always monitor, update and enrich the lesson data warehouse, 
                                contributing to improving the quality of education in the country.
                            </p>
                            <p>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="achivment_wrapper">
                            <div className="single_achivment wow fadeInUp">
                                <div className="icon">
                                    <img
                                        src={icon_07}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <h3>5+</h3>
                                <p>Course</p>
                            </div>
                            <div className="single_achivment wow fadeInUp" data-wow-delay=".1s">
                                <div className="icon">
                                    <img
                                        src={icon_08}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <h3>10+</h3>
                                <p>Practices</p>
                            </div>
                            <div className="single_achivment wow fadeInUp" data-wow-delay=".2s">
                                <div className="icon">
                                    <img
                                        src={icon_09}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <h3>2+</h3>
                                <p>Active Projects</p>
                            </div>
                            <div className="single_achivment wow fadeInUp" data-wow-delay=".3s">
                                <div className="icon">
                                    <img
                                        src={icon_10}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <h3>0+</h3>
                                <p>Years Exerience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
