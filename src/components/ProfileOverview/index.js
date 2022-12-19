import React, { useEffect, useState } from 'react'
import { Text, SubTitle, Title } from '../ProfileInfo/ProfileInfoElements'
import { EducationContainer, EducationDetailsWrap, EducationWrap, Language, Letter, LetterWrap, OverviewWrap, SkillsContainer, SkillsWrap } from './ProfileOverviewElements'
import { FirebaseStorage } from '../../controls'

const ProfileOverview = ({ data, selectedProfile }) => {
    // const about = "Developer with over 5 years' experience working in both the public and private sectors. Diplomatic, personable, and adept at managing sensitive situations. Highly organized, self-motivated, and proficient with computers. Looking to boost students’ satisfactions scores for International University. Bachelor's degree in communications" +

    // "It describes the candidate's relevant experience, skills, and achievements. The purpose of this career summary is to explain your qualifications for the job in 3-5 sentences and convince the manager to read the whole resume document.";
  
    // const desc = "There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.";

    const [dataObj, setData] = useState([])

    useEffect(() => {
      async function getData() {
        const data = await FirebaseStorage().getData('applicants', localStorage.getItem('userEmail'))
        setData(data)
      }

      getData()
    }, [])

  return (
    <OverviewWrap selectedProfile={selectedProfile}>
          <Title>About</Title>
          <Text className='overview-intro'></Text>

          
          <EducationContainer>
          <Title>Education</Title>
              {
                dataObj['qualifications']?.map((item, index) => {
                  return (
                      <EducationWrap key={index}>
                        <LetterWrap>
                            <Letter>{item.degree.charAt(0)}</Letter>
                        </LetterWrap>
                        <EducationDetailsWrap>
                          <SubTitle>{item.degree}</SubTitle>
                          <Text>{item.institution} - ({item.yearStart.substring(0, 4)} - {item.yearEnd.substring(0, 4)})</Text>
                          <Text>{item.intro}</Text>
                        </EducationDetailsWrap>
                      </EducationWrap>
                  )
                })
              }
          </EducationContainer>

          <Title>Experiences</Title>
          <EducationContainer>
            {
              dataObj['experience']?.map((item, index) => {
                  return (
                    <EducationWrap key={index}>          
                      <LetterWrap>
                          <Letter>{item.title.charAt(0)}</Letter>
                      </LetterWrap>
                      <EducationDetailsWrap>
                        <SubTitle>{item.title}</SubTitle>
                        <Text>{item.company} - ({item.yearStart.substring(0, 4)} -{item.yearEnd.substring(0, 4)})</Text>
                        <Text>{item.intro}</Text>
                      </EducationDetailsWrap>
                    </EducationWrap>
                  )
              })
            }
          </EducationContainer>

          <Title>Spoken Languages</Title>
          <SkillsContainer>
            {
              dataObj['languages']?.map((item, index) => {
                return (
                  <SkillsWrap key={index}>
                    <Language className='overview-languages'>{item}</Language>
                  </SkillsWrap>
                )
              })
            }
          </SkillsContainer>
    </OverviewWrap>
  )
}

export default ProfileOverview