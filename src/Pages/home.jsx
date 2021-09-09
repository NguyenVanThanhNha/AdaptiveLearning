import React from 'react';
import Layout from "../Layouts";
import HeroArea from "../Components/hero_area";
import Services from "../Components/services";
import About from "../Components/about";
import ProjectsInfo from "../Components/projects_info";
import Portfolios from "../Components/portfolios";
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
            <Portfolios/>
            <Pricing/>
            <Testimonials/>
            <Blogs/>
            <Contact/>
      </Layout>
    )
}
