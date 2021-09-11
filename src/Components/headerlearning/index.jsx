import React, {useState} from 'react';
import "./headerlearning.scss";
import siteLogo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaTimes} from "react-icons/fa";
export default function Index() {

    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

    const controlMobileMenu = (e) =>{
        setToggleMobileMenu(!toggleMobileMenu);
    }
    const closeMenu = (e) =>{
        setToggleMobileMenu(false);
    }
    return (
        <>
        <header className="header_area header_v1 transparent_header">
            <div className="container">
                <div className="site_menu">
                    <div className="row align-items-center">
                        <div className="col-lg-1">
                            <div className="brand">
                                <Link className="logo" to="/"><img src={siteLogo} className="img-fluid" alt="logo" /></Link>
                            </div>
                            </div>
                            <div className="col-lg-10">
                                <div className="primary_menu" id="menu">
                                    <nav className="main_menu">
                                        <ul>
                                            <li className="menu-item"><NavLink exact={true} activeClassName="active_link" to="/">HOME</NavLink></li>
                                            {/* <li className="menu-item"><NavLink exact={true} activeClassName="active_link" to="/dashboard/lessons">LESSONS</NavLink></li> */}
                                            <li className="menu-item"><NavLink exact={true} activeClassName="active_link" to="/dashboard/courses">COURSES</NavLink></li>
                                            <li className="menu-item"><NavLink exact={true} activeClassName="active_link" to="/dashboard/classes">CLASSES</NavLink></li>
                                            <li className="menu-item"><NavLink exact={true} activeClassName="active_link" to="/forum">FORUM</NavLink></li>
                                            <li className="menu-item"><a href="#">MY ACCOUNT</a>
                                                <ul className="sub-menu">
                                                    <li className="menu-item"><NavLink exact to="/blog">Information</NavLink></li>
                                                    <li className="menu-item"><Link to="/blog_details/1">Change Password</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item"><Link className="deneb_btn" to="/">LOG OUT</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile_wrapper">
                        <div className="mobile_header">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="brand_logo">
                                        <Link to="/"><img src={siteLogo} className="img-fluid" alt="site logo"/></Link>
                                    </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="menu_button">
                                        <div className={toggleMobileMenu ? "menu_icon active" : "menu_icon"} onClick={controlMobileMenu}>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           <div className={toggleMobileMenu ? "sidenav_menu active" : "sidenav_menu"}>
                                <div className="close_icon" onClick={closeMenu}>
                                   <a href="#" className="close_btn"><i><FaTimes/></i></a>
                                </div>
                                <ul className="sidebar-menu">
                                <li className="menu-item"><NavLink exact={true} activeClassName="active_link" to="/">HOME</NavLink></li>
                                {/* <li className="menu-item"><NavLink exact={true} activeClassName="active_link" to="/dashboard/lessons">LESSONS</NavLink></li> */}
                                <li className="menu-item"><NavLink exact={true} activeClassName="active_link" to="/dashboard/courses">COURSES</NavLink></li>
                                <li className="menu-item"><NavLink exact={true} activeClassName="active_link" to="/dashboard/classes">CLASSES</NavLink></li>
                                <li className="menu-item"><NavLink exact to="/blog">INFORMATION</NavLink></li>
                                {/* <li className="menu-item"><Link to="/blog_details/1"></Link>MY ACCOUNT</li> */}
                                <li className="menu-item"><NavLink exact={true} activeClassName="active_link" to="/account">MY ACCOUNT</NavLink></li>
                                <li className="menu-item"><Link className="deneb_btn" to="/">LOG OUT</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
        </>
    )
}
