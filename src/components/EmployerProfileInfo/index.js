import React from 'react'
import { ContactContainer, ContactTitle, ContactWrap, DocumentContainer, DocumentLeft, DocumentRight, DocumentWrap, HorizontalLine, IconWrap, IconWrapOutline, Name, Profession, ProfileImage, ProfileImgWrap, SocialMediaWrap, SubTitle, Text, Title } from './EmployerProfileInfoElements'
import { BsFillPersonFill, BsDownload } from 'react-icons/bs'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FiTwitter, FiPhoneCall } from 'react-icons/fi'
import { HiDocumentText } from 'react-icons/hi'
import Img from '../../images/profile-icon.png'


const EmployerProfileInfo = () => {
  return (
    <>
            <Name>UK Care Connection</Name>
            <Profession>Since July 2017</Profession>
            <SocialMediaWrap>
              <IconWrap><FaFacebook /></IconWrap>
              <IconWrap><FiTwitter /></IconWrap>
              {/* <IconWrap><FaWhatsapp /></IconWrap> */}
              <IconWrap><FiPhoneCall /></IconWrap>
            </SocialMediaWrap>
    
            <HorizontalLine />
    
            <ContactContainer>
              <Title>Profile Overview</Title>
              <ContactWrap>
                <ContactTitle>Owner Name</ContactTitle>
                <Text>Charles Dickens</Text>
              </ContactWrap>
              <ContactWrap>
                <ContactTitle>Employees</ContactTitle>
                <Text>200 - 300</Text>
              </ContactWrap>
              <ContactWrap>
                <ContactTitle>Location</ContactTitle>
                <Text>New Caledonia</Text>
              </ContactWrap>
              <ContactWrap>
                <ContactTitle>Website</ContactTitle>
                <Text>www.ukcareconnection.com</Text>
              </ContactWrap>
              <ContactWrap>
                <ContactTitle>Established</ContactTitle>
                <Text>July 10 2017</Text>
              </ContactWrap>
            </ContactContainer>
        </>
  )
}

export default EmployerProfileInfo