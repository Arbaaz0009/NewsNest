import { useState, useRef } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import UserProfile from '../Userprofile/UserProfile'
import './Header.css'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
  const isauth = useSelector(state => state.auth.isauth);
  const navigate = useNavigate();
  const userName = useSelector(state => state.auth.userName) || "Guest";
  const email = useSelector(state => state.auth.email) || "Guest@gmail.com";
  const menuref = useRef();
  const handleLogin = () => {
    navigate("/login");
  }

  function openMenu() {
    menuref.current.style.display = 'block';
  }
  function closeMenu() {
    menuref.current.style.display = 'none';
  }

  return (
    <div className='header'>
      <div className="menu" onClick={openMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <nav id='sidebar' ref={menuref}>
        <span className='span'>
          <p>Name: {userName}</p>
          <p>Email: {email}</p>
        <div className="closebtn" onClick={closeMenu}><FontAwesomeIcon icon={faXmark} /></div>
        </span>


        <ul>
          <li><NavLink to="/" style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "red" : "black",
          })}>Home</NavLink></li>
          <li><NavLink to="/bookmarks" style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "red" : "black",
          })}>Bookmarks</NavLink></li>
          <li><NavLink to="/categories" style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "red" : "black",
          })}>Categories</NavLink></li>
          <li><NavLink to="/about" style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "red" : "black",
          })}>About</NavLink></li>
        </ul>
      </nav>

      <div className="Logo"><img src="./Logo.png" alt="" /></div>
      <div className="profile">
        {
          (isauth) ? <UserProfile /> : <div onClick={handleLogin}>Login</div>
        }
      </div>

    </div>
  )
}

export default Header

