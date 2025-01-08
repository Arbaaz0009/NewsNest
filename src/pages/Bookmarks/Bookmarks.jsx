import { useState, useEffect, useReducer } from 'react'
import NewsFeed from '../../components/Newsfeed/NewsFeed.jsx';
import Loading from '../../components/Loading/Loading';
import { use } from 'react';
import { startTransition } from 'react-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import "./Bookmarks.css";

const forceUpdateReducer = (state) => state + 1;
const Bookmarks = () => {
  const [ignored, forceUpdate] = useReducer(forceUpdateReducer, 0);
  const [isloading, setIsloading] = useState(true);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  
  const [hasData, setHasData] = useState(true);
  const email = localStorage.getItem("Email") ? localStorage.getItem("Email") : null;
  const server = import.meta.env.VITE_SERVER_URL;
  const isauth = useSelector(state => state.auth.isauth);

  function setLoad(params) {
    forceUpdate();
    
  }
  useEffect(() => {
    console.log("Bookmarks loaded");
    
    try {
      async function fetchData() {

        let response = await fetch(`${server}/bookmarks`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        });
        response = await response.json();

        if (response.bookmarks?.length === 0) {
          setHasData(false);
          console.log("No data");
        } else {
          setHasData(true);
          setData(response.bookmarks);
        }
        setIsloading(false);
      }

      fetchData();
    } catch (error) {
      console.error(error);
      setIsloading(false);
    }
  }, [ignored]);
  if (isloading) {
    return <Loading />;

  }
  return (
    <>
      {(isauth) ? <div className='bookmarks'>
        {(hasData) ? <NewsFeed data={data} isBookmark={true} setLoad={setLoad}  /> : <h1>No Bookmarks</h1>}
      </div> :
        <div className='bookmarks'>
          <h1>Please Login</h1>
        </div>}
    </>
  )
}

export default Bookmarks

