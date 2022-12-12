import React, { useEffect, useState } from 'react'
import ProfileNav from '../ProfileNav'
import { 
  HorizontalLine, JobsContainer, LeftSide, 
  NavWrap, Overview, ProfileContainer, RightSide, Update } from './ProfileElements'
import ProfileInfo from '../ProfileInfo' 
import ProfileOverview from '../ProfileOverview'
import ProfileUpdate from '../ProfileUpdate'
import { IconContext } from 'react-icons/lib'
import Jobs from '../Jobs'
import JobDetails from '../JobDetails'
import { ProfileControls } from '../../controls'

const Profile = () => {

  const [selectedPage, setPage] = useState('profile');
  const [selectedProfile, setProfile] = useState('overview');
  const [selectedJobPage, setJobPage] = useState('jobs');

  useEffect(() => {
    const profileControls = ProfileControls()
    
    profileControls.Nav().setNavName()
    profileControls.Info().setInfoDetails()
    profileControls.Overview().setIntro()
    profileControls.Update().setInitialValues()
  }, [])

  const togglePage = (id) => {
      setPage(id)
  }

  const toggleJobPage = (id) => {
      setJobPage(id)
  }
  
  return (
    <>
    <IconContext.Provider value={{color: `var(--grey)`}}>
      <ProfileNav selectedPage={selectedPage} togglePage={togglePage} />

      {/* Profile Container */}
      <ProfileContainer selectedPage={selectedPage === 'profile'}>
        <LeftSide><ProfileInfo /></LeftSide>
        <RightSide>
          <NavWrap>
            <Overview onClick={() => setProfile('overview')} selectedProfile={selectedProfile}>Overview</Overview>
            <Update onClick={() => setProfile('update')} selectedProfile={selectedProfile}>Update</Update>
          </NavWrap>
          <HorizontalLine />
          <ProfileOverview selectedProfile={selectedProfile} />
          <ProfileUpdate selectedProfile={selectedProfile} />
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

export default Profile