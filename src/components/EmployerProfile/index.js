import React, { useEffect, useState } from 'react'
import { 
  HorizontalLine, JobsContainer, JobsCreate, LeftSide, 
  NavWrap, Overview, ProfileContainer, RightSide, Update } from './EmployerProfileElements' 
import EmployerProfileOverview from '../EmployerProfileOverview'
import EmployerProfileUpdate from '../EmployerProfileUpdate'
import { IconContext } from 'react-icons/lib'
import JobDetails from '../JobDetails'
import EmployerProfileInfo from '../EmployerProfileInfo'
import EmployerProfileNav from '../EmployerProfileNav'
import EmployerJobs from '../EmployerJobs'
import { EmployerControls } from '../../controls'

const EmployerProfile = () => {

    const [selectedPage, setPage] = useState('profile');
    const [selectedProfile, setProfile] = useState('overview');
    const [selectedJobPage, setJobPage] = useState('jobs');

    useEffect(() => {
        const employerControls = EmployerControls()
        employerControls.Nav().setNavName()
        employerControls.Info().setInfoDetails()
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
      <JobsContainer selectedJobPage={selectedJobPage} selectedPage={selectedPage === 'jobs'}>
        <EmployerJobs shortWidth='true' />
        <EmployerJobs shortWidth='true' />
        <EmployerJobs shortWidth='true' />
        <JobDetails selectedJobPage={selectedJobPage === 'jobDetails'} toggleJobPage={toggleJobPage} />
      </JobsContainer>

      <JobsCreate selectedPage={selectedPage === 'createJob'}>
        Create Job
      </JobsCreate>

    </IconContext.Provider>
    </>
  )
}

export default EmployerProfile