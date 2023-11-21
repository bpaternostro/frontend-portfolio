import React from 'react'
import { useGlobalContext } from '../context/GlobalContextProvider'

const UnderConstruction = () => {
  const {person} = useGlobalContext()
  return (
    <main>
        <h2>{JSON.stringify(person, null, 2) }</h2>
    </main>
  )
}

export default UnderConstruction