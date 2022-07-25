import React from 'react'
import { ButtonWrap, FileChooser, Image, ImageIcon, ImageWrap, Input, InputContainer, InputLabel, Inputwrap, ProfileUpdateContainer, TextArea, Title, UpdateButton, UpdateForm } from './EmployerProfileUpdateElements'
import { BsFillPersonFill } from 'react-icons/bs'
import Img from '../../images/profile-icon.png'

const EmployerProfileUpdate = ({ selectedProfile }) => {
  return (
    <ProfileUpdateContainer selectedProfile={selectedProfile}>
        <Title>My Account</Title>

        <UpdateForm>
            <InputContainer>
                <Inputwrap>
                    <InputLabel>Company Name</InputLabel>
                    <Input placeholder='Enter your company name' />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>Owner Name</InputLabel>
                    <Input placeholder='Enter your name' />
                </Inputwrap>
            </InputContainer>
            <InputContainer>
                <Inputwrap>
                    <InputLabel>Location</InputLabel>
                    <Input placeholder='Where are you located?' />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>Employees</InputLabel>
                    <Input placeholder='Number of employees' />
                </Inputwrap>
            </InputContainer>
            
            <Title>About</Title>
            <InputLabel>About your company</InputLabel>
            <TextArea placeholder='Write a short paragraph introducing your company' rows='6' />

            <InputContainer>
                <Inputwrap>
                    <InputLabel>Registration Number</InputLabel>
                    <Input placeholder='Enter your company registration number' />
                </Inputwrap>
            </InputContainer>
            <InputLabel>National ID / Passport</InputLabel>
            <FileChooser type='file' />

            <Title>Social Media</Title>
            <InputContainer>
                <Inputwrap>
                    <InputLabel>Twitter</InputLabel>
                    <Input />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>Phone Number</InputLabel>
                    <Input />
                </Inputwrap>
            </InputContainer>
            
            <InputContainer>
                <Inputwrap>
                    <InputLabel>Linkedin</InputLabel>
                    <Input />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>Website</InputLabel>
                    <Input />
                </Inputwrap>
            </InputContainer>
        </UpdateForm>

        <ButtonWrap>
            <UpdateButton>Update</UpdateButton>
        </ButtonWrap>
        
    </ProfileUpdateContainer>
  )
}

export default EmployerProfileUpdate