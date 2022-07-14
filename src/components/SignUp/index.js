import React from 'react'
import { Input, Label, LeftSide, LoginButton, LoginContainer, 
    LoginForm, LoginWrap, Logo, LogoWrap, RightSide, SignupButton, Svg, TextSignin, TextWelcome } from './SignUpElements'
import logo from '../../images/logo-big.PNG'
import svg from '../../images/svg-signup.svg'


const SignUp = () => {
  return (
    <LoginContainer>
        <LoginWrap>
            
            <LeftSide>
                <LogoWrap to="/"><Logo src={logo} /></LogoWrap>
                <Svg src={svg} />
            </LeftSide>

            <RightSide>
                <TextWelcome>Let's Get Started</TextWelcome>
                <TextSignin>Sign Up and get access to all the features.</TextSignin>

                <LoginForm>
                    <Label>Firstname</Label>
                    <Input placeholder='Enter your Firstname' />
                    <Label>Lastname</Label>
                    <Input placeholder='Enter your Lastname' />
                    <Label>Country of Residence</Label>
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
                    
                    <LoginButton>Sign Up</LoginButton>
                    <SignupButton to="/signin">Already a member? Sign In</SignupButton>
                </LoginForm>
            </RightSide>

        </LoginWrap>
    </LoginContainer>
  )
}

export default SignUp