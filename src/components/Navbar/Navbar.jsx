import React, { useEffect, useState } from 'react'
import { navbarStyle, buttonStyle } from '../../styles'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoDocumentLock } from 'react-icons/io5'
import { ImHome3} from 'react-icons/im'
import { Link, useLocation } from 'react-router-dom'
import { useGlobalContext } from '../../context/GlobalContextProvider'
import { ContactSection } from '../../components'

import {ROOT} from '../../apiConfig'

const Navbar = () => {
    const {person, filterBySearchInputBox} = useGlobalContext()
    const {first_name, last_name, email, social_contact, phone, address} = person || {};
    const [show, setShow] = useState(false)
    const location = useLocation();
    const handleShowSearch = () => {
        setShow(!show)
    }
    return (
        <header>
            <div>
                <span>
                    {
                        show && <span style={{"display":"block"}}>
                                    <button className={buttonStyle.btnRemove} onClick={handleShowSearch}>x</button>
                                    <input type="text" name="search" id={navbarStyle.searchMobile} placeholder="Buscar ..." onChange={filterBySearchInputBox}/>
                                </span>
                    }
                </span>
                <span style={{display: show ? "none": "block"}}>
                    <nav>
                        <Link to={ROOT}>
                            <ImHome3 size={25}/>
                            { location.pathname ==='/' ? <span className={navbarStyle.sectionMark} style={{display:"block"}}></span> : <span className={navbarStyle.sectionMark} style={{display:"none"}}></span>}
                        </Link>
                        <Link to={`${ROOT}/blog`}>
                            Portfolio
                            { location.pathname ===`${ROOT}/blog` ? <span className={navbarStyle.sectionMark} style={{display:"block"}}></span> : <span className={navbarStyle.sectionMark} style={{display:"none"}}></span>}
                        </Link>
                        <Link to={`${ROOT}/contact`}>
                            Contact
                            { location.pathname ===`${ROOT}/contact` ? <span className={navbarStyle.sectionMark} style={{display:"block"}}></span> : <span className={navbarStyle.sectionMark} style={{display:"none"}}></span>}
                        </Link>
                        {
                            location.pathname ===`${ROOT}/blog` ?
                            <Link to="" id={navbarStyle.searchNavIcon} onClick={handleShowSearch}>
                                <AiOutlineSearch size={18} /></Link> : ""
                        } 
                    </nav>
                </span>
            </div>
            {
                location.pathname ===`${ROOT}/blog` ?
                <div className={navbarStyle.searchContainer}>
                    <span>
                        <AiOutlineSearch size={18} color={"#202032"} />
                    </span>
                    <input type="text" name="search" id={navbarStyle.searchMobile} placeholder="Buscar ..." onChange={filterBySearchInputBox} />
                </div>:<div></div>
            }
            <ContactSection email={email} phone={phone} social_contact={social_contact} address={address}/>
        </header>
    )
    }

export default Navbar