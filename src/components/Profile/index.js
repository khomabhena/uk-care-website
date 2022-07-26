import React, { useContext, useEffect, useState } from 'react'
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
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../Firebase'
import { AuthContext } from '../Context/AuthContext'
import { UserContext } from '../Context/UserContext'

const Profile = () => {

  const { userUid } = useContext(AuthContext)
  const [selectedPage, setPage] = useState('profile');
  const [selectedProfile, setProfile] = useState('overview');
  const [selectedJobPage, setJobPage] = useState('jobs');
  const { userData, setUserData } = useContext(UserContext)

  

  useEffect(() => {
      loadData()
  }, [])

  const loadData = async() => {
    const docRef = doc(db, "users", userUid);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const res = docSnap.data()
      setUserData(prev => ({...prev, ...res}))
    } else {
        console.log("No such document!");
    }
  }

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