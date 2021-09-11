import React from 'react';
import Layout from "../Layouts";
import Testimonials from "../Components/testimonials"
import Blogs from "../Components/blogs";
import Contact from "../Components/contact";
import PageHeader from "../Components//page_header";
import HireUs from "../Components/about/hire_us";
import Skills from "../Components/about/skills";
import WorkExperience from "../Components//about/work_experience";

export default function About() {
    return (
       <Layout>
        <PageHeader title="About Us" />
        <HireUs/>
        <Skills/>
        {/* <WorkExperience/> */}
        {/* <Testimonials/> */}
        {/* <Blogs/> */}
        {/* <Contact/> */}
       </Layout>
    )
}
