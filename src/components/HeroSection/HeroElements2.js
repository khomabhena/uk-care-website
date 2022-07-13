import styled from "styled-components";
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'


export const HeroSection2Container = styled.div`
    position: relative;
    height: 100vh;
    z-index: 1;
    background: var(--white);
`

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    /* background: red; */
    height: 100%;
    padding-left: 6rem;
`

export const Hero2H1 = styled.h1`
    color: ${({primary}) => (primary ? `var(--grey)`: `black`)};
    font-size: 48px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Hero2H2 = styled.h2`
    color: var(--greyLight);
    font-size: 30px;
    padding-left: 4px;
`

export const Hero2P = styled.p`
    margin-top: 24px;
    color: var(--grey);
    font-size: 24px;
    max-width: 500px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const Hero2BtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Hero2Gradient = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 500px;
    background-image: linear-gradient(180deg, rgba(112, 175, 206, 1), rgba(165, 222, 241, 0.5));
`

export const BlobImg = styled.img`
    position: absolute;
    top: -25%;
    left: -20%;
    height: 900px;
    z-index: -99;
`

export const HeroImg = styled.img`
    position: absolute;
    bottom: 0;
    right: 48px;
    height: 400px;
    z-index: -99;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`