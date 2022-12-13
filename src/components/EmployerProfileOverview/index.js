import React, { useState } from 'react'
import EmployerJobs from '../EmployerJobs';
import { Input, InputContainer, InputLabel, InputWrap, TextArea, UpdateForm } from '../EmployerProfileUpdate/EmployerProfileUpdateElements';
import { Title, Text, OverviewWrap, JobTitle, JobContainer, HorizontalWrap, NewJob, CreateJobContainer, UpdateButton } from './EmployerProfileOverviewElements'


const EmployerProfileOverview = ({ selectedProfile }) => {

    // const about = "Provider of hospice services. The company's services include nursing visits, medical professional assistance, pain and symptom management, medications, equipment and supplies, spiritual counseling and bereavement follow up, and home health aide services, enabling chronically ill patients to get over their emotional and spiritual needs.\n\n" +
    //               "Industries in the Nursing and Residential Care Facilities subsector provide residential care combined with either nursing, supervisory, or other types of care as required by the residents. In this subsector, the facilities are a significant part of the production process, and the care provided is a mix of health and social services with the health services being largely some level of nursing services.";


    const [createJob, setCreateJob] = useState(false);
    const [buttonName, setButtonName] = useState('Create new Job');
    const [title, setTitle] = useState('Current Openings');
  

    const handleCreateJob = () => {
        setCreateJob(!createJob)
        createJob ? setButtonName('Create new Job') : setButtonName('Back')
        createJob ? setTitle('Current Openings') : setTitle('Create new Job')
    }

   

    const handleJobPost = (e) => {
      e.preventDefault()
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
                      <Input placeholder="What's the job title" />
                  </InputWrap>
                  <InputWrap>
                      <InputLabel>Expected Salary per Month</InputLabel>
                      <Input placeholder='Enter the expected salary per month' />
                  </InputWrap>
              </InputContainer>
              <InputContainer>
                  <InputWrap>
                      <InputLabel>Location</InputLabel>
                      <Input placeholder='Where is the job located?' />
                  </InputWrap>
                  <InputWrap>
                      <InputLabel>Job Type</InputLabel>
                      <Input placeholder='Full Time or Part Time' />
                  </InputWrap>
              </InputContainer>
              
              <InputLabel>Job Description</InputLabel>
              <TextArea placeholder='Write a short paragraph describing the job' rows='6' />
              <UpdateButton type='submit'>Create new Job</UpdateButton>
            </UpdateForm>
          </CreateJobContainer>
          
    </OverviewWrap>
  )
}

export default EmployerProfileOverview