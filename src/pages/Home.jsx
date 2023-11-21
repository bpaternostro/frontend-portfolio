import React, { useState } from 'react'
import { useGlobalContext } from '../context/GlobalContextProvider'
import { resumeStyle } from '../styles'
import { ExperienceSection, EducationSection, SkillSection } from '../components'
import {RxStar} from 'react-icons/rx'

const Home = () => {
  const {person} = useGlobalContext()
  const {first_name, last_name, summary, language, certification, aptitude, soft_skill, education, experience, social_contact, picture} = person || {};
  return (
    <main>
        <div className={ `${resumeStyle.container} ${resumeStyle.experienceParentContainer}`}>
          <div className={resumeStyle.about}>  
            <span>
              <img className={ resumeStyle.profileImage } src={picture}></img>
            </span>
            <span>
              <h1>{`${first_name}`} {`${last_name}`}</h1>
              <span>{summary}</span>
            </span>
          </div>
          <h2 className={ resumeStyle.title}>Experiences</h2>
          <div className={ resumeStyle.container }>
            {experience && experience.map((e)=> <ExperienceSection experience={e} key={e.id}/>)}
          </div>
          <h2 className={ resumeStyle.title}>Education</h2>
          <div className={ resumeStyle.container }>
            {education && education.map((e)=> <EducationSection education={e} key={e.id}/>)}
          </div>
        </div>
        <div className={ `${resumeStyle.container} ${resumeStyle.skillParentContainer}`}>
          <div className={ resumeStyle.container}>
            <h2 className={ resumeStyle.title}>Skills</h2>
            <div className={`${ resumeStyle.container} ${resumeStyle.boxContainer} ${resumeStyle.references}`}>
              <span><RxStar/><RxStar/><RxStar/> More than 3 years of experience</span>
              <span><RxStar/><RxStar/> Between 1 and 3 years of experience</span>
              <span><RxStar/> Less than 1 year of experience</span>
            </div>
          </div>
          <div className={ resumeStyle.container }>
            <h3 className={ resumeStyle.title}>Aptitudes</h3>
              {aptitude && <SkillSection skill={aptitude} />}
          </div>
          <div className={ resumeStyle.container }>
            <h3 className={ resumeStyle.title}>Certification</h3>
            {certification && <SkillSection skill={certification} />}
          </div>
          <div className={ resumeStyle.container }>
            <h3 className={ resumeStyle.title}>Language</h3>
            {language && <SkillSection skill={language} />}
          </div>
          <div className={ resumeStyle.container }>
            <h3 className={ resumeStyle.title}>Soft Skills</h3>
            {soft_skill && <SkillSection skill={soft_skill} />}
          </div>
        </div>
        
    </main>
  )
}

export default Home