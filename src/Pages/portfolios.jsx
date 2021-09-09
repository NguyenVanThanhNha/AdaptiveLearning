import React from 'react';
import PageHeader from "../Components/page_header";
import PortfoliosTab from "../Components/portfolios/portfolios_tab";
import Testimonials from "../Components/testimonials";
import Contact from "../Components/contact";
import Layout from "../Layouts";

export default function Portfolios() {
    return (
        <Layout>
            <PageHeader title="portfolios" />
            <PortfoliosTab/>
            <Testimonials/>
            <Contact/>
        </Layout>
    )
}
