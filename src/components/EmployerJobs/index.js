import React from 'react'
import { BottomWrap, Company, ContentWrap, FullTime, HorizontalWrap, IconWrap, JobContainer, Location, OutterContainer, Salary, Text, Title, Urgent } from './EmployerJobsElements'
import {AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai'
import { IconContext } from 'react-icons'

const EmployerJobs = ({ shortWidth }) => {
    const jobDesc = "Certified Nursing Assistants help perform critical tasks that ensure patients are well-cared for and safe during their hospital stay. Checking vital signs, keeping patients clean, and other duties like this are extremely important for patient care and satisfaction."
    
    return (
    <OutterContainer shortWidth={shortWidth}>
    <JobContainer>
        <ContentWrap>
            <Title>Nurse Aid</Title>
            <Company>UK Care Connection</Company>
            <HorizontalWrap>
                <Salary>$500 / month</Salary>
            </HorizontalWrap>
            <HorizontalWrap>
                <FullTime>Full Time</FullTime>
                <Location>Madrid</Location>
            </HorizontalWrap>
            <Text>{jobDesc}</Text>
        </ContentWrap>
        <BottomWrap>
            {/* Edit */}
            {/* Delete */}
            <IconContext.Provider value={{
                color: 'var(--green)',
                size: '1.3rem'
                }}>
                <IconWrap>
                    <AiOutlineEdit />
                </IconWrap>
            </IconContext.Provider>
            <IconContext.Provider value={{
                color: 'red',
                size: '1.2rem'
                }}>
                <IconWrap>
                    <AiOutlineDelete />
                </IconWrap>
            </IconContext.Provider>
        </BottomWrap>
    </JobContainer>
    </OutterContainer>
  )
}

export default EmployerJobs