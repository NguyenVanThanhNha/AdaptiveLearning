import React from 'react';
import pageHeaderImg from "../../images/breadcrumb_bg.jpg";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import "./page_header.scss";

export default function Index(props) {
    const { title } = props;
    return (
        <section className="deneb_breadcrumb bg_image" style={{ backgroundImage: `url(${pageHeaderImg})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb_content">
                            <h1>{title}</h1>
                            <ul>
                                <li><Link to="/">Home</Link> <i><FaAngleRight/></i></li>
                                <li>{title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
