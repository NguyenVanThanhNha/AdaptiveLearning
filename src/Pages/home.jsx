import React from 'react';
import Layout from "../Layouts";
import HeroArea from "../Components/hero_area";
import Services from "../Components/services";
import About from "../Components/about";
import ProjectsInfo from "../Components/projects_info";
import Learning from "../Components/learning";
import Pricing from "../Components/pricing";
import Testimonials from "../Components/testimonials";
import Blogs from "../Components/blogs";
import Contact from "../Components/contact";

export default function Home() {
    return (
      <Layout>
            <HeroArea/>
            <Services/>
            <About/>
            <ProjectsInfo/>
            <Learning/>
            {/* <Pricing/> */}
            {/* <Testimonials/> */}
            <Blogs/>
            {/* <Contact/> */}
      </Layout>
    )
}
