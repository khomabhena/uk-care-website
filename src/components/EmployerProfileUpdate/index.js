import React, { useEffect } from 'react'
import { EmployerControls } from '../../controls'
import { ButtonWrap, FileChooser, Input, InputContainer, InputLabel, InputWrap, ProfileUpdateContainer, TextArea, Title, UpdateButton, UpdateForm } from './EmployerProfileUpdateElements'

const EmployerProfileUpdate = ({ selectedProfile }) => {

    useEffect(() => {

    }, [])

    const handleUpdate = (e) => {
        e.preventDefault()
        EmployerControls().Update().uploadToFireStore()
        // console.log('Updating')
    }

  return (
    <ProfileUpdateContainer selectedProfile={selectedProfile}>
        <Title>My Account</Title>

        <UpdateForm onSubmit={handleUpdate}>
            <InputContainer>
                <InputWrap>
                    <InputLabel>Company Name</InputLabel>
                    <Input className='companyName' placeholder='Enter your company name' />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Owner Name</InputLabel>
                    <Input className='name' placeholder='Enter your name' />
                </InputWrap>
            </InputContainer>
            <InputContainer>
                <InputWrap>
                    <InputLabel>Location</InputLabel>
                    <Input className='country' placeholder='Where are you located?' />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Employees</InputLabel>
                    <Input className='employees' placeholder='Number of employees' />
                </InputWrap>
            </InputContainer>
            
            <Title>About</Title>
            <InputLabel>About your company</InputLabel>
            <TextArea className='intro' placeholder='Write a short paragraph introducing your company' rows='6' />

            <InputContainer>
                <InputWrap>
                    <InputLabel>Registration Number</InputLabel>
                    <Input className='registrationNumber' placeholder='Enter your company registration number' />
                </InputWrap>
            </InputContainer>
            <InputLabel>National ID / Passport</InputLabel>
            <FileChooser className='id' type='file' />

            <Title>Social Media</Title>
            <InputContainer>
                <InputWrap>
                    <InputLabel>Twitter</InputLabel>
                    <Input className='twitter' />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Phone Number</InputLabel>
                    <Input className='phone' />
                </InputWrap>
            </InputContainer>
            
            <InputContainer>
                <InputWrap>
                    <InputLabel>Linkedin</InputLabel>
                    <Input className='linkedin' />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Website</InputLabel>
                    <Input className='website' />
                </InputWrap>
            </InputContainer>
            <ButtonWrap>
                <UpdateButton type='submit'>Update</UpdateButton>
            </ButtonWrap>

        </UpdateForm>

        
    </ProfileUpdateContainer>
  )
}

export default EmployerProfileUpdate