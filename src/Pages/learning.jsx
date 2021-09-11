import React from 'react';
import PageHeader from "../Components/page_header";
import LearningTab from "../Components/learning/learning_tab";
import Testimonials from "../Components/testimonials";
import Contact from "../Components/contact";
import Layout from "../Layouts";


export default function Learning() {
    return (
        <Layout>
            <PageHeader title="Learning" />
            <LearningTab/>
            <Testimonials/>
            <Contact/>
        </Layout>
    )
}
