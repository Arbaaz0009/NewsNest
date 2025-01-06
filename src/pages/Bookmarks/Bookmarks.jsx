import { useState, useEffect } from 'react'
import NewsFeed from '../../components/Newsfeed/NewsFeed';
import Loading from '../../components/Loading/Loading';
import { use } from 'react';
import { startTransition } from 'react-dom';
import { useSelector } from 'react-redux';

import "./Bookmarks.css";
const Bookmarks = () => {
  const [isloading, setIsloading] = useState(true);
  const [data, setData] = useState([]);
  const [hasData, setHasData] = useState(true);
  const email = useSelector((state) => state.auth.email);
  useEffect(() => {
    try {
      async function fetchData() {

        let response = await fetch("https://newsnestserver.onrender.com/bookmarks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        });
        response = await response.json();
        console.log(response);
        if (response.bookmarks.length === 0) {
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
    }
  }, []);
  if (isloading) {
    return <Loading />;

  }
  return (
    <div className='bookmarks'>
      <NewsFeed data={data} />

    </div>
  )
}

export default Bookmarks

