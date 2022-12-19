import React, { useContext, useState } from 'react'
import { ErrorContainer, ErrorMessage, Input, Label, LeftSide, LoginButton, LoginContainer, 
    LoginForm, LoginWrap, Logo, LogoWrap, RightSide, SignupButton, Svg, TextSignin, TextWelcome } from './SignUpElements'
import logo from '../../images/logo-big.PNG'
import svg from '../../images/svg-signup.svg'
import { ImWarning } from 'react-icons/im'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../Firebase'
import { AuthContext } from '../Context/AuthContext'
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { FirebaseStorage } from '../../controls'


const SignUp = () => {
    const navigate = useNavigate()

    const {setCurrentUser, setAuthCredentials} = useContext(AuthContext)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })
    // console.log(data)

    const handleUploadData = async (uid) => {
        setError(false)

        try {
            await FirebaseStorage().setData('applicants', data.email, {...data, uid: uid})
            navigate('/profile')
        } catch (e) {
            setError(true)
            setErrorMessage(e.message)
        }
    } 

    const handleSignup = (e) => {
        setError(false)
        e.preventDefault()
        if (password !== confirmPassword) {
            setError(true)
            setErrorMessage('Passwords do not match!!')
        } else {

            createUserWithEmailAndPassword(auth, data.email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    setCurrentUser(JSON.stringify(user))
                    localStorage.setItem('currentUser', JSON.stringify(user))
                    setAuthCredentials(user.uid, user.email)

                    handleUploadData(user.uid)
                })
                .catch((error) => {
                    setError(true)
                    setErrorMessage('Account with this Email already exists!!')
                    // ..
            });
        }
    }

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


                <LoginForm onSubmit={handleSignup}>
                    <Label>Firstname</Label>
                    <Input required type='text' placeholder='Enter your Firstname' onChange={(e) => setData(prev => ({...prev, firstName: e.target.value}))} />
                    <Label>Lastname</Label>
                    <Input required type='text' placeholder='Enter your Lastname' onChange={(e) => setData(prev => ({...prev, lastName: e.target.value}))} />
                    <Label>Email Address</Label>
                    <Input required type='email' placeholder='Enter your email address' onChange={(e) => setData(prev => ({...prev, email: e.target.value}))} />
                    <Label>Password</Label>
                    <Input required type='password' minLength='6' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                    <Label>Confirm Password</Label>
                    <Input required type='password' minLength='6' placeholder='Confirm your password' onChange={(e) => setConfirmPassword(e.target.value)} />
                    
                    <ErrorContainer error={error}>
                        <IconContext.Provider value={{color : 'var(--red)'}}>
                            <ImWarning />
                        </IconContext.Provider>
                        <ErrorMessage>{errorMessage}</ErrorMessage>
                    </ErrorContainer>

                    <LoginButton type='submit'>Sign Up</LoginButton>
                    <SignupButton to="/signin">Already a member? Sign In</SignupButton>
                </LoginForm>
            </RightSide>

        </LoginWrap>
    </LoginContainer>
  )
}

export default SignUp