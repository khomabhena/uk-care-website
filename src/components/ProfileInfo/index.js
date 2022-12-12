import React, { useEffect } from 'react'
import { ContactContainer, ContactTitle, ContactWrap, DocumentContainer, DocumentLeft, DocumentRight, DocumentWrap, HorizontalLine, IconWrap, IconWrapOutline, Name, Profession, ProfileImage, ProfileImgWrap, SocialMediaWrap, SubTitle, Text, Title } from './ProfileInfoElements'
import { BsDownload } from 'react-icons/bs'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FiTwitter, FiPhoneCall } from 'react-icons/fi'
import { HiDocumentText } from 'react-icons/hi'
import Img from '../../images/profile-icon.png'
import ProfileInformation from './myJs'

const ProfileInfo = () => {

    return (
        <>
            <ProfileImgWrap>
              <ProfileImage src={Img} />
            </ProfileImgWrap>
            <Name className="info-name"></Name>
            <Profession className="info-profession"></Profession>
            <SocialMediaWrap>
              <IconWrap><FaFacebook /></IconWrap>
              <IconWrap><FiTwitter /></IconWrap>
              <IconWrap><FaWhatsapp /></IconWrap>
              <IconWrap><FiPhoneCall /></IconWrap>
            </SocialMediaWrap>
    
            <HorizontalLine />
    
            <DocumentContainer>
              <Title className='info-resume'>Resume</Title>
              <DocumentWrap>
                <DocumentLeft>
                  <IconWrapOutline>
                    <HiDocumentText />
                  </IconWrapOutline>
                  <SubTitle className="info-cv"></SubTitle>
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
                <Text className="info-email"></Text>
              </ContactWrap>
              <ContactWrap>
                <ContactTitle>Phone Number</ContactTitle>
                <Text className="info-phone"></Text>
              </ContactWrap>
              <ContactWrap>
                <ContactTitle>Country</ContactTitle>
                <Text className="info-country"></Text>
              </ContactWrap>
            </ContactContainer>
        </>
      )
}

export default ProfileInfo