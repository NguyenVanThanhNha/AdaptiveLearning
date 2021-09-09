import React from 'react';
import shape_img_12 from "../../images/shape/shape_12.png";
import shape_img_13 from "../../images/shape/shape_13.png";
import people_img_01 from "../../images/1.png";
import people_img_02 from "../../images/2.png";
import people_img_03 from "../../images/3.png";
import people_img_04 from "../../images/4.png";
import people_img_05 from "../../images/5.png";
import people_img_06 from "../../images/6.png";
import people_img_07 from "../../images/7.png";
import testimonial_img_01 from "../../images/testimonial_1.jpg";
import testimonial_img_02 from "../../images/testimonial_2.jpg";
import testimonial_img_03 from "../../images/testimonial_3.jpg";
import "slick-carousel/slick/slick.css";
import "./testimonials.scss";
import SectionTitle from "../section_title";
import TestimonialItem from "../../SingleFeatures/testimonial_item";
import Slider from "react-slick";

export default function Index() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className="deneb_testimonial testimonial_v1">
            <div className="shape_v5">
                <img src={shape_img_12} className="shape_12" alt="shape" />
                <img src={shape_img_13} className="shape_13" alt="shape" />
            </div>
            <div className="container">
                <SectionTitle
                    title="What People Say"
                    description="When unknow printer took a gallery of type and scramblted it to make a type specimen book"
                />
                <div className="row1">
                    <div className="single_img">
                        <img src={people_img_01} className="img-fluid" alt="people" />
                    </div>
                    <div className="single_img sm_img">
                        <img src={people_img_02} className="img-fluid" alt="people" />
                    </div>
                    <div className="single_img sm_img">
                        <img src={people_img_03} className="img-fluid" alt="prople" />
                    </div>
                </div>
                <div className="row2">
                    <div className="single_img">
                        <img src={people_img_04} className="img-fluid" alt="prople" />
                    </div>
                    <div className="single_img sm_img">
                        <img src={people_img_05} className="img-fluid" alt="prople" />
                    </div>
                    <div className="single_img sm_img">
                        <img src={people_img_06} className="img-fluid" alt="people" />
                    </div>
                    <div className="single_img">
                        <img src={people_img_07} className="img-fluid" alt="people" />
                    </div>
                </div>
                <div className="testimonial_slide carousel-style">
                    <Slider {...settings}> 
                        <TestimonialItem
                            img={testimonial_img_01}
                            name="John Doe"
                            designation="Freelancer UX Designer"
                            text="Donec condimentum vehicula iaculis. Maecenas in aliquet neque.
                                Suspendisse viverra, ante eget pellentesque pulvinar, nunc nisi
                                molestie ligula, vitae convallis orci justo vitae sem. Integer vitae
                                imperdiet augue, sed accumsan diam. Etiam non quam commodo dolor
                                convallis cursus. Duis tempus dolor eget gravida fringilla. In
                                ultricies velit eget sem tempus egestas"

                        />
                        <TestimonialItem
                            img={testimonial_img_02}
                            name="Jake Johnson"
                            designation="Web Developer"
                            text="Donec condimentum vehicula iaculis. Maecenas in aliquet neque.
                                Suspendisse viverra, ante eget pellentesque pulvinar, nunc nisi
                                molestie ligula, vitae convallis orci justo vitae sem. Integer vitae
                                imperdiet augue, sed accumsan diam. Etiam non quam commodo dolor
                                convallis cursus. Duis tempus dolor eget gravida fringilla. In
                                ultricies velit eget sem tempus egestas"

                        />
                        <TestimonialItem
                            img={testimonial_img_03}
                            name="Celesto Anderson"
                            designation="Graphic Designer"
                            text="Donec condimentum vehicula iaculis. Maecenas in aliquet neque.
                                Suspendisse viverra, ante eget pellentesque pulvinar, nunc nisi
                                molestie ligula, vitae convallis orci justo vitae sem. Integer vitae
                                imperdiet augue, sed accumsan diam. Etiam non quam commodo dolor
                                convallis cursus. Duis tempus dolor eget gravida fringilla. In
                                ultricies velit eget sem tempus egestas"

                        />
                    </Slider>
                </div>
            </div>
        </section>

    )
}
