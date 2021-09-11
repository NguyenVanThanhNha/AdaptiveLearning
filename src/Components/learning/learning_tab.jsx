import React from 'react';
import portfolioImg_01 from "../../images/portfolio_1.jpg"
import portfolioImg_02 from "../../images/portfolio_2.jpg"
import portfolioImg_03 from "../../images/portfolio_3.jpg"
import portfolioImg_04 from "../../images/portfolio_4.jpg"
import portfolioImg_05 from "../../images/portfolio_5.jpg"
import portfolioImg_06 from "../../images/portfolio_6.jpg"
import portfolioImg_07 from "../../images/portfolio_7.jpg"
import portfolioImg_08 from "../../images/portfolio_8.jpg"
import portfolioImg_09 from "../../images/portfolio_9.jpg"
import mathimg10 from "../../images/math10_1.jpg"
import mathimg11 from "../../images/math11.jpg"
import mathimg12 from "../../images/math12.jpg"
import physicimg10 from "../../images/physics10.jpg"
import physicimg11 from "../../images/physics11.jpg"
import physicimg12 from "../../images/physics12.jpg"
import chemistryimg10 from "../../images/chemistry10.jpg"
import chemistryimg11 from "../../images/chemistry11.jpg"
import chemistryimg12 from "../../images/chemistry12.jpg"
import course_physics from "../../images/course_physic.jpg"
import course_chemistry from "../../images/course_chemistry.jpg"
import course_biological from "../../images/course_biological.jpg"
import course_history from "../../images/course_history.jpg"
import course_geography from "../../images/course_geography.jpg"
import course_business from "../../images/course_business.jpg"
import course_python from "../../images/course_python.jpg"
import course_photoshop from "../../images/course_photoshop.jpg"


import SectionTitle from "../section_title";
import PortfolioItem from "../../SingleFeatures/portfolio_item";

import { Tab , Nav } from "react-bootstrap";
export default function PortfoliosTab() {
    return (
        <div className="deneb_project project_v2 section_padding">
            <div className="container">
                <SectionTitle
                    title="Your courses"
                    description="When unknow printer took a gallery of type and scramblted it to make a type specimen book"
                />
                <Tab.Container id="left-tabs-example" defaultActiveKey="design">
                    <div className="row">
                        <div className="col-md-12">
                            <Nav className="project_button_2 justify-content-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="design">All course</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="development">Math</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="branding">Physics</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="marketing">Chemistry</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="mobile">Peronal Development</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 grid_wrapper">
                            <Tab.Content>
                             <Tab.Pane eventKey="design">
                               <div className="row">
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={mathimg10}
                                            title="Math"
                                            tag="The essence of mathematics lies in its freedom."
                                            url="/dashboard/courses/math10"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={course_physics}
                                            title="Physics"
                                            tag="The universe is waiting for you to conquer"
                                            url="#"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={course_chemistry}
                                            title="Chemistry"
                                            tag="Welcome to the world of matter"
                                            url="#"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={course_biological}
                                            title="Biological"
                                            tag="Learn more about humans and other creatures"
                                            url="#"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={course_history}
                                            title="History"
                                            tag="Let's go back in time together"
                                            url="#"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={course_geography}
                                            title="Geography"
                                            tag="Take you anywhere in the world"
                                            url="#"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={course_python}
                                            title="Python"
                                            tag="Programming changes our thinking about life"
                                            url="#"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={course_business}
                                            title="Business"
                                            tag="Prepare for a richer future"
                                            url="#"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={course_photoshop}
                                            title="Photoshop"
                                            tag="Improve aesthetic ability"
                                            url="#"
                                        />
                                   </div>
                               </div>
                             </Tab.Pane>
                            <Tab.Pane eventKey="development">
                              <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={mathimg10}
                                        title="Math 10"
                                        tag="The essence of mathematics lies in its freedom."
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={mathimg11}
                                        title="Math 11"
                                        tag="There isn't a genius that doesn't mix a bit of madness"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={mathimg12}
                                        title="Math 12"
                                        tag="Pure mathematics is, in its own way, the poetry of logical thinking"
                                        url="#"
                                    />
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="branding">
                              <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={physicimg10}
                                        title="Physics 10"
                                        tag="The universe is waiting for you to conquer"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={physicimg11}
                                        title="Physics 11"
                                        tag="A physicist is just how an atom sees itself."
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={physicimg12}
                                        title="Physics 12"
                                        tag="A physicist is just how an atom sees itself."
                                        url="#"
                                    />
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="marketing">
                              <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={chemistryimg10}
                                        title="Schemistry 10"
                                        tag="Development"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={chemistryimg11}
                                        title="Schemistry 11"
                                        tag="Development"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={chemistryimg12}
                                        title="Schemistry 12"
                                        tag="Development"
                                        url="#"
                                    />
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="mobile">
                              <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={portfolioImg_05}
                                        title="Mobile Apps"
                                        tag="Development"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={portfolioImg_07}
                                        title="Branding"
                                        tag="Development"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={portfolioImg_08}
                                        title="Marketing"
                                        tag="Development"
                                        url="#"
                                    />
                                </div>
                              </div>
                            </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </div>
                </Tab.Container>
            </div>
        </div>   
    )
}
