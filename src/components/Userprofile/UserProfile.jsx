import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { AuthAction } from '../../store/auth'
import "./UserProfile.css"

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getColorByLetter = (letter) => {
    const charCode = letter.charCodeAt(0);
    const hue = (charCode - 65) * (360 / 26); // Spread across the hue spectrum
    const saturation = 70;
    const lightness = 50;
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`; // You can adjust saturation and lightness
    return {
      backgroundColor: color,
      color: lightness > 50 ? '#000' : '#fff' // Choose text color based on lightness
    };
  };

  const { backgroundColor, color } = getColorByLetter(user.userName.charAt(0).toUpperCase());

  const handleLogout = () => {
    dispatch(AuthAction.logout());
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='userProfile' style={{ position: 'relative' }} onClick={handleToggle}>
      <div className="user" style={{ backgroundColor, color }}>{user.userName.charAt(0).toUpperCase()}</div>

      {isOpen && (
        <div className="dropdown" style={{ }}>
          <p style={{ margin: '5px 0', fontWeight: 'bold' }}>{user.userName}</p>
          <p style={{ margin: '5px 0', color: '#555' }}>{user.email}</p>
          <button onClick={handleLogout} style={{ marginTop: '10px', padding: '5px 10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Log out</button>
        </div>
      )}

    </div>
  )
}

export default UserProfile

