import React from 'react';
import contactImg from "../../images/contact.png";
import { Field, Form, Formik, FormikProps } from 'formik';

import "./contact.scss";
export default function Index() {
    return (
        <section className="deneb_contact contact_v1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="deneb_img_box">
                            <img src={contactImg} className="img-fluid" alt="contact" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section_title">
                            <h2>Get In Touch With Us</h2>
                            <p>
                                When unknow printer took a gallery of type and scramblted it to make
                                a type specimen book
                            </p>
                        </div>
                        <div className="contact_form">
                            <Formik
                                initialValues={{ 
                                  first_name: '', 
                                  last_name: '', 
                                  email_address: '', 
                                  phone_number: '',
                                  user_message: ''
                                 }}
                                onSubmit={(values, actions) => {
                                    setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2));
                                        actions.setSubmitting(false);
                                    }, 1000);
                                }}
                            >
                                {() => (
                                    <Form>
                                       <div className="row">
                                           <div className="col-lg-6">
                                               <div className="form_group">
                                                   <Field
                                                     type="text"
                                                     name="first_name"
                                                     className="form_control"
                                                     placeholder="First Name"
                                                     required
                                                   />
                                               </div>
                                           </div>
                                           <div className="col-lg-6">
                                               <div className="form_group">
                                                   <Field
                                                     type="text"
                                                     name="last_name"
                                                     className="form_control"
                                                     placeholder="Last Name"
                                                     required
                                                   />
                                               </div>
                                           </div>
                                           <div className="col-lg-6">
                                               <div className="form_group">
                                                   <Field
                                                     type="email"
                                                     name="email_address"
                                                     className="form_control"
                                                     placeholder="Email Address"
                                                     required
                                                   />
                                               </div>
                                           </div>
                                           <div className="col-lg-6">
                                               <div className="form_group">
                                                   <Field
                                                     type="number"
                                                     name="phone_number"
                                                     className="form_control"
                                                     placeholder="Phone No"
                                                     required
                                                   />
                                               </div>
                                           </div>
                                           <div className="col-lg-12">
                                               <div className="form_group">
                                                   <Field
                                                     as="textarea"
                                                     name="user_message"
                                                     className="form_control"
                                                     placeholder="Message"
                                                     required
                                                   />
                                               </div>
                                           </div>
                                            <div className="col-lg-12">
                                                <div className="button_box">
                                                    <button className="deneb_btn">Submit Now</button>
                                                </div>
                                            </div>
                                       </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
