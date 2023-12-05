import React, { useState } from 'react'
import { blogCardStyle, resumeStyle  } from '../../styles'
import { AiFillLike } from "react-icons/ai";
import { MdOutlinePreview } from "react-icons/md";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
  TwitterIcon,
} from "react-share";

import { Link } from 'react-router-dom'
import { MdUnfoldMore, MdOutlineUnfoldLess } from "react-icons/md";
import { API_ENDPOINTS } from '../../apiConfig';
import { getCookie } from '../../coreMethods';

const Blogcard = ({ name, category, summary, description, link, image, like, share, skill, view, hashtags,  id }) => {
  const[actualLike, setActualLike] = useState(like)
  const[actualShare, setActualShare] = useState(share)
  const[actualView, setActualview] = useState(view)
  const[likeWasClicked, setLikeWasClicked] = useState(false)
  const[shareWasClicked, setShareWasClicked] = useState(false)
  const [show, setShow] = useState(false)
  const csrfToken = getCookie('csrftoken');

  const reaction = (field) => {
    fetch(`${API_ENDPOINTS.postReaction}/${id}/register-reaction/`, {
      mode: 'cors',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken,
      },
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
          <img src={image} alt={summary} />
        </span>
        <span>
          <div className={blogCardStyle.postName}>{name}</div>
          <div className={blogCardStyle.postSummary}>
            <span>{summary}</span>
            <span>
              {show ? < MdOutlineUnfoldLess className={resumeStyle.expandContractButton} onClick={() => setShow(!show)} color={"var(--expand-post-button)"} size={25}/>: <MdUnfoldMore className={resumeStyle.expandContractButton} onClick={() => setShow(!show)} color={"var(--expand-post-button)"} size={25} />} 
            </span>
          </div>
          <div style={{display: show ? 'block' : 'none' }} className={blogCardStyle.postDescription}>{description.split("<br>").map((p) => <p className={blogCardStyle.postParagraph} key={p}>{p}</p>)}</div>
          <div className={resumeStyle.skillContainer}>
              {
                skill.map((t) => <span className={ resumeStyle.skillBullet} key={t}>{t}</span>)
              }  
          </div>
          <div className={blogCardStyle.interactiveBar}>
            <span>
              <span>
                <span><Link to={link} target="_blank" onClick={(event) => reaction("3")}><MdOutlinePreview color={"#33BBC5"} size={25} /></Link></span>
                <span className={blogCardStyle.shareCount}>{actualView}</span>
              </span>
              <span><span><button onClick={(event) => reaction("1")} disabled={likeWasClicked}><AiFillLike color={"#FFF"} size={20} /></button></span><span className={blogCardStyle.shareCount}>{actualLike}</span></span>
            </span>
            <span>
              <span className={blogCardStyle.socialNetworkShareBar}>
                  <FacebookShareButton
                    url={link}
                    onClick={(event) => reaction("2")}
                    quote={summary}
                    hashtag={hashtags}
                    image={`${API_ENDPOINTS.portfolioUrl}/${image}`}
                  >
                    <FacebookIcon size={25} round />
                  </FacebookShareButton>
                  <LinkedinShareButton
                    url={link}
                    onClick={(event) => reaction("2")}
                    quote={summary}
                    hashtag={hashtags}
                    image={`${API_ENDPOINTS.portfolioUrl}/${image}`}
                  >
                    <LinkedinIcon size={25} round />
                  </LinkedinShareButton>
                  <TelegramShareButton
                    url={link}
                    onClick={(event) => reaction("2")}
                    quote={summary}
                    hashtag={hashtags}
                    image={`${API_ENDPOINTS.portfolioUrl}/${image}`}
                  >
                    <TelegramIcon size={25} round />
                  </TelegramShareButton>
                  <WhatsappShareButton
                    url={link}
                    onClick={(event) => reaction("2")}
                    quote={summary}
                    hashtag={hashtags}
                    image={`${API_ENDPOINTS.portfolioUrl}/${image}`}
                  >
                    <WhatsappIcon size={25} round />
                  </WhatsappShareButton>
                  <TwitterShareButton
                    url={link}
                    onClick={(event) => reaction("2")}
                    quote={summary}
                    hashtag={hashtags}
                    image={`${API_ENDPOINTS.portfolioUrl}/${image}`}
                  >
                    <TwitterIcon size={25} round />
                  </TwitterShareButton>
                  <RedditShareButton
                    url={link}
                    onClick={(event) => reaction("2")}
                    quote={summary}
                    hashtag={hashtags}
                    image={`${API_ENDPOINTS.portfolioUrl}/${image}`}
                  >
                    <RedditIcon size={25} round />
                  </RedditShareButton>
                  <span className={blogCardStyle.shareCount}>{actualShare}</span>
              </span>
            </span>
          </div>
        </span>
    </div>
  )
}

export default Blogcard