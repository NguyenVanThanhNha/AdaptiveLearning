import React from 'react';
import Layout from "../Layouts";
import PageHeader from "../Components/page_header";
import Pricing from "../Components/pricing";
import Testimonials from "../Components/testimonials";
import Contact from "../Components/contact";
import ServicesTabs from "../Components/services/services_tabs";
import WorkFlow from "../Components/services/work_flow";

export default function Services() {
    return (
      <Layout>
            <PageHeader title="Our Services"/>
            <ServicesTabs/>
            <WorkFlow/>
            {/* <Pricing/> */}
            <Testimonials/>
            {/* <Contact/> */}
      </Layout>
    )
}
