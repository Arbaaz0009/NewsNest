import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import UserProfile from '../Userprofile/UserProfile'
import './Header.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const isauth = useSelector(state => state.auth.isauth);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  }
  return (
    <div className='header'>
      <div className="menu">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="serchbtn">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <div className="Logo"><img src="./Logo.png" alt="" /></div>
      <div className="profile">
        {
          (isauth)?<UserProfile />:<div onClick={handleLogin}>Login</div>
        }
      </div>

    </div>
  )
}

export default Header

