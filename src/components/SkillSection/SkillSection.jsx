import React from 'react'
import { resumeStyle, indexStyle } from '../../styles'
import { BsDiamondFill } from "react-icons/bs";

const SkillSection = ({skill}) => {
  return (
    <div className={`${ resumeStyle.container} ${indexStyle.boxContainer}`}>
      {
        Object.entries(skill).map(([key, value]) => (  
          <div className={resumeStyle.skillMenuContainer} key={key}>
            <p>{key!=="Other" ? key: ""}</p>
            {value.map((s) => {
              const {id, name, level} = s
              return  <div className={resumeStyle.skillBulletContainer}>
                        <span className={resumeStyle.skillBulletAside} key={id}>{name}</span>
                        <span>{[...Array(level+1)].map((e, i) => <BsDiamondFill key={i} color={"#FFF"} size={14} />)}</span>
                      </div>
            })}
          </div>
        ))
      }
    </div>
  )
}

export default SkillSection