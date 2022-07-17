import React from 'react'
import ProfileNav from '../ProfileNav'
import { 
  HorizontalLine, LeftSide, 
  NavWrap, Overview, ProfileContainer, RightSide, Update } from './ProfileElements'
import ProfileInfo from '../ProfileInfo' 
import ProfileOverview from '../ProfileOverview'
import ProfileUpdate from '../ProfileUpdate'
import { IconContext } from 'react-icons/lib'
const Profile = () => {
  return (
    <>
    <IconContext.Provider value={{color: `var(--grey)`}}>
      <ProfileNav />
      <ProfileContainer>
        <LeftSide>
          <ProfileInfo />
        </LeftSide>

        <RightSide>
          <NavWrap>
            <Overview>Overview</Overview>
            <Update>Update</Update>
          </NavWrap>
          <HorizontalLine />
          {/* <ProfileOverview /> */}
          <ProfileUpdate />
        </RightSide>

      </ProfileContainer>
    </IconContext.Provider>
    </>
  )
}

export default Profile