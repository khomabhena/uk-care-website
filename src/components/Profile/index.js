import React, { useEffect, useState } from 'react'
import ProfileNav from '../ProfileNav'
import { 
  ApplicationsContainer,
  Experience,
  HorizontalLine, JobsContainer, JobsWrapper, LeftSide, 
  NavWrap, Overview, ProfileContainer, Qualifications, RightSide, TitleApplications, Update, Wrapper } from './ProfileElements'
import ProfileInfo from '../ProfileInfo' 
import ProfileOverview from '../ProfileOverview'
import ProfileUpdate from '../ProfileUpdate'
import { IconContext } from 'react-icons/lib'
import Jobs from '../Jobs'
import JobDetails from '../JobDetails'
import { ApplicantControls, FirebaseStorage } from '../../controls'
import ProfileQualifications from '../ProfileQualifications'
import ProfileExperience from '../ProfileExperience'
import JobApplications from '../JobApplications'

const Profile = () => {

  const [selectedPage, setPage] = useState('profile');
  const [selectedProfile, setProfile] = useState('overview');
  const [selectedJobPage, setJobPage] = useState('jobs');
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const applicantControls = ApplicantControls()
    
    applicantControls.Nav().setNavName()
    applicantControls.Info().setInfoDetails()
    applicantControls.Overview().setIntro()
    applicantControls.Update().setInitialValues()

    const getJobs = async () => {
      const jobsArray = []
      const res = await FirebaseStorage().getAllData('jobs')
      
      res.forEach(item => {
        let newObject = {}
        item.data.jobs.forEach(obj => {
          newObject = {...obj, id: item.id}
          jobsArray.push(newObject)
        })
      })

      setJobs(jobsArray)
      // console.log(jobs)
    }

    getJobs()
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
            <Qualifications onClick={() => setProfile('qualifications')} selectedProfile={selectedProfile}>Qualifications</Qualifications>
            <Experience onClick={() => setProfile('experience')} selectedProfile={selectedProfile}>Experience</Experience>
          </NavWrap>
          <HorizontalLine />
          <ProfileOverview selectedProfile={selectedProfile} />
          <ProfileUpdate selectedProfile={selectedProfile} />
          <ProfileQualifications selectedProfile={selectedProfile} />
          <ProfileExperience selectedProfile={selectedProfile} />

        </RightSide>
      </ProfileContainer>

      {/* Jobs Container */}
      <JobsWrapper selectedJobPage={selectedJobPage} selectedPage={selectedPage === 'jobs'}>
        <Wrapper>
            <TitleApplications>Applications</TitleApplications>
            <ApplicationsContainer>
              <JobApplications selectedJobPage={selectedJobPage === 'jobs'} toggleJobPage={toggleJobPage} />
            </ApplicationsContainer>
        </Wrapper>
        <Wrapper>
            <TitleApplications>Your Jobs</TitleApplications>
            <JobsContainer>
              {
                jobs?.map((item, index) => {
                  return (
                    <Jobs jobs={item} key={index} selectedJobPage={selectedJobPage === 'jobs'} toggleJobPage={toggleJobPage} />
                  )
                })
              }
              {/* <Jobs selectedJobPage={selectedJobPage === 'jobs'} toggleJobPage={toggleJobPage} /> */}
            </JobsContainer>
        </Wrapper>
        {/* <Jobs selectedJobPage={selectedJobPage === 'jobs'} toggleJobPage={toggleJobPage} />
        <JobDetails selectedJobPage={selectedJobPage === 'jobDetails'} toggleJobPage={toggleJobPage} /> */}
      </JobsWrapper>

    </IconContext.Provider>
    </>
  )
}

export default Profile