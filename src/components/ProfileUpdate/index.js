import React, {useContext, useState} from 'react'
import { ButtonWrap, FileChooser, Image, ImageWrap, Input, InputContainer, InputLabel, Inputwrap, ProfileUpdateContainer, TextArea, Title, UpdateButton, UpdateForm } from './ProfileUpdateElements'
import Img from '../../images/profile-icon.png'
import { UserContext } from '../Context/UserContext'
import { doc, updateDoc } from "firebase/firestore"
import { db } from '../../Firebase'

const ProfileUpdate = ({ selectedProfile }) => {

    const { userData, setUserData } = useContext(UserContext)

    const handleUpdate = async (e) => {
        e.preventDefault()

        const washingtonRef = doc(db, 'users', userData.uid);
            await updateDoc(washingtonRef, {
            ...userData
        });

    }
  return (
    <ProfileUpdateContainer selectedProfile={selectedProfile}>
        <Title>My Account</Title>
        <ImageWrap>
            <Image src={Img} />
        </ImageWrap>

        <UpdateForm onSubmit={handleUpdate}>
            <InputContainer>
                <Inputwrap>
                    <InputLabel>First Name</InputLabel>
                    <Input placeholder='Enter your first name' value={userData.firstName} onChange={(e) => setUserData(prev => ({...prev, firstName: e.target.value})) } />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>Last Name</InputLabel>
                    <Input placeholder='Enter your last name' value={userData.lastName} onChange={(e) => setUserData(prev => ({...prev, lastName: e.target.value})) } />
                </Inputwrap>
            </InputContainer>
            <InputContainer>
                <Inputwrap>
                    <InputLabel>Job Type</InputLabel>
                    <Input smallHint='true' value={userData.jobType} onChange={(e) => setUserData(prev => ({...prev, jobType: e.target.value})) } placeholder='Nurse, Nurse Aid, Adult Care or Hospice Care?' />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>Country</InputLabel>
                    <Input value={userData.country} onChange={(e) => setUserData(prev => ({...prev, country: e.target.value})) } placeholder='Enter your country' />
                </Inputwrap>
            </InputContainer>
            
            <Title>Profile</Title>
            <InputLabel>Introduce Yourself</InputLabel>
            <TextArea value={userData.about} onChange={(e) => setUserData(prev => ({...prev, about: e.target.value})) } placeholder='Write a short paragraph introducing yourself' rows='6' />

            <InputContainer>
                <Inputwrap>
                    <InputLabel>Languages</InputLabel>
                    <Input value={userData.languages} onChange={(e) => setUserData(prev => ({...prev, languages: e.target.value})) } smallHint='true' placeholder='Separate your languages by commas!' />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>Physical Address</InputLabel>
                    <Input value={userData.address} onChange={(e) => setUserData(prev => ({...prev, address: e.target.value})) } placeholder='Enter your Address' />
                </Inputwrap>
            </InputContainer>
            <InputLabel>Attachements CV</InputLabel>
            <FileChooser type='file' />
            <InputLabel>National ID/Passport</InputLabel>
            <FileChooser type='file' />

            <Title>Social Media</Title>
            <InputContainer>
                <Inputwrap>
                    <InputLabel>Facebook</InputLabel>
                    <Input placeholder='Facebook Username' value={userData.facebook} onChange={(e) => setUserData(prev => ({...prev, facebook: e.target.value})) } />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>Twitter</InputLabel>
                    <Input placeholder='Twitter Username' value={userData.twitter} onChange={(e) => setUserData(prev => ({...prev, twitter: e.target.value})) } />
                </Inputwrap>
            </InputContainer>
            
            <InputContainer>
                <Inputwrap>
                    <InputLabel>Phone</InputLabel>
                    <Input placeholder='Enter your phone number, include country code' smallHint='true' value={userData.phone} onChange={(e) => setUserData(prev => ({...prev, phone: e.target.value})) } />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>WhatsApp</InputLabel>
                    <Input placeholder='WhatsApp number' value={userData.whatsapp} onChange={(e) => setUserData(prev => ({...prev, whatsapp: e.target.value})) } />
                </Inputwrap>
            </InputContainer>

            <ButtonWrap>
                <UpdateButton type='submit'>Update</UpdateButton>
            </ButtonWrap>
           
        </UpdateForm>

        
    </ProfileUpdateContainer>
  )
}

export default ProfileUpdate