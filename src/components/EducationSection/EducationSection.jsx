import React from 'react'
import { Tooltip } from '../../components'
import { resumeStyle, indexStyle } from '../../styles'
import { SiGooglescholar } from 'react-icons/si'
import { HiMiniBuildingLibrary } from 'react-icons/hi2'
import { PiCertificate } from 'react-icons/pi'
import { BsOctagonHalf, BsOctagonFill } from "react-icons/bs";

const EducationSection = ({education}) => {
  const {title, summary, institute, start_date, end_date, is_certification, status_name} = education || {}
  return (
    <div className={`${ resumeStyle.container} ${indexStyle.boxContainer}`}>
      <div className={ resumeStyle.experienceContainerBullets }>
        <div className={`${ resumeStyle.educationContainer} ${indexStyle.boxContainer}`}>
          <span className={ resumeStyle.titleBubble}><span>{ is_certification ? <PiCertificate color={"#FFF"}/>: <SiGooglescholar color={"#FFF"} />}</span><span>{title}</span></span>
          <span>
              <span className={ resumeStyle.dates}>{end_date ?  end_date : "Currently"}</span>
              <span className={ resumeStyle.dates}>{start_date}</span>
          </span>
          <span className={ resumeStyle.instituteBubble}>
            <span><HiMiniBuildingLibrary/></span>
            <span className={ resumeStyle.sectionFilterCategory}>{institute}</span>
            <Tooltip text={status_name}>
                { status_name==="Completed" ? <BsOctagonFill size={16}/>: <BsOctagonHalf size={16}/> }
            </Tooltip>
          </span>
          <span className={ summary ? resumeStyle.educationSummary: resumeStyle.educationSummaryHidden}>{summary}</span>
        </div>
        </div>
    </div>
  )
}

export default EducationSection