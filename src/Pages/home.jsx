import React from 'react';
import Layout from "../Layouts";
import HeroArea from "../Components/hero_area";
import Services from "../Components/services";
import About from "../Components/about";
import ProjectsInfo from "../Components/projects_info";
import Learning from "../Components/learning";
import Blogs from "../Components/blogs";

import Amplify from '@aws-amplify/core'
import { Auth } from '@aws-amplify/auth'
import awsmobile from '../aws-exports';

Amplify.configure(awsmobile)
Auth.configure(awsmobile)

export default function Home() {
    return (
      <Layout>
            <HeroArea/>
            <Services/>
            <About/>
            <ProjectsInfo/>
            <Learning/>
            <Blogs/>
      </Layout>
    )
}
