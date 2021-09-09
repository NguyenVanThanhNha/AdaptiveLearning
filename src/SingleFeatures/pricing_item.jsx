import React from 'react'


export default function PricingItem(props) {

    const { title, price, plan_type, url, icon } = props;

    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="pircing_box wow fadeInUp" data-wow-delay=".3s">
                <div className="icon">
                    <img src={icon} className="img-fluid" alt="icon" />
                </div>
                <div className="title">
                <h3>{title}</h3>
                </div>
                <div className="list">
                  {props.children}
                </div>
                <div className="price">
                    <h2>
                        $ {price} <span className="text-capitalize">/ {plan_type}</span>
                    </h2>
                </div>
                <div className="button_box">
                    <a href={url} className="deneb_btn"> Start now</a>
                </div>
            </div>
        </div>
    )
}
