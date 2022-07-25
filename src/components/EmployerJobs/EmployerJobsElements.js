import styled from "styled-components";

export const JobContainer = styled.div`
    border: 1px solid var(--greyLight);
    border-radius: 8px;
    margin-top: 1.5rem;
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

export const Location = styled.p`
    margin-left: 2rem;
`

export const FullTime = styled.p`
    color: blue;
    background: var(--blueAlpha);
    padding: 0.2rem 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
`

export const Urgent = styled.p`
    margin-left: 2rem;
    background: var(--redAlpha);
    color: red;
    border-radius: 8px;
    padding: 0.2rem 1rem;
    font-size: 0.9rem;
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