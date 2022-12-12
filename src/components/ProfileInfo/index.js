import React, { useContext } from 'react'
import { ContactContainer, ContactTitle, ContactWrap, DocumentContainer, DocumentLeft, DocumentRight, DocumentWrap, HorizontalLine, IconWrap, IconWrapOutline, Name, Profession, ProfileImage, ProfileImgWrap, SocialMediaWrap, SubTitle, Text, Title } from './ProfileInfoElements'
import { BsDownload } from 'react-icons/bs'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FiTwitter, FiPhoneCall } from 'react-icons/fi'
import { HiDocumentText } from 'react-icons/hi'
import Img from '../../images/profile-icon.png'
import { UserContext } from '../Context/UserContext'
import '../../controls/index'

const ProfileInfo = () => {

    const { userData } = useContext(UserContext)

    return (
        <>
            <ProfileImgWrap>
              <ProfileImage src={Img} />
            </ProfileImgWrap>
            <Name>{`${userData.firstName} ${userData.lastName}`}</Name>
            <Profession>{`${userData.jobType}`}</Profession>
            <SocialMediaWrap>
              <IconWrap><FaFacebook /></IconWrap>
              <IconWrap><FiTwitter /></IconWrap>
              <IconWrap><FaWhatsapp /></IconWrap>
              <IconWrap><FiPhoneCall /></IconWrap>
            </SocialMediaWrap>
    
            <HorizontalLine />
    
            <DocumentContainer>
              <Title className='resume'>Resume</Title>
              <DocumentWrap>
                <DocumentLeft>
                  <IconWrapOutline>
                    <HiDocumentText />
                  </IconWrapOutline>
                  <SubTitle>{userData.resumeName}</SubTitle>
                </DocumentLeft>
                <DocumentRight>
                  <IconWrapOutline>
                    <BsDownload />
                  </IconWrapOutline>
                </DocumentRight>
              </DocumentWrap>
            </DocumentContainer>
    
            <HorizontalLine />
    
            <ContactContainer>
              <Title>Contacts</Title>
              <ContactWrap>
                <ContactTitle>Email</ContactTitle>
                <Text>{`${userData.email}`}</Text>
              </ContactWrap>
              <ContactWrap>
                <ContactTitle>Phone Number</ContactTitle>
                <Text>{userData.phone}</Text>
              </ContactWrap>
              <ContactWrap>
                <ContactTitle>Country</ContactTitle>
                <Text>{userData.country}</Text>
              </ContactWrap>
            </ContactContainer>
        </>
      )
}

export default ProfileInfo