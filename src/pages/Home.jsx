import React, { useState } from 'react'
import { useGlobalContext } from '../context/GlobalContextProvider'
import { resumeStyle, indexStyle } from '../styles'
import { ExperienceSection, EducationSection, SkillSection, SkillSectionInstitute, SkillSectionNoLevel, SkillSectionLanguage } from '../components'
import { LuHexagon } from "react-icons/lu";
import { FaSourcetree } from "react-icons/fa";

const Home = () => {
  const {person} = useGlobalContext()
  const {first_name, last_name, summary, language, certification, aptitude, soft_skill, education, experience, social_contact, picture} = person || {};
  return (
    <main>
        <div>
            <div className={resumeStyle.about}>  
                <span>
                  <img className={ resumeStyle.profileImage } src={picture}></img>
                </span>
                <span>
                  <h1>{`${first_name}`} {`${last_name}`}</h1>
                  <span>{summary}</span>
                </span>
            </div>
        </div>
        <div>
          <div className={ `${resumeStyle.container} ${resumeStyle.experienceParentContainer}`}>
            <h2 className={ resumeStyle.title}>Experiences</h2>
            <div className={ resumeStyle.container }>
              {experience && experience.map((e)=> <div className={ resumeStyle.homeSectionContainer }><div><div className={ resumeStyle.timelineContainer }><FaSourcetree/></div></div><ExperienceSection experience={e} key={e.id}/></div>)}
              <span className={ resumeStyle.vertical }></span>
            </div>
            <h2 className={ resumeStyle.title}>Education</h2>
            <div className={ resumeStyle.container }>
              {education && education.map((e)=> <div className={ resumeStyle.homeSectionContainer }><div><div className={ resumeStyle.timelineContainer }><FaSourcetree/></div></div><EducationSection education={e} key={e.id}/></div>)}
              <span className={ resumeStyle.vertical }></span>
            </div>
          </div>
              <div className={ `${resumeStyle.container} ${resumeStyle.skillParentContainer}`}>
                <div className={ resumeStyle.container}>
                  <h2 className={ resumeStyle.title}>Skills</h2>
                  <div className={`${ resumeStyle.container} ${resumeStyle.boxContainer} ${resumeStyle.references}`}>
                    <span><LuHexagon color={"var(--references-color-icon)"} size={18}/><LuHexagon color={"var(--references-color-icon)"} size={18}/><LuHexagon color={"var(--references-color-icon)"} size={18}/> More than 3 years of experience</span>
                    <span><LuHexagon color={"var(--references-color-icon)"} size={18}/><LuHexagon color={"var(--references-color-icon)"} size={18}/> Between 1 and 3 years of experience</span>
                    <span><LuHexagon color={"var(--references-color-icon)"} size={18}/> Less than 1 year of experience</span>
                  </div>
                </div>
                <div className={ resumeStyle.container }>
                  <h3 className={ resumeStyle.title}>Aptitudes</h3>
                    {aptitude && <SkillSection skill={aptitude} skillType={"aptitude"} />}
                </div>
                <div className={ resumeStyle.container }>
                  <h3 className={ resumeStyle.title}>Certification</h3>
                  {certification && <SkillSectionInstitute skill={certification} skillType={"certification"} />}
                </div>
                <div className={ resumeStyle.container }>
                  <h3 className={ resumeStyle.title}>Language</h3>
                  {language && <SkillSectionLanguage skill={language} skillType={"language"}/>}
                </div>
                <div className={ resumeStyle.container }>
                  <h3 className={ resumeStyle.title}>Soft Skills</h3>
                  {soft_skill && <SkillSectionNoLevel skill={soft_skill} skillType={"soft_skill"}/>}
                </div>
              </div>
          </div> 
    </main>
  )
}

export default Home