import React from 'react'
import { Input, Label, LeftSide, LoginButton, LoginContainer, 
    LoginForm, LoginWrap, Logo, LogoWrap, RightSide, SignupButton, Svg, TextSignin, TextWelcome } from './EmployerSignUpElements'
import logo from '../../images/logo-big.PNG'
import svg from '../../images/svg-signup.svg'
import { useNavigate } from 'react-router-dom'

const EmployerSignUp = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

  return (
    <LoginContainer>
        <LoginWrap>
            
            <LeftSide>
                <LogoWrap onClick={goBack} to="/"><Logo src={logo} /></LogoWrap>
                <Svg src={svg} />
            </LeftSide>

            <RightSide>
                <TextWelcome>Employer Sign Up</TextWelcome>
                <TextSignin>Sign Up and get access to all the features.</TextSignin>

                <LoginForm>
                    <Label>Company Name</Label>
                    <Input placeholder='Enter your Company Name' />
                    <Label>Company Registration Number</Label>
                    <Input placeholder='Enter your Lastname' />
                    <Label>National Id/Passport Number</Label>
                    <Input placeholder='Enter your country of residence' />
                    <Label>Country of Citizenship</Label>
                    <Input placeholder='Enter your country of citizenship' />
                    <Label>Phone Number</Label>
                    <Input placeholder='Enter your phone number' />
                    <Label>Email Address</Label>
                    <Input placeholder='Enter your email address' />
                    <Label>Password</Label>
                    <Input placeholder='Enter your password' />
                    <Label>Confirm Password</Label>
                    <Input placeholder='Confirm your password' />
                    
                    <LoginButton to="/employer-profile">Sign Up</LoginButton>
                    <SignupButton to="/employer-signin">Already a member? Sign In</SignupButton>
                </LoginForm>
            </RightSide>

        </LoginWrap>
    </LoginContainer>
  )
}

export default EmployerSignUp