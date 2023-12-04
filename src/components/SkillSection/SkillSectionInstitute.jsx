import React from 'react'
import { resumeStyle, indexStyle } from '../../styles'
import { LuHexagon } from "react-icons/lu";

const SkillSection = ({skill}) => {
  return (
    <div className={`${ resumeStyle.container} ${indexStyle.boxContainer}`}>
      {
        Object.entries(skill).map(([key, value]) => (  
          <div className={resumeStyle.skillMenuContainer} key={key}>
            <p>{key}</p>
            {value.map((s) => {
              const {id, name, level, institute} = s
              return  <div className={resumeStyle.skillBulletContainer} key={id}>
                        <span className={resumeStyle.skillBulletAside}>{name}</span>
                        <span>{[...Array(level+1)].map((e, i) => <LuHexagon key={i} color={"var(--skill-color-icon)"} size={16} />)}</span>
                      </div>
            })}
          </div>
        ))
      }
    </div>
  )
}

export default SkillSection