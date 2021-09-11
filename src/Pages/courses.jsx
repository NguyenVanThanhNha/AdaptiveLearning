import React from 'react';
import PageHeader from "../Components/page_header";
import LearningTab from "../Components/learning/learning_tab";
import Layoutdashboard from "../Layoutsdashboard"

export default function Index() {
    return (
        <Layoutdashboard>
            <PageHeader title="Course" />
            <LearningTab/>
        </Layoutdashboard>
    )
}
