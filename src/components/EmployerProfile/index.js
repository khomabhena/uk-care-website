import React, { useState } from 'react'
import { 
  HorizontalLine, JobsContainer, LeftSide, 
  NavWrap, Overview, ProfileContainer, RightSide, Update } from './EmployerProfileElements' 
import EmployerProfileOverview from '../EmployerProfileOverview'
import EmployerProfileUpdate from '../EmployerProfileUpdate'
import { IconContext } from 'react-icons/lib'
import Jobs from '../Jobs'
import JobDetails from '../JobDetails'
import EmployerProfileInfo from '../EmployerProfileInfo'
import EmployerProfileNav from '../EmployerProfileNav'

const EmployerProfile = () => {

    const [selectedPage, setPage] = useState('profile');
    const [selectedProfile, setProfile] = useState('overview');
    const [selectedJobPage, setJobPage] = useState('jobs');

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
        <Jobs selectedJobPage={selectedJobPage === 'jobs'} toggleJobPage={toggleJobPage} />
        <Jobs selectedJobPage={selectedJobPage === 'jobs'} toggleJobPage={toggleJobPage} />
        <Jobs selectedJobPage={selectedJobPage === 'jobs'} toggleJobPage={toggleJobPage} />
        <Jobs selectedJobPage={selectedJobPage === 'jobs'} toggleJobPage={toggleJobPage} />
        <JobDetails selectedJobPage={selectedJobPage === 'jobDetails'} toggleJobPage={toggleJobPage} />
      </JobsContainer>

    </IconContext.Provider>
    </>
  )
}

export default EmployerProfile