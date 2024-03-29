import React from 'react'
import { ContactContainer, ContactTitle, ContactWrap, DocumentContainer, DocumentLeft, DocumentRight, DocumentWrap, HorizontalLine, IconWrap, IconWrapA, IconWrapOutline, Name, Profession, ProfileImage, ProfileImgWrap, SocialMediaWrap, SubTitle, Text, Title } from './ProfileInfoElements'
import { BsDownload } from 'react-icons/bs'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FiTwitter, FiPhoneCall } from 'react-icons/fi'
import { HiDocumentText } from 'react-icons/hi'
import Img from '../../images/profile-icon.png'

const ProfileInfo = () => {

    return (
        <>
            <ProfileImgWrap>
              <ProfileImage className='info-profile' src={Img} />
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
                  <IconWrapA className='info-download-resume' download>
                    <IconWrapOutline>
                      <BsDownload />
                    </IconWrapOutline>
                  </IconWrapA>
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