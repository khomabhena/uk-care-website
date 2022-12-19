import React, {useEffect} from 'react'
import { ButtonWrap, FileChooser, Image, ImageWrap, Input, InputContainer, InputLabel, InputWrap, ProfileUpdateContainer, TextArea, Title, UpdateButton, UpdateForm } from './ProfileQualificationsElements'
import Img from '../../images/profile-icon.png'
import { ApplicantControls, FirebaseStorage } from '../../controls'

const ProfileQualifications = ({ selectedProfile }) => {
    
    useEffect(() => {
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        ApplicantControls().Update().uploadData()
    }
    
  return (
    <ProfileUpdateContainer selectedProfile={selectedProfile}>
        <Title>Qualifications</Title>

        <UpdateForm onSubmit={handleSubmit}>
            <InputContainer>
                <InputWrap>
                    <InputLabel>Degree Name</InputLabel>
                    <Input className='degree' placeholder='Enter degree name' />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Institution</InputLabel>
                    <Input className='institution' placeholder='Enter name of your Institution' />
                </InputWrap>
            </InputContainer>
            <InputContainer>
                <InputWrap>
                    <InputLabel>Year Start</InputLabel>
                    <Input className='yearStart' smallHint='true'  placeholder='Nurse, Nurse Aid, Adult Care or Hospice Care?' />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Year End</InputLabel>
                    <Input className='country' placeholder='Enter your country' />
                </InputWrap>
            </InputContainer>
            
            <Title>Accomplishments</Title>
            <InputLabel>Brief Overview</InputLabel>
            <TextArea className='intro' placeholder='Write a short paragraph stating your accomplishments' rows='6' />

            <ButtonWrap>
                <UpdateButton className="applicant-update" type='submit'>Update</UpdateButton>
            </ButtonWrap>
           
        </UpdateForm>

        
    </ProfileUpdateContainer>
  )
}

export default ProfileQualifications