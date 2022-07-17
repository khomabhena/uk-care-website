import React, { useEffect, useState } from 'react'
import {FaBars} from 'react-icons/fa'
import { Image, ImageWrap, MobileIcon, Name, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu, RightSide } from './ProfileNavElements'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import logo from '../../images/logo-big.PNG'
import profileIcon from '../../images/profile-icon.png'

const ProfileNav = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toogleHome = () => {
        scroll.scrollToTop()
    }

  return (
    <>
    <IconContext.Provider value={{color: '#000'}}>        
    <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo scrollNav={scrollNav} to="/" onClick={toogleHome} src={logo} />
                <MobileIcon onClick={toggle}><FaBars /></MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="profile"
                        smooth={true}
                        duration={500} spy={true} exact='true' offset={-80}
                        >Profile</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="jobs"
                        smooth={true}
                        duration={500} spy={true} exact='true' offset={-80}
                        >Suggested Jobs</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="qualifications"
                        smooth={true}
                        duration={500} spy={true} exact='true' offset={-80}
                        >Qualifications</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="experience"
                        smooth={true}
                        duration={500} spy={true} exact='true' offset={-80}
                        >Experience</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="trainings"
                        smooth={true}
                        duration={500} spy={true} exact='true' offset={-80}
                        >Trainings</NavLinks>
                    </NavItem>
                </NavMenu>
                <RightSide>
                    <ImageWrap>
                        <Image src={profileIcon} />
                    </ImageWrap>
                    <Name>Hi, Jansh</Name>
                </RightSide>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  )
}

export default ProfileNav