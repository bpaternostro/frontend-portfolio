import React from 'react'
import { filterStyle, indexStyle } from '../../styles'
import { useGlobalContext } from '../../context/GlobalContextProvider'

const Filter = () => {
  const {categories, filterFields, handleFilterFields} = useGlobalContext()
  return (
    <div className={`${ filterStyle.filter} ${filterStyle.boxContainer}`}>
      <div className={ filterStyle.filterContainer }>
        <span className={ filterStyle.sectionFilter}>Filters</span>
        <span className={ filterStyle.sectionFilterCategory}>Skills</span>
        <div>
          {
            categories.map((category) => (
              <div key={category}>
                <button className={ filterStyle.filterToApplied} onClick={() => handleFilterFields(`skill-${category}`)}>{category}</button>
              </div>
            ))
          }
        </div>
      </div>
      <div className={ filterStyle.appliedFilterContainer }>
        <span className={ filterStyle.sectionFilter}>Applied filters</span>
          {
            filterFields.filter(f => f.includes("skill")).length ?
            <div>
              <span className={ filterStyle.sectionFilterCategory}>Skill</span>
              {
                filterFields.filter(f => f.includes("skill")).map((filter) =>(
                  <div key={filter}>
                    <button className={ filterStyle.appliedFilter} onClick={() => handleFilterFields(filter)}>{filter.split('-')[1]}</button>
                  </div>
                ))
              }
            </div> : <div></div>
          }
      </div>
    </div>
  )
}

export default Filter