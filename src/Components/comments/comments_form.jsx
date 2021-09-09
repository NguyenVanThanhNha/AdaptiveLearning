import React from 'react';
import { Field, Form, Formik, FormikProps } from 'formik';

export default function CommentsForm() {
    return (
        <div className="comment_form_wrap">
            <h3>Leave a Reply</h3>
            <div className="comment_form">
                <Formik
                    initialValues={{ full_name: '', user_email: '', website_url: '', user_message: '' }}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            console.log(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                        }, 1000);
                    }}
                >
                    {() => (
                        <Form>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form_group">
                                    <Field 
                                     type="text" 
                                     name="full_name" 
                                     className="form_control"
                                     placeholder="Full Name"
                                     required />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form_group">
                                    <Field
                                     type="email"
                                     name="user_email"
                                     className="form_control"
                                     placeholder="Your Email"
                                     required
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form_group">
                                    <Field
                                      type="text"
                                      name="website_url"
                                      className="form_control"
                                      placeholder="website URL"
                                      required
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form_group">
                                    <Field
                                     as="textarea"
                                     name="user_message"
                                     placeholder="Your Message"
                                     className="form_control"
                                     required
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="button_box">
                                    <button className="deneb_btn" type="submit">Submit Now</button>
                                </div>
                            </div>
                        </div>
                     </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
