import React from 'react'
import "./NewsFeed.css";
import Card from './Card';
const NewsFeed = ({ data,isBookmark ,setLoad}) => {


  return (
    <div className='newsfeed'>
      {data.map((item) => (
        <Card
          logo={item.logo}
          title={item.title}
          discription={item.discription}
          url={item.url}
          key={item.id}
          id={item.id} 
          isBookmark={isBookmark}
          
          setLoad={setLoad}
          />
      ))}
    </div>
  )
}

export default NewsFeed
