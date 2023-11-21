import React from 'react'
import { indexStyle } from '../styles'

const Success = () => {
  return (
    <main>
          <h3 className={indexStyle.successMessage}>Your message was sent successfully!<br></br> I will contact you as soon as possible. <span>&#128512;</span> </h3>
    </main>
  )
}

export default Success