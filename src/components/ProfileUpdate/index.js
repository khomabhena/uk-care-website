import React, {useEffect} from 'react'
import { ButtonWrap, FileChooser, Image, ImageWrap, Input, InputContainer, InputLabel, InputWrap, Option, ProfileUpdateContainer, Select, TextArea, Title, UpdateButton, UpdateForm } from './ProfileUpdateElements'
import Img from '../../images/profile-icon.png'
import { ApplicantControls, FirebaseStorage } from '../../controls'

const ProfileUpdate = ({ selectedProfile }) => {
    
    useEffect(() => {
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        ApplicantControls().Update().uploadData()
    }
    
  return (
    <ProfileUpdateContainer selectedProfile={selectedProfile}>
        <Title>My Account</Title>

        <UpdateForm onSubmit={handleSubmit}>
            <InputContainer>
                <InputWrap>
                    <InputLabel>First Name</InputLabel>
                    <Input className='firstName' placeholder='Enter your first name' />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Last Name</InputLabel>
                    <Input className='lastName' placeholder='Enter your last name' />
                </InputWrap>
            </InputContainer>
            <InputContainer>
                <InputWrap>
                    <InputLabel>Job Type</InputLabel>
                    {/* <Input className='profession' smallHint='true'  placeholder='Nurse, Nurse Aid, Adult Care or Hospice Care?' /> */}
                    <Select className='profession' name='profession'>
                        <Option value='None' disabled defaultValue>Select job type</Option>
                        <Option value='Nurse'>Nurse</Option>
                        <Option value='Nurse Aid'>Nurse Aid</Option>
                        <Option value='Adult Care'>Adult Care</Option>
                        <Option value='Hospice Care'>Hospice Care</Option>
                    </Select>
                </InputWrap>
                <InputWrap>
                    <InputLabel>Country</InputLabel>
                    <Input className='country' placeholder='Enter your country' />
                </InputWrap>
            </InputContainer>
            <InputLabel>Upload Profile Picture</InputLabel>
            <FileChooser className='update-profile' type='file' accept='image/*' />
            
            <Title>Profile</Title>
            <InputLabel>Introduce Yourself</InputLabel>
            <TextArea className='intro' placeholder='Write a short paragraph introducing yourself' rows='6' />

            <InputContainer>
                <InputWrap>
                    <InputLabel>Languages</InputLabel>
                    <Input className='languages' smallHint='true' placeholder='Separate your languages by commas!' />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Physical Address</InputLabel>
                    <Input className='address'  placeholder='Enter your Address' />
                </InputWrap>
            </InputContainer>
            <InputLabel>Attachments CV</InputLabel>
            <FileChooser className='cv' type='file' accept='.pdf, .doc, .docx, .txt' />
            <InputLabel>National ID/Passport</InputLabel>
            <FileChooser className='id' type='file' accept='image/*, .pdf, .doc, .docx' />

            <Title>Social Media</Title>
            <InputContainer>
                <InputWrap>
                    <InputLabel>Facebook</InputLabel>
                    <Input className='facebook' placeholder='Facebook Username' />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Twitter</InputLabel>
                    <Input className='twitter' placeholder='Twitter Username' />
                </InputWrap>
            </InputContainer>
            
            <InputContainer>
                <InputWrap>
                    <InputLabel>Phone</InputLabel>
                    <Input className='phone' placeholder='Enter your phone number, include country code' smallHint='true'/>
                </InputWrap>
                <InputWrap>
                    <InputLabel>WhatsApp</InputLabel>
                    <Input className='whatsApp' placeholder='WhatsApp number' />
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