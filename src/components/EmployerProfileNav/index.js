import React, { useContext } from 'react'
import {FaBars} from 'react-icons/fa'
import { Image, ImageWrap, MobileIcon, Name, Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu, RightSide } from './EmployerProfileNavElements'
import { IconContext } from 'react-icons/lib'
import logo from '../../images/logo-big.PNG'
import profileIcon from '../../images/profile-icon.png'
import { useNavigate } from 'react-router-dom'
import { CompanyContext } from '../Context/CompanyContext'

const EmployerProfileNav = ({ selectedPage, togglePage }) => {
    const navigate = useNavigate()

    const { companyData } = useContext(CompanyContext)

    const goBack = () => {
        navigate(-1)
    }

  return (
    <>
    <IconContext.Provider value={{color: `var(--grey)`}}>        
    <Nav>
            <NavbarContainer>
                <NavLogo onClick={goBack} src={logo} />
                <MobileIcon ><FaBars /></MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="profile" selectedPage={selectedPage === 'profile'} onClick={() => togglePage('profile')}
                        smooth={true}
                        duration={500} spy={true} exact='true' offset={-80}
                        >Profile {() => selectedPage === 'profile'}</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="jobs" selectedPage={selectedPage === 'jobs'} onClick={() => togglePage('jobs')}
                        smooth={true}
                        duration={500} spy={true} exact='true' offset={-80}
                        >My Jobs</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="qualifications"
                        smooth={true}
                        duration={500} spy={true} exact='true' offset={-80}
                        >Applications</NavLinks>
                    </NavItem>
                </NavMenu>
                <RightSide>
                    <ImageWrap>
                        <Image src={profileIcon} />
                    </ImageWrap>
                    <Name>{companyData.companyName}</Name>
                </RightSide>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  )
}

export default EmployerProfileNav