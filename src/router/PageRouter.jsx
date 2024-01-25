import React from 'react'
import {Route, Routes } from 'react-router-dom'
import { Home, Contact, Success, UnderConstruction, Error404, Blog} from '../pages'
import '../styles/index.module.css'

const PageRouter = () => {
  return (
    <>
      <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/under-construction' element={<UnderConstruction/>} />
            <Route path='/success' element={<Success/>} />
            <Route path='/ecommerce' component={() => {
                window.location.href = 'https://bpaternostro.site/ecommerce';
                return null;
            }}/>
            <Route path='*' element={<Error404/>} /> 
      </Routes>
    </>
  )
}

export default PageRouter