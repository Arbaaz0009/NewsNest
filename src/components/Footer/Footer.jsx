import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="left">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bookmarks">Bookmarks</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/about">About</Link></li>
          </ol>
        </div>
        <div className="right">
          <span>Follow me on:</span>
          <a href='https://x.com/arbazan73404630'><img src="/Twitter.png" alt=""  /></a>
          <a href='https://www.instagram.com/arbaz_an009/'><img src="/Instagram.png" alt="" /></a>
          <a href='https://github.com/Arbaaz0009'><img src="/Github.png" alt="" /></a>
          <a href='https://www.linkedin.com/in/arbaz-ansari-588181264/https://www.linkedin.com/in/arbaz-ansari-588181264/ '><img src="/Linkedin.png" alt="" /></a>
        </div>
      </div>
      <div className="bottom"><p>Copyright <FontAwesomeIcon icon={faCopyright}/> 2024 Arbaz</p></div>
    </div>
  )
}

export default Footer
