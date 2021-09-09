import React from 'react';
import "./section_title.scss";

export default function Index(props) {
    const { title, description } = props;
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="section_title text-center">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
