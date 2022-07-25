import styled from "styled-components";

export const OutterContainer = styled.div`
    width: ${({ shortWidth }) => ( shortWidth ? '50%' : '100%')};

    @media screen and (max-width: 912px) {
        width: 100%;
    }
`

export const JobContainer = styled.div`
    border: 1px solid var(--greyLight);
    border-radius: 8px;
    margin: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    color: var(--grey);
    overflow: hidden;

    &:hover {
        border: 1px solid var(--primary);
    }
`
export const ContentWrap = styled.div`
    padding: 1rem 2rem;
`

export const Title = styled.h4`
`

export const Company = styled.p`
    font-size: 0.9rem;
`

export const Salary = styled.p`
`

export const FullTime = styled.p`
    color: var(--green);
    background: var(--greenAlpha);
    padding: 0.2rem 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
`

export const Location = styled.p`
    margin-left: 2rem;
    background: var(--blueAlpha);
    color: var(--blue);
    border-radius: 8px;
    padding: 0.2rem 1rem;
    font-size: 0.9rem;
`


export const Urgent = styled.p`
    
`

export const HorizontalWrap = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
`

export const IconWrap = styled.div`
    cursor: pointer;
    margin-left: 2rem;
`

export const Text = styled.p`
    margin-top: 2rem;
    font-size: 0.9rem;
    line-height: 1.5rem;
`

export const BottomWrap = styled.div`
    background: var(--primaryWhiteTwo);
    padding: 0.5rem 2rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`