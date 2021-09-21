import React from 'react';
import Layout from "../Layouts";
import PageHeader from "../Components/page_header";
import Testimonials from "../Components/testimonials";
import ServicesTabs from "../Components/services/services_tabs";
import WorkFlow from "../Components/services/work_flow";

export default function Services() {
    return (
      <Layout>
            <PageHeader title="Our Services"/>
            <ServicesTabs/>
            <WorkFlow/>
            <Testimonials/>
      </Layout>
    )
}
