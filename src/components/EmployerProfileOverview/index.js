import React from 'react'
import EmployerJobs from '../EmployerJobs';
import JobDetails from '../JobDetails';
import Jobs from '../Jobs';
import { JobsContainer } from '../Profile/ProfileElements';
import {  SubTitle } from '../ProfileInfo/ProfileInfoElements'
import { Title, Text, EducationContainer, EducationDetailsWrap, EducationWrap, Language, Letter, LetterWrap, OverviewWrap, Skill, SkillsContainer, SkillsWrap, JobTitle, JobContainer, HorizontalWrap, NewJob } from './EmployerProfileOverviewElements'


const EmployerProfileOverview = ({ selectedProfile }) => {

    const about = "Provider of hospice services. The company's services include nursing visits, medical professional assistance, pain and symptom management, medications, equipment and supplies, spiritual counseling and bereavement follow up, and home health aide services, enabling chronically ill patients to get over their emotional and spiritual needs.\n\n" +
                  "Industries in the Nursing and Residential Care Facilities subsector provide residential care combined with either nursing, supervisory, or other types of care as required by the residents. In this subsector, the facilities are a significant part of the production process, and the care provided is a mix of health and social services with the health services being largely some level of nursing services.";
  
    const desc = "There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.";


  return (
    <OverviewWrap selectedProfile={selectedProfile}>
          <Title>About Company</Title>
          <Text>{about}</Text>

          <HorizontalWrap>
            <JobTitle>Current Openings</JobTitle>
            <NewJob>Create new Job</NewJob>
          </HorizontalWrap>
          <JobContainer>
            <EmployerJobs />
          </JobContainer>
          
    </OverviewWrap>
  )
}

export default EmployerProfileOverview