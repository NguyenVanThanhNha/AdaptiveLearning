import React from 'react';
import serviceImg_01 from "../../images/service_1.png";
import serviceImg_02 from "../../images/service_2.png";
import serviceImg_03 from "../../images/service_3.png";
import icon_17 from "../../images/icon_17.png"
import icon_18 from "../../images/icon_18.png"
import icon_19 from "../../images/icon_19.png"

export default function WorkFlow() {

    return (
        <section className="service_feature">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title text-center">
                            <h2>Our Work Flow</h2>
                            <p>When unknow printer took a gallery of type and scramblted it to make a type specimen book</p>
                        </div>
                    </div>
                </div>
                <div className="feature_wrapper">
                    <div className="single_feature">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="deneb_img_box">
                                    <img src={serviceImg_01} className="img-fluid" alt="service"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="deneb_content_box">
                                    <div className="icon">
                                        <img src={icon_17} alt="icon"/>
                                    </div>
                                    <div className="info">
                                        <h3>Analysis</h3>
                                        <p>Morbi vel tortor at metus malesuada convallis. Nam diam magna, laoreet ac libero quis, laoreet semper sem. Etiam erat quam, suscipit in orci ut, aliquet finibus tortor. Nullam dui leo, convallis quis diam
                                            eget, aliquam feugiat nunc. Vivamus quis volutpat dui.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single_feature">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="deneb_content_box">
                                    <div className="icon">
                                        <img src={icon_18} alt="icon" />
                                    </div>
                                    <div className="info">
                                        <h3>Development</h3>
                                        <p>Morbi vel tortor at metus malesuada convallis. Nam diam magna, laoreet ac libero quis, laoreet semper sem. Etiam erat quam, suscipit in orci ut, aliquet finibus tortor. Nullam dui leo, convallis quis diam
                                            eget, aliquam feugiat nunc. Vivamus quis volutpat dui.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="deneb_img_box">
                                    <img src={serviceImg_02} className="img-fluid" alt="service"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single_feature">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="deneb_img_box">
                                    <img src={serviceImg_03} className="img-fluid" alt="service"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="deneb_content_box">
                                    <div className="icon">
                                        <img src={icon_19} alt="icon"/>
                                    </div>
                                    <div className="info">
                                        <h3>Launch</h3>
                                        <p>Morbi vel tortor at metus malesuada convallis. Nam diam magna, laoreet ac libero quis, laoreet semper sem. Etiam erat quam, suscipit in orci ut, aliquet finibus tortor. Nullam dui leo, convallis quis diam
                                            eget, aliquam feugiat nunc. Vivamus quis volutpat dui.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
