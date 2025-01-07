import { startTransition, useRef } from 'react';
import "./NewsFeed.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Card = ({ logo, title, discription, url, id, isBookmark }) => {
  const bookref = useRef();
  const email = useSelector((state) => state.auth.email);
  const server = import.meta.env.VITE_SERVER_URL;
  const navigate = useNavigate();
  function AddBookmark() {
    try {
      const res = fetch(`${server}/bookmark`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          bookmark: {
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

  function removeBookmark(params) {
    try {
      const res = fetch(`${server}/remove-bookmark`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          id: id
        }),
      });
      console.log(res);
      
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => {
      navigate(0);
    }, 1000);
  }
  function navigateToSite() {
    if (url) {
      window.open(url, '_blank');
    }
  }

  return (
    <div className='Card' >
      <div className="logo" onClick={navigateToSite}><img src={(logo) ? logo : "/defaultImg.png"} alt="" draggable="false" /></div>
      <div>
        <h4 className="title">{title}</h4>
        <p className="discription">{discription}</p>
      </div>
      <div className='bookmark' ref={bookref} 
      onClick={(!isBookmark)?AddBookmark:removeBookmark}><FontAwesomeIcon icon={faBookmark} /></div>
    </div>
  )
}

export default Card
