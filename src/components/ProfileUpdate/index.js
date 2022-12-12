import React, {useEffect} from 'react'
import { ButtonWrap, FileChooser, Image, ImageWrap, Input, InputContainer, InputLabel, InputWrap, ProfileUpdateContainer, TextArea, Title, UpdateButton, UpdateForm } from './ProfileUpdateElements'
import Img from '../../images/profile-icon.png'
import UpdateApplicant from './myjs'

const ProfileUpdate = ({ selectedProfile }) => {
    
    useEffect(() => {
        const applicant = UpdateApplicant()
        applicant.setEventListeners()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

    }
    
  return (
    <ProfileUpdateContainer selectedProfile={selectedProfile}>
        <Title>My Account</Title>
        <ImageWrap>
            <Image src={Img} />
        </ImageWrap>

        <UpdateForm onSubmit={handleSubmit}>
            <InputContainer>
                <InputWrap>
                    <InputLabel>First Name</InputLabel>
                    <Input placeholder='Enter your first name' value='' />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Last Name</InputLabel>
                    <Input placeholder='Enter your last name' />
                </InputWrap>
            </InputContainer>
            <InputContainer>
                <InputWrap>
                    <InputLabel>Job Type</InputLabel>
                    <Input smallHint='true'  placeholder='Nurse, Nurse Aid, Adult Care or Hospice Care?' />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Country</InputLabel>
                    <Input placeholder='Enter your country' />
                </InputWrap>
            </InputContainer>
            
            <Title>Profile</Title>
            <InputLabel>Introduce Yourself</InputLabel>
            <TextArea placeholder='Write a short paragraph introducing yourself' rows='6' />

            <InputContainer>
                <InputWrap>
                    <InputLabel>Languages</InputLabel>
                    <Input smallHint='true' placeholder='Separate your languages by commas!' />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Physical Address</InputLabel>
                    <Input  placeholder='Enter your Address' />
                </InputWrap>
            </InputContainer>
            <InputLabel>Attachments CV</InputLabel>
            <FileChooser className='cv' type='file' />
            <InputLabel>National ID/Passport</InputLabel>
            <FileChooser className='id' type='file' />

            <Title>Social Media</Title>
            <InputContainer>
                <InputWrap>
                    <InputLabel>Facebook</InputLabel>
                    <Input placeholder='Facebook Username' />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Twitter</InputLabel>
                    <Input placeholder='Twitter Username' />
                </InputWrap>
            </InputContainer>
            
            <InputContainer>
                <InputWrap>
                    <InputLabel>Phone</InputLabel>
                    <Input placeholder='Enter your phone number, include country code' smallHint='true'/>
                </InputWrap>
                <InputWrap>
                    <InputLabel>WhatsApp</InputLabel>
                    <Input placeholder='WhatsApp number' />
                </InputWrap>
            </InputContainer>

            <ButtonWrap>
                <UpdateButton className="applicant-update" type='submit'>Update</UpdateButton>
            </ButtonWrap>
           
        </UpdateForm>

        
    </ProfileUpdateContainer>
  )
}

export default ProfileUpdate