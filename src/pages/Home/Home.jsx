import Header from '../../components/Header/Header'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import { AuthAction } from '../../store/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Home.css';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let email = localStorage.getItem('Email');
    let userName = localStorage.getItem('Name');

    if (!email || !userName) {
      dispatch(AuthAction.logout());
    } else {
      dispatch(AuthAction.setData({ email, userName }));
    }
  }, []);
  const handleClick = (e) => {
    if (location.pathname === '/categories') {
      e.preventDefault();
      window.location.reload();
    }
  };

  return (
    <div className='home'>
      <Header />
      <div className="navbar">
        <li><NavLink to="/" end style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "red" : "black",
        })}
        >Home</NavLink></li>
        <li><NavLink to="/bookmarks" style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "red" : "black",
        })}
        >Bookmarks</NavLink></li>
        <li><NavLink to="/categories" onClick={handleClick} style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "red" : "black",
        })}
        >Categories</NavLink></li>
        <li><NavLink to="/about" style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "red" : "black",
        })}
        >About</NavLink></li>
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Home

