import React from 'react'
import { Link } from 'react-router-dom'
import { footerStyle } from '../../styles'
import { useGlobalContext } from '../../context/GlobalContextProvider'

const Footer = () => {
    const {person} = useGlobalContext()
    const {social_contact} = person || {};

    return (
        <footer>
            <div>
                <h3>Designer</h3>
                <p>Bruno Paternostro<br></br>
                Made in Argentina</p>
            </div>
            <div>
                <span>
                    <h4>Menu</h4>
                    <Link to="/">Home</Link>
                    <Link to="/blog">Portfolio</Link>
                    <Link to="/contact">Contact</Link>
                </span>
                <span>
                    <h4>Contact</h4>
                    {
                        social_contact && social_contact.map((s, index) => <Link to={s.contact} target="_blank" key={index}>{s.name}</Link>)
                    }
                </span>
            </div>
            <div>
                <Link to="/under-construction">2030 Bruno Paternostro.<br></br> All Rights Reserved.</Link>
                <Link to="/under-construction">Terms & Conditions</Link>
                <Link to="/under-construction">Privacy Policy</Link>
            </div>
        </footer>
  )
}

export default Footer