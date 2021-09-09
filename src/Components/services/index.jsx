import React from 'react';
import "./services.scss";
import ServiceItem from "../../SingleFeatures/service_item";
import SectionTitle from "../section_title";
import serviceIcon_01 from "../../images/icon_1.png";
import serviceIcon_02 from "../../images/icon_2.png";
import serviceIcon_03 from "../../images/icon_3.png";

export default function Index() {
    return (
        <section className="deneb_service service_v1">
            <div className="shape_v2">
                <img src="assets/images/shape/shape_7.png" className="shape_7" alt="" />
            </div>
            <div className="container">
                <SectionTitle
                    title="What is adaptive learning"
                    description="Adaptive learning — or adaptive teaching — is the delivery of 
                    custom learning experiences that address the unique needs of an individual 
                    through just-in-time feedback, pathways, and resources (rather than providing a one-size-fits-all learning experience)"
                />
                <div className="row">
                    <ServiceItem 
                      icon={serviceIcon_01}
                      title="Designed Adaptivity"
                      url="#"
                      description="A method of adaptivity in which an educator designs the expert teaching
                       sequence to guide their learners toward content mastery."
                    />
                    <ServiceItem
                        icon={serviceIcon_02}
                        title="Algorithmic Adaptivity"
                        url="#"
                        description="Based on those answers, the algorithm can select “the right item at the right time” for students as they learn."
                    />
                    <ServiceItem
                        icon={serviceIcon_03}
                        title="Study everywhere"
                        url="#"
                        description="We will develop version on mobile device for help you can learn everywhere and whenever."
                    />
                </div>
            </div>
        </section>                 
    )
}
