import React from 'react'
import "./NewsFeed.css";
import Card from './Card';
const NewsFeed = () => {
  let logo = './Logo.png';
  let title = 'this is title';
  let discription = 'this is discription.this is discription.this is discription.this is discription.this is discription';

  return (
    <div className='newsfeed'>
      <Card logo={logo} title={title} discription={discription} />
      <Card logo={logo} title={title} discription={discription} />
      <Card logo={logo} title={title} discription={discription} />
      <Card logo={logo} title={title} discription={discription} />
      <Card logo={logo} title={title} discription={discription} />
      <Card logo={logo} title={title} discription={discription} />
      <Card logo={logo} title={title} discription={discription} />
      <Card logo={logo} title={title} discription={discription} />
      <Card logo={logo} title={title} discription={discription} />
      <Card logo={logo} title={title} discription={discription} />
      <Card logo={logo} title={title} discription={discription} />
    </div>
  )
}

export default NewsFeed
