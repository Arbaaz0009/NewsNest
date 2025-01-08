import { startTransition, useEffect, useRef } from 'react';
import "./NewsFeed.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const Card = ({ logo, title, discription, url, id, isBookmark, setLoad }) => {
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
      async function deleteBookmark() {
        const res = await fetch(`${server}/remove-bookmark`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            id: id
          }),
        });
       if (res.ok ) {
        console.log("removed");
        setLoad();
       }else{
        console.log("failed to remove");
        
       }
      }
      deleteBookmark();

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
    <div className='Card' >
      <div className="logo" onClick={navigateToSite}><img src={(logo) ? logo : "/defaultImg.png"} alt="" draggable="false" /></div>
      <div>
        <h4 className="title">{title}</h4>
        <p className="discription">{discription}</p>
      </div>
      <div className='bookmark' ref={bookref}
        onClick={(!isBookmark) ? AddBookmark : removeBookmark}>
        {(!isBookmark) ? <FontAwesomeIcon icon={faBookmark} /> :
          <FontAwesomeIcon icon={faXmark} style={{ color: "red" }} />}
      </div>
    </div>
  )
}

export default Card
