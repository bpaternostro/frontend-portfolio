import React, { useState } from 'react'
import { buttonStyle, contactStyle } from '../styles'
import { useNavigate } from 'react-router';

const Contact = () => {
  const [data, setData] = useState({contact_type:0})
  const navigate = useNavigate()

  const updateData = e => {
    setData({
        ...data,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      fetch(import.meta.env.VITE_MESSAGE, {
        mode: 'cors',
        method: "post",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      .then( res => {
          if(!res.ok){
              throw new Error('X');
          }
          return res.json()
      })
      .then( data => {
        navigate('/success');
      })
      .catch( err => {
          console.log(err)
          return
      })
      .finally(() => {
          navigate('/success');
      })
      
  }
    
  return (
      <div className={contactStyle.contactContainer}>
        <div className={contactStyle.contactFormContainer}>
              <form onSubmit={handleSubmit} method='Post'>
                  <div>
                      <label>Full name *</label>
                      <input name="full_name" type="text" onChange={updateData} required/>
                      <span className={contactStyle.contactTypeContainer}>
                        <span>
                          <label>Contact Type *</label>
                          <select name="contact_type" defaultValue="0" onChange={updateData} required>
                            <option value="0">Mobile</option>
                            <option value="1">Email</option>
                          </select>
                        </span>
                        <span>
                          <label>Contact *</label>
                          <input name="contact" type="text" onChange={updateData} required/>
                        </span>
                      </span>
                      <label>Subject *</label>
                      <input name="subject" type="text" onChange={updateData} required/>
                      <label>Message *</label>
                      <textarea name="message" id="" cols="30" rows="10" onChange={updateData} required></textarea>
                  </div>
                  <div>
                      <button type="submit" className={buttonStyle.btnPrimary}>Send</button>
                  </div>
              </form>
        </div>
      </div>    
  )
}

export default Contact