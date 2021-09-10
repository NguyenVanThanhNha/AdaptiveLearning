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
import c5_anglemeasure from "../../images/c5_anglemeasure.jpg"
import c5_trigonometry from "../../images/c5_trigonometry.jpg"
import c5_trigonometryfunction from "../../images/c5_trigonometryfunction.jpg"
import c5_inversetrigonometryfunction from "../../images/physics10.jpg"
import c5_thelawofsine from "../../images/c5_thelawofsine.jpg"
import c5_thelawofcos from "../../images/c5_thelawofcosine.jpg"
import c5_finaltest from "../../images/c5_finaltest.jpg"
import c6_unitcircle from "../../images/c6_unitcircle.jpg"
import c6_trigonometryfunction_realnumber from "../../images/c6_trigonometryfunction_realnumber.jpg"
import c6_trigonometrygraph from "../../images/c6_trigonometrygraph.jpg"
import c6_trigonometrygraphmore from "../../images/c6_trigonometrygraphmore.jpg"
import c6_theirgraph from "../../images/c6_theirgraph.jpg"
import c6_harmonicmotion from "../../images/c6_harmonicmotion.jpg"
import c6_finaltest from "../../images/c6_finaltest.jpg"

import chemistryimg11 from "../../images/chemistry11.jpg"
import chemistryimg12 from "../../images/chemistry12.jpg"
import SectionTitle from "../section_title";
import PortfolioItem from "../../SingleFeatures/portfolio_item";

import { Tab , Nav } from "react-bootstrap";
export default function LearningTabMath10() {
    return (
        <div className="deneb_project project_v2 section_padding">
            <div className="container">
                <SectionTitle
                    title="Continue to build intellectual power"
                    description="When unknow printer took a gallery of type and scramblted it to make a type specimen book"
                />
                <Tab.Container id="left-tabs-example" defaultActiveKey="design">
                    <div className="row">
                        <div className="col-md-12">
                            <Nav className="project_button_2 justify-content-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="chapter5">CHAPTER 5</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="chapter6">CHAPTER 6</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="chapter7">CHAPTER 7</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="chapter8">CHAPTER 8</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="chapter9">CHAPTER 9</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 grid_wrapper">
                            <Tab.Content>
                             <Tab.Pane eventKey="chapter5">
                               <div className="row">
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={c5_anglemeasure}
                                            title=" Angle Measure"
                                            tag="Geometry"
                                            url="/dashboard/courses/math10/c5l1"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={c5_trigonometry}
                                            title=" Trigonometry of Right Triangles"
                                            tag="Geometry"
                                            url="#"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={c5_trigonometryfunction}
                                            title="Trigonometric Functions of Angles"
                                            tag="Geometry"
                                            url="#"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={c5_inversetrigonometryfunction}
                                            title="Inverse Trigonometric Functions and Right Triangles"
                                            tag="Geometry"
                                            url="#"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={c5_thelawofsine}
                                            title="The law of Sines"
                                            tag="Geometry"
                                            url="#"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={c5_thelawofcos}
                                            title="The Law of Cosines"
                                            tag="Geometry"
                                            url="#"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={c5_finaltest}
                                            title="Final Test"
                                            tag="Geometry"
                                            url="#"
                                        />
                                   </div>
                                   {/* <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={portfolioImg_08}
                                            title="Design & Develop"
                                            tag="Design"
                                            url="#"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={portfolioImg_09}
                                            title="Design & Develop"
                                            tag="Design"
                                            url="#"
                                        />
                                   </div> */}
                               </div>
                             </Tab.Pane>
                            <Tab.Pane eventKey="chapter6">
                              <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={c6_unitcircle}
                                        title="The Unit Circle"
                                        tag="6.1"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={c6_trigonometryfunction_realnumber}
                                        title="Trigonometri Functions of Real Numbers"
                                        tag="6.2"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={c6_trigonometrygraph}
                                        title="Trigonometric Graphs"
                                        tag="6.3"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={c6_trigonometrygraphmore}
                                        title="More Trigonometric Graphs"
                                        tag="6.4"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={c6_theirgraph}
                                        title="Inverse Trigonometric Functions and Their Graphs"
                                        tag="6.5"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={c6_harmonicmotion}
                                        title="Modeling Harmonic Motion"
                                        tag="6.6"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={c6_finaltest}
                                        title="Final Test"
                                        tag="Test"
                                        url="#"
                                    />
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="chapter7">
                              <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={c5_inversetrigonometryfunction}
                                        title="Trigonometri Identities"
                                        tag="7.1"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={c5_thelawofsine}
                                        title="Addition and Subtraction Formulas"
                                        tag="7.2"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={c5_thelawofcos}
                                        title="Double-Angle, Half-Angle, and Produc-Sum Formulas"
                                        tag="7.3"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={c5_finaltest}
                                        title="Basic Trigonometric Equations"
                                        tag="7.4"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={chemistryimg11}
                                        title="More Trigonometric Equations"
                                        tag="7.5"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={chemistryimg12}
                                        title="Final Test"
                                        tag="7.6"
                                        url="#"
                                    />
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="chapter8">
                              <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={c5_finaltest}
                                        title="Polar Coordinates"
                                        tag="8.1"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={chemistryimg11}
                                        title="Graphs of Polar Equations"
                                        tag="8.2"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={chemistryimg12}
                                        title="Polar Form of Complex Numbers, De Moivre's Theorem"
                                        tag="8.3"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={chemistryimg12}
                                        title="Plane Curves and Parametric Equations"
                                        tag="8.4"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={chemistryimg12}
                                        title="Final Test"
                                        tag="Test"
                                        url="#"
                                    />
                                </div>
                                
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="chapter9">
                              <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={c5_thelawofsine}
                                        title="Vectors in Two Dimensions"
                                        tag="9.1"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={c5_thelawofsine}
                                        title="The Dot Product"
                                        tag="9.2"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={c5_thelawofsine}
                                        title="Three-Dimensional Coordinate Geometry"
                                        tag="9.3"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={c5_thelawofsine}
                                        title="Vectors in Three Dimensions"
                                        tag="9.4"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={c5_thelawofsine}
                                        title="The Cross Product"
                                        tag="9.5"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={c5_thelawofsine}
                                        title="Equations of Lines and Planes"
                                        tag="9.6"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={c5_thelawofsine}
                                        title="Final Test"
                                        tag="Test"
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
