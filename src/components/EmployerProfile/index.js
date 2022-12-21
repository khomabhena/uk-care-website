import React, { useEffect, useState } from 'react'
import { 
  HorizontalLine, JobsWrapper, JobsCreate, LeftSide, 
  NavWrap, Overview, ProfileContainer, RightSide, Update, JobsContainer, ApplicationsContainer, Wrapper, TitleApplications } from './EmployerProfileElements' 
import EmployerProfileOverview from '../EmployerProfileOverview'
import EmployerProfileUpdate from '../EmployerProfileUpdate'
import { IconContext } from 'react-icons/lib'
import JobDetails from '../JobDetails'
import EmployerProfileInfo from '../EmployerProfileInfo'
import EmployerProfileNav from '../EmployerProfileNav'
import EmployerJobs from '../EmployerJobs'
import { EmployerControls, FirebaseStorage } from '../../controls'
import { JobContainer } from '../EmployerJobs/EmployerJobsElements'

const EmployerProfile = () => {

    const [selectedPage, setPage] = useState('profile');
    const [selectedProfile, setProfile] = useState('overview');
    const [selectedJobPage, setJobPage] = useState('jobs');
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const employerControls = EmployerControls()
        employerControls.Nav().setNavName()
        employerControls.Info().setInfoDetails()
        employerControls.Update().setInitialValues()

        const getData = async () => {
          const res = await FirebaseStorage().getData('jobs', localStorage.getItem('userEmail'))
          
          setJobs(res.jobs)
      }

      getData()
    }, [])

    
    function togglePage(id) {
        setPage(id)
    }

    function toggleJobPage(id) {
        setJobPage(id)
    }

  return (
    <>
    <IconContext.Provider value={{color: `var(--grey)`}}>
      <EmployerProfileNav selectedPage={selectedPage} togglePage={togglePage} />

      {/* Profile Container */}
      <ProfileContainer selectedPage={selectedPage === 'profile'}>
        <LeftSide><EmployerProfileInfo /></LeftSide>
        <RightSide>
          <NavWrap>
            <Overview onClick={() => setProfile('overview')} selectedProfile={selectedProfile}>Overview</Overview>
            <Update onClick={() => setProfile('update')} selectedProfile={selectedProfile}>Update</Update>
          </NavWrap>
          <HorizontalLine />
          <EmployerProfileOverview selectedProfile={selectedProfile} />
          <EmployerProfileUpdate selectedProfile={selectedProfile} />
        </RightSide>
      </ProfileContainer>

      {/* Jobs Container */}
      <JobsWrapper selectedJobPage={selectedJobPage} selectedPage={selectedPage === 'jobs'}>
        <Wrapper>
          <TitleApplications>Job Posts</TitleApplications>
          <JobsContainer>
          {
              jobs?.map((item, index) => {
                return (
                  <EmployerJobs key={index} jobs={item} />
                )
              })
            }
          </JobsContainer>
        </Wrapper>
        <Wrapper>
          <TitleApplications>Applications</TitleApplications>
          <ApplicationsContainer>
            <EmployerJobs shortWidth='true' />
          </ApplicationsContainer>
        </Wrapper>
        <JobDetails selectedJobPage={selectedJobPage === 'jobDetails'} toggleJobPage={toggleJobPage} />
      </JobsWrapper>

      <JobsCreate selectedPage={selectedPage === 'createJob'}>
        Create Job
      </JobsCreate>

    </IconContext.Provider>
    </>
  )
}

export default EmployerProfile