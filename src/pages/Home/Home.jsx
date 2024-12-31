import {useEffect} from 'react'
import Header from '../../components/Header/Header'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import './Home.css'
import {fetchArticles} from '../../api/FetchData'
import { use } from 'react'
const Home = () => {
  useEffect(() => {
    async function data() {
      const response = await fetchArticles("Sports");
      console.log(response);
    }
    data();
  },[]);

  return (
    <div className='home'>
      <Header />
      <div className="navbar">
        <li><NavLink to="" style={({isActive})=>({ fontWeight: isActive ? 'bold' : 'normal' })}>Home</NavLink></li>
        <li><NavLink to="/bookmarks" style={({isActive})=>({ fontWeight: isActive ? 'bold' : 'normal' })}>Bookmarks</NavLink></li>
        <li><NavLink to="/categories" style={({isActive})=>({ fontWeight: isActive ? 'bold' : 'normal' })}>Categories</NavLink></li>
        <li><NavLink to="/about" style={({isActive})=>({ fontWeight: isActive ? 'bold' : 'normal' })}>About</NavLink></li>
      </div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Home
