import React from 'react'
import { ApplyButton, BottomWrap, CompanyName, Date, HorizontalLine, JobDescription, JobType, JobWrapper, Salary, SalaryWrap, Title } from './JobsElements'

const Jobs = ({jobs, selectedJobPage, toggleJobPage }) => {

    const duties = "Certified Nursing Assistants help perform critical tasks that ensure patients are well-cared for and safe during their hospital stay. Checking vital signs, keeping patients clean, and other duties like this are extremely important for patient care and satisfaction."

  return (
    <JobWrapper selectedJobPage={selectedJobPage}>
        <Title>{jobs.title || "Assistant Nurse Aid"}</Title>
        <CompanyName>{jobs.company || "UK Care Connections"}</CompanyName>
        <SalaryWrap>
            <Salary>{jobs.salary + "/Month" || "$500/Month"}</Salary>
            <JobType>{jobs.profession || "Nurse Aid"}</JobType>
        </SalaryWrap>
        <JobDescription>{jobs.description || duties}</JobDescription>
        <HorizontalLine />
        <BottomWrap>
            <Date>{jobs.date}</Date>
            <ApplyButton onClick={() => toggleJobPage('jobDetails')}>Apply Now</ApplyButton>
        </BottomWrap>
    </JobWrapper>
  )
}

export default Jobs