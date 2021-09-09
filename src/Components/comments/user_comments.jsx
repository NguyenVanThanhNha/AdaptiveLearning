import React from 'react';
import authorThumb_01 from "../../images/thumb_1.jpg";
import { FaReply } from "react-icons/fa";

export default function UserComments() {
    return (
        <div className="comment_wrapper">
            <h3>Comments</h3>
            <div className="single_comment">
                <div className="thumb">
                    <img src={authorThumb_01} className="img-fluid" alt="author" />
                </div>
                <div className="info">
                    <h5>Celesto Anderson</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>
                    <a href="#"><i><FaReply /></i>reply</a>
                </div>
            </div>
            <div className="single_comment">
                <div className="thumb">
                    <img src={authorThumb_01} className="img-fluid" alt="author" />
                </div>
                <div className="info">
                    <h5>Jake Johnson</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>
                    <a href="#"><i><FaReply /></i>reply</a>
                </div>
            </div>
            <div className="single_comment">
                <div className="thumb">
                    <img src={authorThumb_01} className="img-fluid" alt="author"/>
                </div>
                <div className="info">
                    <h5>John Doe</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>
                    <a href="#"><i><FaReply /></i>reply</a>
                </div>
            </div>
        </div>
    )
}
