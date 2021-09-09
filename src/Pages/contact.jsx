import React from 'react';
import Layout from "../Layouts";
import PageHeader from "../Components/page_header";
import ContactForm from "../Components/contact/contact_form";
import MapLocation from "../Components/contact/map_location";
export default function Contact() {
    return (
       <Layout>
          <PageHeader title="Contact Us"/>
            <ContactForm/>
            <MapLocation/>
       </Layout>
    )
}
