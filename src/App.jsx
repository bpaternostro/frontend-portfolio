import React from 'react'
import PageRouter from './router/PageRouter'
import { Navbar, Footer } from './components'

function App() {
  return (
    <>
      <Navbar/>
        <PageRouter/>
      <Footer/>
    </>
  )
}

export default App
