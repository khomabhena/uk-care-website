import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { CompanyContext } from '../Context/CompanyContext';
import EmployerJobs from '../EmployerJobs';
import { FileChooser, Input, InputContainer, InputLabel, InputWrap, TextArea, UpdateForm } from '../EmployerProfileUpdate/EmployerProfileUpdateElements';
import JobDetails from '../JobDetails';
import Jobs from '../Jobs';
import { JobsContainer } from '../Profile/ProfileElements';
import {  SubTitle } from '../ProfileInfo/ProfileInfoElements'
import { Title, Text, EducationContainer, EducationDetailsWrap, EducationWrap, Language, Letter, LetterWrap, OverviewWrap, Skill, SkillsContainer, SkillsWrap, JobTitle, JobContainer, HorizontalWrap, NewJob, CreateJobContainer, UpdateButton } from './EmployerProfileOverviewElements'


const EmployerProfileOverview = ({ selectedProfile }) => {

    const about = "Provider of hospice services. The company's services include nursing visits, medical professional assistance, pain and symptom management, medications, equipment and supplies, spiritual counseling and bereavement follow up, and home health aide services, enabling chronically ill patients to get over their emotional and spiritual needs.\n\n" +
                  "Industries in the Nursing and Residential Care Facilities subsector provide residential care combined with either nursing, supervisory, or other types of care as required by the residents. In this subsector, the facilities are a significant part of the production process, and the care provided is a mix of health and social services with the health services being largely some level of nursing services.";

    const { companyData } = useContext(CompanyContext);
    const { userUid } = useContext(AuthContext)

    const [createJob, setCreateJob] = useState(false);
    const [buttonName, setButtonName] = useState('Create new Job');
    const [title, setTitle] = useState('Current Openings');
    const [jobPost, setJobPost] = useState({
      title: '',
      salary: '',
      location: '',
      type: '',
      description: '',
      company: ''
    })

    const handleCreateJob = () => {
        setCreateJob(!createJob)
        createJob ? setButtonName('Create new Job') : setButtonName('Back')
        createJob ? setTitle('Current Openings') : setTitle('Create new Job')
    }

    const uploadJob = (userUid, companyName) => {
        console.log(userUid)
        console.log(companyName)
    } 

    const handleJobPost = (e) => {
      e.preventDefault()
      setJobPost(prev => ({...prev, company: companyData.companyName}))
      // console.log(jobPost)
      uploadJob(userUid, companyData.companyName)
    }

  return (
    <OverviewWrap selectedProfile={selectedProfile}>
          <Title>About Company</Title>
          <Text className='overview-about'></Text>

          <HorizontalWrap>
            <JobTitle>{title}</JobTitle>
            <NewJob onClick={handleCreateJob}>{buttonName}</NewJob>
          </HorizontalWrap>

          {/* Current Openings */}
          <JobContainer createJob={createJob}>
            <EmployerJobs />
          </JobContainer>

          {/* Creating New Job */}
          <CreateJobContainer createJob={createJob}>
            <UpdateForm onSubmit={handleJobPost}>
              <InputContainer>
                  <InputWrap>
                      <InputLabel>Job Title</InputLabel>
                      <Input placeholder="What's the job title"  onChange={(e) => setJobPost(prev => ({...prev, title: e.target.value}))}/>
                  </InputWrap>
                  <InputWrap>
                      <InputLabel>Expected Salary per Month</InputLabel>
                      <Input placeholder='Enter the expected salary per month' onChange={(e) => setJobPost(prev => ({...prev, salary: e.target.value}))} />
                  </InputWrap>
              </InputContainer>
              <InputContainer>
                  <InputWrap>
                      <InputLabel>Location</InputLabel>
                      <Input placeholder='Where is the job located?' onChange={(e) => setJobPost(prev => ({...prev, location: e.target.value}))} />
                  </InputWrap>
                  <InputWrap>
                      <InputLabel>Job Type</InputLabel>
                      <Input placeholder='Full Time or Part Time' onChange={(e) => setJobPost(prev => ({...prev, type: e.target.value}))} />
                  </InputWrap>
              </InputContainer>
              
              <InputLabel>Job Description</InputLabel>
              <TextArea placeholder='Write a short paragraph describing the job' rows='6' onChange={(e) => setJobPost(prev => ({...prev, description: e.target.value}))} />
              <UpdateButton type='submit'>Create new Job</UpdateButton>
            </UpdateForm>
          </CreateJobContainer>
          
    </OverviewWrap>
  )
}

export default EmployerProfileOverview