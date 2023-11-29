import React, { useState } from 'react'
import { Tooltip } from '../../components'
import { resumeStyle, indexStyle } from '../../styles'
import { SiGooglescholar } from 'react-icons/si'
import { HiMiniBuildingLibrary } from 'react-icons/hi2'
import { PiCertificate } from 'react-icons/pi'
import { BsOctagonHalf, BsOctagonFill } from "react-icons/bs";
import { MdUnfoldMore, MdOutlineUnfoldLess } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";

const EducationSection = ({education}) => {
  const {title, summary, institute, start_date, end_date, is_certification, status_name} = education || {}
  const [show, setShow] = useState(false)
  return (
    <div className={resumeStyle.container}>
      <div className={ resumeStyle.experienceContainerBullets }>
        <div className={ resumeStyle.educationContainer }>
          <div onClick={() => setShow(!show)} className={resumeStyle.clickContainer}>
            <span className={ resumeStyle.titleBubble }>
              <span>{ is_certification ? <PiCertificate color={"#FFF"}/>: <FaUserGraduate color={"#FFF"} />}</span>
              <span>{title}</span>
            </span>
            {show ? < MdOutlineUnfoldLess className={resumeStyle.expandContractButton} color={"var(--expand-education-button)"} size={25}/>: <MdUnfoldMore className={resumeStyle.expandContractButton} onClick={() => setShow(!show)} color={"var(--expand-education-button)"} size={25} />} 
          </div>
          <div style={{display: show ? 'block' : 'none' }} >
            <div>
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
        </div>
    </div>
  )
}

export default EducationSection