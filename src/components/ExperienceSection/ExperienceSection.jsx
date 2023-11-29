import {react, useState} from 'react'
import { Link } from 'react-router-dom'
import { resumeStyle, indexStyle } from '../../styles'
import { MdUnfoldMore, MdOutlineUnfoldLess } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const ExperienceSection = ({experience}) => {
  const {task, skill, title, start_date, end_date, company, url_company, logo} = experience || {}
  const [show, setShow] = useState(false)
  return (
    <div className={`${ resumeStyle.container} ${indexStyle.boxContainer}`}>
      <div className={ resumeStyle.experienceContainerBullets }>
        <div className={`${ resumeStyle.experienceContainer} ${indexStyle.boxContainer}`} >
          <div className={ `${ resumeStyle.company} ${resumeStyle.clickContainer}`} onClick={() => setShow(!show)}>
            <span>
              <img src={logo} alt={company} />
              <span>
                <Link to={url_company} target="_blank">{company}</Link>
                <span className={ resumeStyle.title}>
                < FaRegUser className={resumeStyle.roleExperienceIcon} color={"var(--role-experience-icon)"} size={18}/>
                  {title ? title : ""}
                </span>
              </span>
            </span>
            {show ? < MdOutlineUnfoldLess className={resumeStyle.expandContractButton} color={"var(--expand-experience-button)"} size={25}/>: <MdUnfoldMore className={resumeStyle.expandContractButton} onClick={() => setShow(!show)} color={"var(--expand-experience-button)"} size={25} />} 
          </div>
          <div style={{display: show ? 'block' : 'none' }} >
            <div>
                <span>
                    <span className={ resumeStyle.dates}>{end_date ?  end_date : "Currently"}</span>
                    <span className={ resumeStyle.dates}>{start_date}</span>
                </span>
                <h3 className={ resumeStyle.subTitle}>Tasks</h3>
                <span className={ resumeStyle.summaryContainer} >
                  <ul>
                    {
                      task.map((t, index) => <li className={ resumeStyle.sectionTask} key={index}>{t}</li>)
                    }
                  </ul>
                </span>
                <h3 className={ resumeStyle.subTitle}>Tech stack</h3>
                <span className={ resumeStyle.skillContainer}>
                  {
                    skill.map((t) => <span className={ resumeStyle.skillBullet} key={t.id}>{t.name}</span>)
                  }  
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceSection