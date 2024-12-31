import {useEffect} from 'react'
import Header from '../../components/Header/Header'
import { Link, Outlet } from 'react-router-dom'
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
        <li><Link to="">Home</Link></li>
        <li><Link to="/bookmarks">Bookmarks</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/about">About</Link></li>
      </div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Home
