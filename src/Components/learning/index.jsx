import React from 'react';
import "./learning.scss";
import shapeImg_01 from "../../images/shape/shape_10.png";
import portfolioImg_01 from "../../images/math10_1.jpg"
import portfolioImg_02 from "../../images/math11.jpg"
import portfolioImg_03 from "../../images/math12.jpg"
import physicsimg_01 from "../../images/physics10.jpg"
import physicsimg_02 from "../../images/physics11.jpg"
import physicsimg_03 from "../../images/physics12.jpg"
import chemistryimg_01 from "../../images/chemistry10.jpg"
import chemistryimg_02 from "../../images/chemistry11.jpg"
import chemistryimg_03 from "../../images/chemistry12.jpg"
import { Tabs, Tab } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PortfolioItem from "../../SingleFeatures/portfolio_item";
import SectionTitle from "../section_title";
export default function Index() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerPadding: "30px"
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="deneb_project project_v1">
            <div className="shape_v3">
                <img src={shapeImg_01} className="shape_10" alt="shape"/>
            </div>
            <div className="container">
                <SectionTitle 
                    title="Popular course"
                    description=" "
                />
                <div className="row">
                    <div className="col-lg-12 carousel-style projects_slider_content">
                        <Tabs defaultActiveKey="development" id="portfolio-tabs">
                            <Tab eventKey="development" title="Mathematics" className="project_btn active_btn">
                                <div className="mt-5">
                                    <Slider {...settings}>
                                        <div className="sizeimg">
                                            <PortfolioItem
                                              img={portfolioImg_01}
                                              title="Math 10"
                                              tag="Design"
                                            />
                                        </div>
                                        <div className="sizeimg">
                                            <PortfolioItem
                                              img={portfolioImg_02}
                                              title="Math 11"
                                              tag="Design"
                                            />
                                        </div>
                                        <div className="sizeimg">
                                            <PortfolioItem 
                                             img={portfolioImg_03}
                                             title="Math 12"
                                             tag="Design"
                                            />
                                        </div>
                                        <div>
                                            <PortfolioItem
                                                img={portfolioImg_02}
                                                title="Design & Develop"
                                                tag="Design"
                                            />
                                        </div>
                                    </Slider>
                                </div>
                            </Tab>
                            <Tab eventKey="design" title="Physics" className="project_btn active_btn">
                                <div className="mt-5">
                                    <Slider {...settings}>
                                        <div>
                                            <PortfolioItem
                                                img={physicsimg_01}
                                                title="Physics 10"
                                                tag="Design"
                                            />
                                        </div>
                                        <div>
                                            <PortfolioItem
                                                img={physicsimg_02}
                                                title="Physics 11"
                                                tag="Graphic"
                                            />
                                        </div>
                                        <div>
                                            <PortfolioItem
                                                img={physicsimg_03}
                                                title="Physics 12"
                                                tag="Development"
                                            />
                                        </div>
                                        <div>
                                            <PortfolioItem
                                                img={portfolioImg_01}
                                                title="Design & Develop"
                                                tag="Design"
                                            />
                                        </div>
                                    </Slider>
                                </div>
                            </Tab>
                            <Tab eventKey="apps" title="Chemistry" className="project_btn active_btn">
                                <div className="mt-5">
                                    <Slider {...settings}>
                                        <div>
                                            <PortfolioItem
                                                img={chemistryimg_01}
                                                title="Chemistry 10"
                                                tag="Editing"
                                            />
                                        </div>
                                        <div>
                                            <PortfolioItem
                                                img={chemistryimg_02}
                                                title="Chemistry 11"
                                                tag="Coding"
                                            />
                                        </div>
                                        <div>
                                            <PortfolioItem
                                                img={chemistryimg_03}
                                                title="Chemistry 12"
                                                tag="Traveling"
                                            />
                                        </div>
                                    </Slider>
                                </div>
                            </Tab>
                            <Tab eventKey="marketing" title="Physique" className="project_btn active_btn">
                                <div className="mt-5">
                                    <Slider {...settings}>
                                        <div>
                                            <PortfolioItem
                                                img={portfolioImg_01}
                                                title="Video Editing"
                                                tag="Editing"
                                            />
                                        </div>
                                        <div>
                                            <PortfolioItem
                                                img={portfolioImg_02}
                                                title="Programming"
                                                tag="Coding"
                                            />
                                        </div>
                                        <div>
                                            <PortfolioItem
                                                img={portfolioImg_03}
                                                title="Traveling App"
                                                tag="Traveling"
                                            />
                                        </div>
                                    </Slider>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}
