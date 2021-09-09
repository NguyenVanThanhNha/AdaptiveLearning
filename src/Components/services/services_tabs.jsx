import React from 'react'
import { Tab, Nav, Row, Col } from "react-bootstrap";
import icon_11 from "../../images/icon_11.png";
import icon_12 from "../../images/icon_12.png";
import icon_13 from "../../images/icon_13.png";
import icon_14 from "../../images/icon_14.png";
import icon_15 from "../../images/icon_15.png";
import icon_16 from "../../images/icon_16.png";
import serviceImg_01 from "../../images/services/01.jpg";
import serviceImg_02 from "../../images/services/02.jpg";
import serviceImg_03 from "../../images/services/03.jpg";
import serviceImg_04 from "../../images/services/04.jpg";
import serviceImg_05 from "../../images/services/05.jpg";
import serviceImg_06 from "../../images/services/06.jpg";
export default function ServicesTabs() {
    return (
        <section className="service_wrapper section_padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <div className="service_tab_wrap">
                            <div className="service_tab_nav">
                                <Nav className="nav nav-tabs">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">
                                            <img src={icon_11} />
                                            <span>Web Solution</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">
                                            <img src={icon_12} />
                                            <span>Strategy & Research</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">
                                            <img src={icon_13} />
                                            <span>Web Development</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">
                                            <img src={icon_14} />
                                            <span>App Design</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth">
                                            <img src={icon_15} />
                                                <span>Digital Marketing</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="six">
                                            <img src={icon_16} />
                                            <span>Business Analysis</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="tab-content">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="deneb_content_box">
                                                    <h2>Web Solution</h2>
                                                    <p>Etiam suscipit sed sem nec elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed accumsan, urna vel finibus sollicitudin, urna sem fringilla nisi.</p>
                                                    <p>In vel ante tristique, blandit nisi in, feugiat nisl. Nunc sagittis pretium arcu, ac consectetur diam feugiat vitae. Pellentesque sit amet elit facilisis, sodales nisl non, luctus ex. Donec molestie consequat velit, id imperdiet arcu sollicitudin.</p>
                                                    <p>Praesent ac tempus ipsum, eget consequat ante. Sed consequat, elit euismod finibus faucibus.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="deneb_img_box">
                                                    <img src={serviceImg_01} className="img-fluid" alt="services"/>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="deneb_content_box">
                                                    <h2>Strategy & Research</h2>
                                                    <p>Etiam suscipit sed sem nec elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed accumsan, urna vel finibus sollicitudin, urna sem fringilla nisi.</p>
                                                    <p>In vel ante tristique, blandit nisi in, feugiat nisl. Nunc sagittis pretium arcu, ac consectetur diam feugiat vitae. Pellentesque sit amet elit facilisis, sodales nisl non, luctus ex. Donec molestie consequat velit, id imperdiet arcu sollicitudin.</p>
                                                    <p>Praesent ac tempus ipsum, eget consequat ante. Sed consequat, elit euismod finibus faucibus.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="deneb_img_box">
                                                    <img src={serviceImg_02} className="img-fluid" alt="services" />
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="deneb_content_box">
                                                    <h2>Web Development</h2>
                                                    <p>Etiam suscipit sed sem nec elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed accumsan, urna vel finibus sollicitudin, urna sem fringilla nisi.</p>
                                                    <p>In vel ante tristique, blandit nisi in, feugiat nisl. Nunc sagittis pretium arcu, ac consectetur diam feugiat vitae. Pellentesque sit amet elit facilisis, sodales nisl non, luctus ex. Donec molestie consequat velit, id imperdiet arcu sollicitudin.</p>
                                                    <p>Praesent ac tempus ipsum, eget consequat ante. Sed consequat, elit euismod finibus faucibus.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="deneb_img_box">
                                                    <img src={serviceImg_03} className="img-fluid" alt="services" />
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="deneb_content_box">
                                                    <h2>App Design</h2>
                                                    <p>Etiam suscipit sed sem nec elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed accumsan, urna vel finibus sollicitudin, urna sem fringilla nisi.</p>
                                                    <p>In vel ante tristique, blandit nisi in, feugiat nisl. Nunc sagittis pretium arcu, ac consectetur diam feugiat vitae. Pellentesque sit amet elit facilisis, sodales nisl non, luctus ex. Donec molestie consequat velit, id imperdiet arcu sollicitudin.</p>
                                                    <p>Praesent ac tempus ipsum, eget consequat ante. Sed consequat, elit euismod finibus faucibus.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="deneb_img_box">
                                                    <img src={serviceImg_04} className="img-fluid" alt="services" />
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="deneb_content_box">
                                                    <h2>Digital Marketing</h2>
                                                    <p>Etiam suscipit sed sem nec elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed accumsan, urna vel finibus sollicitudin, urna sem fringilla nisi.</p>
                                                    <p>In vel ante tristique, blandit nisi in, feugiat nisl. Nunc sagittis pretium arcu, ac consectetur diam feugiat vitae. Pellentesque sit amet elit facilisis, sodales nisl non, luctus ex. Donec molestie consequat velit, id imperdiet arcu sollicitudin.</p>
                                                    <p>Praesent ac tempus ipsum, eget consequat ante. Sed consequat, elit euismod finibus faucibus.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="deneb_img_box">
                                                    <img src={serviceImg_05} className="img-fluid" alt="services" />
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="six">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="deneb_content_box">
                                                    <h2>Business Analysis</h2>
                                                    <p>Etiam suscipit sed sem nec elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed accumsan, urna vel finibus sollicitudin, urna sem fringilla nisi.</p>
                                                    <p>In vel ante tristique, blandit nisi in, feugiat nisl. Nunc sagittis pretium arcu, ac consectetur diam feugiat vitae. Pellentesque sit amet elit facilisis, sodales nisl non, luctus ex. Donec molestie consequat velit, id imperdiet arcu sollicitudin.</p>
                                                    <p>Praesent ac tempus ipsum, eget consequat ante. Sed consequat, elit euismod finibus faucibus.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="deneb_img_box">
                                                    <img src={serviceImg_06} className="img-fluid" alt="services" />
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </div>
                     </Tab.Container>
                    </div>
                </div>
            </div>
        </section>
    )
}
