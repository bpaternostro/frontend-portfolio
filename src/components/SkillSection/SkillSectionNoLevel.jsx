import React from 'react'
import { resumeStyle, indexStyle } from '../../styles'

const SkillSection = ({skill}) => {
  return (
    <div className={`${ resumeStyle.container} ${indexStyle.boxContainer}`}>
      {
        Object.entries(skill).map(([key, value]) => (  
          <div className={resumeStyle.skillMenuContainerSoft} key={key}>
            {value.map((s) => {
              const {id, name} = s
              return  <span className={resumeStyle.skillBulletAside} key={id}>{name}</span>
            })}
          </div>
        ))
      }
    </div>
  )
}

export default SkillSection