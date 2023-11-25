import React from 'react'
import { resumeStyle, indexStyle } from '../../styles'
import {RxStar} from 'react-icons/rx'

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
                      </div>
            })}
          </div>
        ))
      }
    </div>
  )
}

export default SkillSection