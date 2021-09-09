import React from 'react';
import CallToAction from "../call_to_action";
import footerImg from "../../images/footer_bg.png";
import logoImg from "../../images/logo.png";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.scss";

export default function Index() {
    const scrollToTop = (e)=> {
        window.scrollTo({
            top: 0
        });
    }
    return (
	  <>
        <CallToAction/>
        <footer className="deneb_footer">
                <div className="widget_wrapper" style={{ backgroundImage: `url(${footerImg})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="widget widegt_about">
                                <div className="widget_title">
                                    <Link to="/" onClick={scrollToTop}><img src={logoImg} className="img-fluid" alt="logo" /></Link>
								</div>
                                    <p>We always want to bring you interesting and effective experiences. We look forward to receiving your comments and questions. Best regards!.</p>
                                    <ul className="social">
                                        <li><a href="#"><i><FaFacebookF/></i></a></li>
                                        <li><a href="#"><i><FaTwitter/></i></a></li>
                                        <li><a href="#"><i><FaInstagram/></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="widget widget_link">
                                    <div className="widget_title">
                                        <h4>Links</h4>
                                    </div>
                                    <ul>
                                        <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
                                        <li><Link to="/services" onClick={scrollToTop}>Learning</Link></li>
                                        <li><Link to="/portfolios" onClick={scrollToTop}>Portfolios</Link></li>
                                        <li><Link to="/blog" onClick={scrollToTop}>Blog</Link></li>
                                        <li><Link to="/contact" onClick={scrollToTop}>Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="widget widget_contact">
                                    <div className="widget_title">
                                        <h4>Contact Us</h4>
                                    </div>
                                    <div className="contact_info">
                                        <div className="single_info">
                                            <div className="icon">
                                                <i><FaPhoneAlt/></i>
                                            </div>
                                            <div className="info">
                                                <p><a href="tel:+919246147999">+84-915-207-185</a></p>
                                                {/* <p><a href="tel:+919246147999">+91 924-614-7999</a></p> */}
                                            </div>
                                        </div>
                                        <div className="single_info">
                                            <div className="icon">
                                                <i><FaEnvelope/></i>
                                            </div>
                                            <div className="info">
                                                <p><a href="mailto:info@deneb.com">services@adapedu.com</a></p>
                                                <p><a href="mailto:services@deneb.com">nha@gmail.com</a></p>
                                            </div>
                                        </div>
                                        <div className="single_info">
                                            <div className="icon">
                                                <i><FaMapMarkerAlt/></i>
                                            </div>
                                            <div className="info">
                                                <p>1, VoVanNgan Street, ThuDuc,<span>HoChiMinh.</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright_text">
                                    <p>Copyright &copy; 2020 <span>T3N Team</span>. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
		</footer>
     </>
            
    )
}
