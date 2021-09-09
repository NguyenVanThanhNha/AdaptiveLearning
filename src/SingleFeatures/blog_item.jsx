import React from 'react';
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function blog_item(props) {
    const { title, url, description, date, img } = props;

    const scrollToTop = (e) => {
         window.scrollTo({
             top: 0
         });
    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="grid_item wow fadeInUp">
                { img ? 
                <div className="deneb_img">
                    <Link to={url} onClick={scrollToTop}><img src={img} className="img-fluid w-100" alt={title} /></Link>
                </div>
                : null }
                <div className="deneb_info">
                    <Link to={url} onClick={scrollToTop} className="date">{date}</Link>
                    <h3><Link to={url} onClick={scrollToTop}>{title}</Link></h3>
                    <p>{description}</p>
                    <Link className="link_btn mt-1" onClick={scrollToTop} to={url}>
                        <i><FaPlay /></i>  Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}
