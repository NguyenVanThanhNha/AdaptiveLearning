import React from 'react';
import shapeImg from "../../images/shape/shape_11.png";
import icon_04 from "../../images/icon_4.png";
import SectionTitle from "../section_title";
import "./pricing.scss";
import PricingItem from "../../SingleFeatures/pricing_item";

export default function Index() {

    return (
        <section className="deneb_pricing pricing_v1">
            <div className="shape_v4">
                <img src={shapeImg} className="shape_11" alt="shape"/>
            </div>
            <div className="container">
                <SectionTitle
                    title="Afforable Pricing"
                    description="When unknow printer took a gallery of type and scramblted it to make a type specimen book"
                />
                <div className="row">
                    <PricingItem
                      title="Basic"
                      price="75"
                      plan_type="month"
                      url="#"
                      icon={icon_04}
                    >
                        <ul>
                            <li>Graphic Design</li>
                            <li>Web Design</li>
                            <li><del>UI/UX</del></li>
                            <li><del>HTML/CSS</del></li>
                            <li><del>SEO Marketing</del></li>
                            <li><del>Business Analysis</del></li>
                        </ul>
                    </PricingItem>
                    <PricingItem
                     title="Standard"
                      price="95"
                      plan_type="month"
                      url="#"
                      icon={icon_04}
                    >
                    <ul>
                        <li>Graphic Design</li>
                        <li>Web Design</li>
                        <li>UI/UX</li>
                        <li>HTML/CSS</li>
                        <li>SEO Marketing</li>
                        <li>Business Analysis</li>
                    </ul>
                    </PricingItem>
                    <PricingItem
                      title="premium"
                      price="99"
                      plan_type="month"
                      url="#"
                      icon={icon_04}
                    >
                    <ul>
                        <li>Graphic Design</li>
                        <li>Web Design</li>
                        <li>UI/UX</li>
                        <li>HTML/CSS</li>
                        <li>SEO Marketing</li>
                        <li>Business Analysis</li>
                    </ul>
                    </PricingItem>
                </div>
            </div>
        </section>

    )
}
