import React, { useRef } from 'react'
import "./NewsFeed.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
const Card = ({ logo, title, discription,url }) => {
  const bookref = useRef();
  function openBookmark() {
    bookref.current.style.visibility = "visible";
  }
  function CloseBookmark() {
    bookref.current.style.visibility = "hidden";
  }
  function navigateToSite() {
    if (url) {
      window.open(url, '_blank'); 
    }
  }

  return (
    <div className='Card' onMouseEnter={openBookmark} onMouseLeave={CloseBookmark} >
      <div className="logo" onClick={navigateToSite}><img src={(logo)?logo:"/defaultImg.png"} alt="" draggable="false" /></div>
      <div>
        <h4 className="title">{title}</h4>
        <p className="discription">{discription}</p>
      </div>
      <div  className='bookmark' ref={bookref}><FontAwesomeIcon icon={faBookmark} /></div>
    </div>
  )
}

export default Card
