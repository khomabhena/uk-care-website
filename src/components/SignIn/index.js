import React from 'react'
import { ForgotPassword, ForgotPasswordDiv, LogoWrap, Input, Label, LeftSide, LoginButton, LoginContainer, LoginForm, LoginWrap, Logo, RightSide, SignupButton, Svg, TextSignin, TextWelcome } from './SignInElements'
import logo from '../../images/logo-big.PNG'
import svg from '../../images/svg-signin.svg'


const SignIn = () => {
  return (
    <LoginContainer>
      <LoginWrap> 
          <LeftSide>
              <LogoWrap to="/"><Logo src={logo} /></LogoWrap>
              <Svg src={svg} />
          </LeftSide>

          <RightSide>
              <TextWelcome>Welcome Back!</TextWelcome>
              <TextSignin>Sign in to continue to uk care connection.</TextSignin>

              <LoginForm>
                  <Label>Email</Label>
                  <Input placeholder='Enter your email address' />
                  <Label>Password</Label>
                  <Input placeholder='Enter your password' />
                  <ForgotPasswordDiv to="/forgot-password">
                      <ForgotPassword>Forgot Password?</ForgotPassword>
                  </ForgotPasswordDiv>
                  <LoginButton>Sign In</LoginButton>
                  <SignupButton to="/signup">Don't have an account? Sign Up</SignupButton>
              </LoginForm>
          </RightSide>

      </LoginWrap>
  </LoginContainer>
  )
}

export default SignIn