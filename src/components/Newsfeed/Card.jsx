import { useRef } from 'react';
import "./NewsFeed.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { useSelector } from 'react-redux';
const Card = ({ logo, title, discription, url, id }) => {
  const bookref = useRef();
  const email = useSelector((state) => state.auth.email);
  function openBookmark() {
    bookref.current.style.visibility = "visible";
  }
  function CloseBookmark() {
    bookref.current.style.visibility = "hidden";
  }
  function AddBookmark() {
    try {
      const res = fetch("https://newsnestserver.onrender.com/bookmark", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          email: email,
          bookmark:{
            logo: logo,
            title: title,
            discription: discription,
            url: url,
            id: id
          },
        }),
      });
    } catch (error) {
      console.error(error);

    }
  }
  function navigateToSite() {
    if (url) {
      window.open(url, '_blank');
    }
  }

  return (
    <div className='Card' onMouseEnter={openBookmark} onMouseLeave={CloseBookmark} >
      <div className="logo" onClick={navigateToSite}><img src={(logo) ? logo : "/defaultImg.png"} alt="" draggable="false" /></div>
      <div>
        <h4 className="title">{title}</h4>
        <p className="discription">{discription}</p>
      </div>
      <div className='bookmark' ref={bookref} onClick={AddBookmark}><FontAwesomeIcon icon={faBookmark} /></div>
    </div>
  )
}

export default Card
