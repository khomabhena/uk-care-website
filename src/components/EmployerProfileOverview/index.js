import React, { useState } from 'react'
import { useEffect } from 'react';
import { EmployerControls, FirebaseStorage } from '../../controls';
import EmployerJobs from '../EmployerJobs';
import { Input, InputContainer, InputLabel, InputWrap, Option, Select, TextArea, UpdateForm } from '../EmployerProfileUpdate/EmployerProfileUpdateElements';
import { Title, Text, OverviewWrap, JobTitle, JobContainer, HorizontalWrap, NewJob, CreateJobContainer, UpdateButton } from './EmployerProfileOverviewElements'


const EmployerProfileOverview = ({ selectedProfile }) => {

    // const about = "Provider of hospice services. The company's services include nursing visits, medical professional assistance, pain and symptom management, medications, equipment and supplies, spiritual counseling and bereavement follow up, and home health aide services, enabling chronically ill patients to get over their emotional and spiritual needs.\n\n" +
    //               "Industries in the Nursing and Residential Care Facilities sub-sector provide residential care combined with either nursing, supervisory, or other types of care as required by the residents. In this subsector, the facilities are a significant part of the production process, and the care provided is a mix of health and social services with the health services being largely some level of nursing services.";

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await FirebaseStorage().getData('jobs', localStorage.getItem('userEmail'))
            
            setJobs(res.jobs)
        }

        getData()
    }, [])

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
      EmployerControls().Job().uploadJob()
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
            {
              jobs?.map((item, index) => {
                return (
                  <EmployerJobs key={index} jobs={item} />
                )
              })
            }
          </JobContainer>

          {/* Creating New Job */}
          <CreateJobContainer createJob={createJob}>
            <UpdateForm onSubmit={handleJobPost}>
              <InputContainer>
                  <InputWrap>
                      <InputLabel>Job Title</InputLabel>
                      <Input className='title' placeholder="What's the job title" />
                  </InputWrap>
                  <InputWrap>
                      <InputLabel>Expected Salary per Month</InputLabel>
                      <Input className='salary' placeholder='Enter the expected salary per month' />
                  </InputWrap>
              </InputContainer>
              <InputContainer>
                  <InputWrap>
                      <InputLabel>Location</InputLabel>
                      <Input className='country' placeholder='Where is the job located?' />
                  </InputWrap>
                  <InputWrap>
                      <InputLabel>Job Type</InputLabel>
                      {/* <Input className='profession' placeholder='Nurse, Nurse Aid, Adult Care' /> */}
                      <Select className='job-profession' name='job-profession'>
                        <Option value='None' disabled defaultValue>Select job type</Option>
                        <Option value='Nurse'>Nurse</Option>
                        <Option value='Nurse Aid'>Nurse Aid</Option>
                        <Option value='Adult Care'>Adult Care</Option>
                        <Option value='Hospice Care'>Hospice Care</Option>
                    </Select>
                  </InputWrap>
              </InputContainer>
              
              <InputLabel>Job Description</InputLabel>
              <TextArea className='description' placeholder='Write a short paragraph describing the job' rows='6' />
              <UpdateButton type='submit'>Create new Job</UpdateButton>
            </UpdateForm>
          </CreateJobContainer>
          
    </OverviewWrap>
  )
}

export default EmployerProfileOverview