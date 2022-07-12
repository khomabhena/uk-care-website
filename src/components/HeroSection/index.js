import React, { useState } from 'react'
import { Button } from '../ButtonElement'
import { ArrowForward, ArrowRight } from './HeroElements2'
import { Hero2BtnWrapper, Hero2Gradient, Hero2H1, Hero2H2, Hero2P, HeroImg, HeroSection2Container, TextContent } from './HeroElements2';
import img from '../../images/svg-4.svg'

const HeroSection2 = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }


  return (
    <HeroSection2Container id='home'>
        <TextContent>
            <Hero2H1 primary='true'>Our Best</Hero2H1>
            <Hero2H1 primary='true'>Care Givers</Hero2H1>
            <Hero2H2 primary='true'>Online</Hero2H2>
            <Hero2P>Join a network of the world's best care givers &amp; get full-time, long-term care giving jobs with better compensation and career growth.</Hero2P>
            <Hero2BtnWrapper>
                <Button to="signup" 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary='true'
                dark='true'>
                    Apply for jobs {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </Hero2BtnWrapper>
        </TextContent>
        <Hero2Gradient />
        <HeroImg src={img} />
    </HeroSection2Container>
  )
}

export default HeroSection2