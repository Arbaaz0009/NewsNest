import Header from '../../components/Header/Header'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import './Home.css';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
        <li><NavLink to="">Home</NavLink></li>
        <li><NavLink to="/bookmarks">Bookmarks</NavLink></li>
        <li><NavLink to="/categories" onClick={handleClick}>Categories</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Home

