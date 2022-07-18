import React from 'react'
import { ApplyButton, BottomWrap, CompanyName, Date, HorizontalLine, JobDescription, JobType, JobWrapper, Salary, SalaryWrap, Title } from './JobsElements'

const Jobs = () => {

    const duties = "Certified Nursing Assistants help perform critical tasks that ensure patients are well-cared for and safe during their hospital stay. Checking vital signs, keeping patients clean, and other duties like this are extremely important for patient care and satisfaction."

  return (
    <JobWrapper>
        <Title>Assistant Nurse Aid</Title>
        <CompanyName>UK Care Connections</CompanyName>
        <SalaryWrap>
            <Salary>$500/Month</Salary>
            <JobType>Nurse Aid</JobType>
        </SalaryWrap>
        <JobDescription>{duties}</JobDescription>
        <HorizontalLine />
        <BottomWrap>
            <Date>2 days ago</Date>
            <ApplyButton>Apply Now</ApplyButton>
        </BottomWrap>
    </JobWrapper>
  )
}

export default Jobs