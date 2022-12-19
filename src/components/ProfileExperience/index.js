import React, {useEffect} from 'react'
import { ButtonWrap, FileChooser, Image, ImageWrap, Input, InputContainer, InputLabel, InputWrap, ProfileUpdateContainer, TextArea, Title, UpdateButton, UpdateForm } from './ProfileExperienceElements'
import Img from '../../images/profile-icon.png'
import { ApplicantControls, FirebaseStorage } from '../../controls'

const ProfileExperience = ({ selectedProfile }) => {
    
    useEffect(() => {
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        ApplicantControls().Experience().uploadData()
    }   
    
  return (
    <ProfileUpdateContainer selectedProfile={selectedProfile}>
        <Title>Experience</Title>

        <UpdateForm onSubmit={handleSubmit}>
            <InputContainer>
                <InputWrap>
                    <InputLabel>Job Title</InputLabel>
                    <Input className='ex-title' placeholder='Enter position title' />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Company Name</InputLabel>
                    <Input className='ex-company' placeholder='Enter company name' />
                </InputWrap>
            </InputContainer>
            <InputContainer>
                <InputWrap>
                    <InputLabel>Year Start</InputLabel>
                    <Input className='ex-yearStart' type='date' smallHint='true'  placeholder='Starting year' />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Year End</InputLabel>
                    <Input className='ex-yearEnd' type='date' placeholder='Enter year end' />
                </InputWrap>
            </InputContainer>
            
            <Title>Accomplishments</Title>
            <InputLabel>Brief Overview</InputLabel>
            <TextArea className='ex-intro' placeholder='Write a short paragraph stating your accomplishments' rows='6' />

            <ButtonWrap>
                <UpdateButton className="applicant-update" type='submit'>Update</UpdateButton>
            </ButtonWrap>
           
        </UpdateForm>

        
    </ProfileUpdateContainer>
  )
}

export default ProfileExperience