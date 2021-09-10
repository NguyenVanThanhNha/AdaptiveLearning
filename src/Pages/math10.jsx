import React from 'react';
import PageHeader from "../Components/page_header";
import Layoutdashboard from "../Layoutsdashboard"
import Leaningmath10 from '../Components/learningmath10'
import LearningTabMath10 from '../Components/learningmath10/LearningTabMath10'


export default function Index() {
    return (
        <Layoutdashboard>
            <PageHeader title="Math 10" />
            <LearningTabMath10/>
        </Layoutdashboard>
    )
}
