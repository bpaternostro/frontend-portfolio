import React from 'react'
import { Link } from 'react-router-dom'
import { resumeStyle, indexStyle } from '../../styles'
import { MdGpsFixed } from "react-icons/md";

const ExperienceSection = ({experience}) => {
  const {task, skill, title, start_date, end_date, company, url_company, logo} = experience || {}
  return (
    <div className={`${ resumeStyle.container} ${indexStyle.boxContainer}`}>
      <div className={ resumeStyle.experienceContainerBullets }>
        <div className={ resumeStyle.timelineContainer }>
          <div className={ resumeStyle.timelineContainerAbs }>
            <span className={ resumeStyle.dateContainer }>
              <span className={ resumeStyle.dates}>{end_date ?  end_date : "Currently"}</span>
              <span className={ resumeStyle.dates}>{start_date}</span>
              <span className={ resumeStyle.vertical }></span>
            </span>
          </div>
        </div>
        <div className={`${ resumeStyle.experienceContainer} ${indexStyle.boxContainer}`} >
          <span className={ resumeStyle.company}>
            <img src={logo} alt={company} />
            <Link to={url_company} target="_blank">{company}</Link>
          </span>
          <span className={ resumeStyle.title}>{title}</span>
          <h3 className={ resumeStyle.subTitle}>Tasks</h3>
          <span>
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
  )
}

export default ExperienceSection