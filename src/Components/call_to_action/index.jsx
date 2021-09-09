import React from 'react';
import "./call_to_action.scss";
import { Link } from "react-router-dom";
export default function Index() {

    const scrollPageTop = (e) =>{
        window.scrollTo({top:400, behavior: "smooth"});
    }
    return (
        <section className="deneb_cta">
            <div className="container">
                <div className="cta_wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="cta_content">
                                <h3>Are you satisfied with the website ?</h3>
                                <p>Have a nice day, my friend!.</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="button_box">
                                <Link className="deneb_btn" onClick={scrollPageTop} to="/contact">Feed back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
