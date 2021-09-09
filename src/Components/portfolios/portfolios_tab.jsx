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
import SectionTitle from "../section_title";
import PortfolioItem from "../../SingleFeatures/portfolio_item";

import { Tab , Nav } from "react-bootstrap";
export default function PortfoliosTab() {
    return (
        <div className="deneb_project project_v2 section_padding">
            <div className="container">
                <SectionTitle
                    title="Our Latest Projects"
                    description="When unknow printer took a gallery of type and scramblted it to make a type specimen book"
                />
                <Tab.Container id="left-tabs-example" defaultActiveKey="design">
                    <div className="row">
                        <div className="col-md-12">
                            <Nav className="project_button_2 justify-content-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="design">Web Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="development">Web Development</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="branding">Branding</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="marketing">SEO</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="mobile">Apps</Nav.Link>
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
                                            img={portfolioImg_01}
                                            title="Design & Develop"
                                            tag="Design"
                                            url="#"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={portfolioImg_02}
                                            title="Design & Develop"
                                            tag="Design"
                                            url="#"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={portfolioImg_03}
                                            title="Design & Develop"
                                            tag="Design"
                                            url="#"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={portfolioImg_04}
                                            title="Design & Develop"
                                            tag="Design"
                                            url="#"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={portfolioImg_05}
                                            title="Design & Develop"
                                            tag="Design"
                                            url="#"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={portfolioImg_06}
                                            title="Design & Develop"
                                            tag="Design"
                                            url="#"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={portfolioImg_07}
                                            title="Design & Develop"
                                            tag="Design"
                                            url="#"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
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
                                   </div>
                               </div>
                             </Tab.Pane>
                            <Tab.Pane eventKey="development">
                              <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={portfolioImg_09}
                                        title="Web Development"
                                        tag="Development"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={portfolioImg_07}
                                        title="Web Development"
                                        tag="Development"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={portfolioImg_06}
                                        title="Web Development"
                                        tag="Development"
                                        url="#"
                                    />
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="branding">
                              <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={portfolioImg_02}
                                        title="Branding And Marketing"
                                        tag="Development"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={portfolioImg_03}
                                        title="Branding"
                                        tag="Development"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={portfolioImg_04}
                                        title="Marketing"
                                        tag="Development"
                                        url="#"
                                    />
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="marketing">
                              <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={portfolioImg_03}
                                        title="Branding And Marketing"
                                        tag="Development"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={portfolioImg_06}
                                        title="Branding"
                                        tag="Development"
                                        url="#"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={portfolioImg_09}
                                        title="Marketing"
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
