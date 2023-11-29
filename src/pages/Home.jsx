import React, { useState } from 'react'
import { useGlobalContext } from '../context/GlobalContextProvider'
import { resumeStyle, indexStyle } from '../styles'
import { ExperienceSection, EducationSection, SkillSection, SkillSectionInstitute, SkillSectionNoLevel, SkillSectionLanguage } from '../components'
import { LuHexagon } from "react-icons/lu";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { ImLocation } from "react-icons/im";

const Home = () => {
  const {person} = useGlobalContext()
  const {first_name, last_name, summary, language, certification, aptitude, soft_skill, education, experience, social_contact, picture} = person || {};
  const [showAptitudes, setShowAptitudes] = useState(false)
  const [showCertifications, setShowCertifications] = useState(false)
  const [showLanguage, setShowLanguage] = useState(false)
  const [showSoftSkills, setShowSoftSkills] = useState(false)

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
              {experience && experience.map((e)=> <div className={ resumeStyle.homeSectionContainer }><div><div className={ resumeStyle.timelineContainer }><ImLocation color={"var(--location-icon-color)"} /></div></div><ExperienceSection experience={e} key={e.id}/></div>)}
              <span className={ resumeStyle.vertical }></span>
            </div>
            <h2 className={ resumeStyle.title}>Education</h2>
            <div className={ resumeStyle.container }>
              {education && education.map((e)=> <div className={ resumeStyle.homeSectionContainer }><div><div className={ resumeStyle.timelineContainer }><ImLocation color={"var(--location-icon-color)"}/></div></div><EducationSection education={e} key={e.id}/></div>)}
              <span className={ resumeStyle.vertical }></span>
            </div>
          </div>
              <div className={ `${resumeStyle.container} ${resumeStyle.skillParentContainer}`}>
                <div className={ resumeStyle.container}>
                  <h2 className={ resumeStyle.title}>Skills</h2>
                  <div className={`${ resumeStyle.container} ${resumeStyle.boxContainer} ${resumeStyle.references}`}>
                    <div><span><LuHexagon color={"var(--references-color-icon)"} size={18}/><LuHexagon color={"var(--references-color-icon)"} size={18}/><LuHexagon color={"var(--references-color-icon)"} size={18}/></span><span> More than 3 years of experience</span></div>
                    <div><span><LuHexagon color={"var(--references-color-icon)"} size={18}/><LuHexagon color={"var(--references-color-icon)"} size={18}/></span><span> Between 1 and 3 years of experience</span></div>
                    <div><span><LuHexagon color={"var(--references-color-icon)"} size={18}/></span><span> Less than 1 year of experience</span></div>
                  </div>
                </div>
                <div className={ resumeStyle.container }>
                  <div onClick={() => setShowAptitudes(!showAptitudes)} className={resumeStyle.clickContainer}>
                    <h3 className={ resumeStyle.title}>Aptitudes</h3>
                    {showAptitudes ? <MdExpandLess className={resumeStyle.expandContractButton} color={"var(--expand-skill-button)"} size={25}/>: <MdExpandMore className={resumeStyle.expandContractButton} onClick={() => setShowAptitudes(!showAptitudes)} color={"var(--expand-skill-button)"} size={25} />} 
                  </div>
                  <div style={{display: showAptitudes ? 'block' : 'none' }} >
                    {aptitude && <SkillSection skill={aptitude} skillType={"aptitude"} />}
                  </div>
                </div>
                <div className={ resumeStyle.container }>
                  <div onClick={() => setShowCertifications(!showCertifications)} className={resumeStyle.clickContainer}>
                    <h3 className={ resumeStyle.title}>Certification</h3>
                    {showCertifications ? <MdExpandLess className={resumeStyle.expandContractButton} color={"var(--expand-skill-button)"} size={25}/>: <MdExpandMore className={resumeStyle.expandContractButton} onClick={() => setShowCertifications(!showCertifications)} color={"var(--expand-skill-button)"} size={25} />} 
                  </div>
                  <div style={{display: showCertifications ? 'block' : 'none' }} >
                    {certification && <SkillSectionInstitute skill={certification} skillType={"certification"} />}
                  </div>
                </div>
                <div className={ resumeStyle.container }>
                  <div onClick={() => setShowLanguage(!showLanguage)} className={resumeStyle.clickContainer}>
                    <h3 className={ resumeStyle.title}>Language</h3>
                    {showLanguage ? <MdExpandLess className={resumeStyle.expandContractButton}  color={"var(--expand-skill-button)"} size={25}/>: <MdExpandMore className={resumeStyle.expandContractButton} onClick={() => setShowLanguage(!showLanguage)} color={"var(--expand-skill-button)"} size={25} />}
                  </div>
                  <div style={{display: showLanguage ? 'block' : 'none' }} >
                    {language && <SkillSectionLanguage skill={language} skillType={"language"}/>}
                  </div>
                </div>
                <div className={ resumeStyle.container }>
                  <div onClick={() => setShowSoftSkills(!showSoftSkills)} className={resumeStyle.clickContainer}>
                    <h3 className={ resumeStyle.title}>Soft Skills</h3>
                    {showSoftSkills ? <MdExpandLess className={resumeStyle.expandContractButton} color={"var(--expand-skill-button)"} size={25}/>: <MdExpandMore className={resumeStyle.expandContractButton} onClick={() => setShowSoftSkills(!showSoftSkills)} color={"var(--expand-skill-button)"} size={25} />}
                  </div>
                  <div style={{display: showSoftSkills ? 'block' : 'none' }} >
                    {soft_skill && <SkillSectionNoLevel skill={soft_skill} skillType={"soft_skill"}/>}
                  </div>
                </div>
              </div>
          </div> 
    </main>
  )
}

export default Home