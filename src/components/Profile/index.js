import React, { useState } from 'react'
import ProfileNav from '../ProfileNav'
import { 
  HorizontalLine, LeftSide, 
  NavWrap, Overview, ProfileContainer, RightSide, Update } from './ProfileElements'
import ProfileInfo from '../ProfileInfo' 
import ProfileOverview from '../ProfileOverview'
import ProfileUpdate from '../ProfileUpdate'
import { IconContext } from 'react-icons/lib'

const Profile = () => {

  const [selectedPage, setPage] = useState('profile');
  const [selectedProfile, setProfile] = useState('update');

  function togglePage(id) {
      setPage(id)
  }
  
  return (
    <>
    <IconContext.Provider value={{color: `var(--grey)`}}>
      <ProfileNav selectedPage={selectedPage} togglePage={togglePage} />
      <ProfileContainer selectedPage={selectedPage === 'profile'}>
        <LeftSide>
          <ProfileInfo />
        </LeftSide>

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
    </IconContext.Provider>
    </>
  )
}

export default Profile