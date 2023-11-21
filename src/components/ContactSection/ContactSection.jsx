import React from 'react'
import { resumeStyle, indexStyle } from '../../styles'
import { Link } from 'react-router-dom'
import {ImHome3} from 'react-icons/im'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaDownload } from "react-icons/fa";

const ContactSection = ({email, phone, address, social_contact}) => {

  const DynamicFaIcon = (name) => {
    const Icons = {
      "Git": <FaGithub color={"#FFF"} size={25} className={resumeStyle.iconContactSection}/>,
      "Linkedin": <FaLinkedin color={"#FFF"} size={25} className={resumeStyle.iconContactSection}/>,
      "Email": <MdEmail color={"#FFF"} size={25} className={resumeStyle.iconContactSection}/>,
      "Mobile": <IoLogoWhatsapp color={"#FFF"} size={25} className={resumeStyle.iconContactSection}/>,
      "Resume": <FaDownload color={"#FFF"} size={25} className={resumeStyle.iconContactSection}/>
    };
    return Icons[name];
  };

  return (
    <div className={`${ resumeStyle.contactContainer} ${indexStyle.boxContainer}`}>
      <div className={ resumeStyle.contactDetail }>
        <div className={ resumeStyle.contactIconsContainer}>
          {
            social_contact && social_contact.map((s, index) => <Link className={ resumeStyle.contactBullet} to={s.contact} target="_blank" key={index}>{DynamicFaIcon(s.name)}</Link>)
          }
        </div>
      </div>
    </div>
  )
}

export default ContactSection