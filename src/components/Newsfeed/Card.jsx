import React, { useRef } from 'react'
import "./NewsFeed.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
const Card = ({ logo, title, discription }) => {
  const bookref = useRef();
  function openBookmark() {
    bookref.current.style.visibility = "visible";
  }
  function CloseBookmark() {
    bookref.current.style.visibility = "hidden";
  }
  
  return (
    <div className='Card' onMouseEnter={openBookmark} onMouseLeave={CloseBookmark}>
      <div className="logo"><img src={logo} alt="" /></div>
      <div>
        <h2 className="title">{title}</h2>
        <p className="discription">{discription}</p>
      </div>
      <div  className='bookmark' ref={bookref}><FontAwesomeIcon icon={faBookmark} /></div>
    </div>
  )
}

export default Card
