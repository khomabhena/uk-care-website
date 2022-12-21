import styled from "styled-components";

export const Title = styled.h3`
    color: var(--darkgrey);
`

export const SubTitle = styled.h4`
    color: var(--darkgrey);
`

export const MenuText = styled.p`
    color: var(--darkgreylight);
`

export const SubHeading = styled.p``

export const HorizontalLine = styled.div`
    height: 1px;
    width: 100%;
    background: var(--primaryBG);
    margin-bottom: 16px;
`


// Profile Container
export const ProfileContainer = styled.div`
    display: ${({ selectedPage }) => (selectedPage ? `flex` : 'none')};
    flex-direction: row;
    justify-content: center;
    margin: 0.5rem 3rem;

    @media screen  and (max-width: 912px) {
        flex-direction: column;
        margin: 2rem;
    }

    @media screen and (max-width: 480px) {
        margin: 1rem;
    }
`

// Letf side
export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* align-self: center; */
    width: 30%;
    padding: 1rem;
    border-radius: 8px;
    margin: 1rem 1rem 1rem 1rem;
    min-height: 50vh;
    border: 1px solid var(--greyLight);
    box-shadow: 0 1px 1px var(--greyLight);

    @media screen and (max-width: 912px) {
        width: 90%;
        align-self: center;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
    }
`

// Right Side
export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    padding: 1rem;
    margin: 1rem;
    border-radius: 8px;
    border: 1px solid var(--greyLight);
    box-shadow: 0 1px 1px var(--greyLight);

    @media screen and (max-width: 912px) {
        width: 90%;
        align-self: center;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
    }
`

export const NavWrap = styled.div`
    margin-top: 1.5rem;
    display: flex;
`

export const Overview = styled.h4`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid var(--primary);
    padding: 0 2rem 1rem;
    border-bottom: ${({ selectedProfile }) => (selectedProfile === 'overview' ? `2px solid var(--primary)` : `none`)};
    color: ${({ selectedProfile }) => (selectedProfile === 'overview' ? `var(--primary)`: `var(--grey)`)};
    cursor: pointer;

    &:hover {
        color: var(--primary);
        border-bottom: 2px solid var(--primary);
    }
`

export const Update = styled.h4`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem 1rem;
    border-bottom: ${({ selectedProfile }) => (selectedProfile === 'update' ? `2px solid var(--primary)` : `none`)};
    color: ${({ selectedProfile }) => (selectedProfile === 'update' ? `var(--primary)`: `var(--grey)`)};
    cursor: pointer;

    &:hover {
        color: var(--primary);
        border-bottom: 2px solid var(--primary);
    }
`

export const Qualifications = styled.h4`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem 1rem;
    border-bottom: ${({ selectedProfile }) => (selectedProfile === 'qualifications' ? `2px solid var(--primary)` : `none`)};
    color: ${({ selectedProfile }) => (selectedProfile === 'qualifications' ? `var(--primary)`: `var(--grey)`)};
    cursor: pointer;

    &:hover {
        color: var(--primary);
        border-bottom: 2px solid var(--primary);
    }
`

export const Experience = styled.h4`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem 1rem;
    border-bottom: ${({ selectedProfile }) => (selectedProfile === 'experience' ? `2px solid var(--primary)` : `none`)};
    color: ${({ selectedProfile }) => (selectedProfile === 'experience' ? `var(--primary)`: `var(--grey)`)};
    cursor: pointer;

    &:hover {
        color: var(--primary);
        border-bottom: 2px solid var(--primary);
    }
`



// Jobs Container
export const JobsWrapper = styled.div`
    display: ${({ selectedPage }) => (selectedPage ? 'grid' : 'none')};
    min-height: 80vh;
    grid-template-columns: 1fr 3fr;
    grid-auto-rows: repeat(auto-fit, minmax(50px, 1fr));
    margin: 1rem 2rem;
    gap: 1rem;
    justify-content: ${({ selectedJobPage }) => (selectedJobPage === 'jobDetails' ? 'center' : 'flex-start')};

    @media screen and (max-width: 960px) {
      margin: 1rem 1rem;
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

export const Wrapper = styled.div`

`

export const ApplicationsContainer = styled.div`
    min-height: 50vh;
    display: grid;
`

export const JobsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 960px) {
     grid-template-columns: 1fr;
    }
`

export const TitleApplications = styled.h1`
    color: var(--greyDark);
    font-size: 1.2rem;
    margin: 1rem;
`




