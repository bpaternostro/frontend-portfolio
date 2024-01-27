import React from 'react'
import {Route, Routes } from 'react-router-dom'
import { Home, Contact, Success, UnderConstruction, Error404, Blog} from '../pages'
import '../styles/index.module.css'

import { ROOT } from '../apiConfig'

const PageRouter = () => {
  return (
    <>
      <Routes>
            <Route path={ROOT} element={<Home/>} />
            <Route path={`${ROOT}/blog`} element={<Blog/>} />
            <Route path={`${ROOT}/contact`} element={<Contact/>} />
            <Route path={`${ROOT}/under-construction`} element={<UnderConstruction/>} />
            <Route path={`${ROOT}/success`} element={<Success/>} />
            <Route path='*' element={<Error404/>} /> 
      </Routes>
    </>
  )
}

export default PageRouter