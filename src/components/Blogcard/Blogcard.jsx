import React, { useState } from 'react'
import { blogCardStyle, resumeStyle  } from '../../styles'
import { AiFillLike } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { MdOutlinePreview } from "react-icons/md";

import { Link } from 'react-router-dom'

const Blogcard = ({ name, category, summary, description, link, image, like, share, skill, view,  id }) => {
  const[actualLike, setActualLike] = useState(like)
  const[actualShare, setActualShare] = useState(share)
  const[actualView, setActualview] = useState(view)
  const[likeWasClicked, setLikeWasClicked] = useState(false)
  const[shareWasClicked, setShareWasClicked] = useState(false)
  
  const reaction = (field) => {
    fetch(`${import.meta.env.VITE_REACTION}/${id}/register-reaction/`, {
      mode:  'cors', 
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "field": field
      })
    })
    .then( res => {
        if(!res.ok){
            throw new Error('X');
        }
        return res.json()
    })
    .then( data => {
        if(field === "3"){
          setActualview(actualView + 1)
        }else if(field === "2"){
          setActualShare(share +1)
          setShareWasClicked(true)
        }else{
          setActualLike(like + 1)
          setLikeWasClicked(true)
        }
    })
    .catch( err => {
      console.log(err)
    })
  }
  return (
    <div className={`${ blogCardStyle.post } ${blogCardStyle.boxContainer}`}>
        <span className={blogCardStyle.imageContainer}>
          <img src={`${import.meta.env.VITE_PORTFOLIO_API_URL}/${image}`} alt={summary} />
        </span>
        <span>
          <div className={blogCardStyle.postName}>{name}</div>
          <div className={blogCardStyle.postSummary}>{summary}</div>
          <div className={blogCardStyle.postDescription}>{description.split("<br>").map((p) => <p className={blogCardStyle.postParagraph} key={p}>{p}</p>)}</div>
          <div className={resumeStyle.skillContainer}>
              {
                skill.map((t) => <span className={ resumeStyle.skillBullet} key={t}>{t}</span>)
              }  
          </div>
          <div className={blogCardStyle.interactiveBar}>
            <span><span><Link to={link} target="_blank" onClick={(event) => reaction("3")}><MdOutlinePreview color={"#33BBC5"} size={25} /></Link></span><span><span>{actualView}</span></span></span>
            <span><span><button onClick={(event) => reaction("1")} disabled={likeWasClicked}><AiFillLike color={"#FFF"} size={20} /></button></span><span>{actualLike}</span></span>
            <span><span><button onClick={(event) => reaction("2")} disabled={shareWasClicked}><FaShareAlt color={"#FFF"} size={20} /></button></span><span>{actualShare}</span></span>
          </div>
        </span>
    </div>
  )
}

export default Blogcard