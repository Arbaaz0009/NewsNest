import { useState, startTransition } from 'react';
import './Default.css'
import NewsFeed from '../../components/Newsfeed/NewsFeed.jsx'
import { useEffect } from 'react';
import { fetchLatestNews, fetchArticles } from '../../api/FetchData';
import Loading from '../../components/Loading/Loading.jsx';
const Default = () => {
  const [isloading, setIsloading] = useState(true);
  const [data, setData] = useState([]);


  useEffect(() => {
    if (data.length === 0) {
      try {
        async function fetchData() {

          const response = await fetchLatestNews();

          const data = response.results
            .filter((item) => item.title && item.abstract && item.multimedia[2]?.url && item.url)
            .map((item) => ({
              title: item.title,
              discription: item.abstract,
              logo: item.multimedia[2]?.url || item.multimedia[3]?.url || item.multimedia[1]?.url || item.multimedia[0]?.url,
              url: item.url,
              id: `${item.title}-${Math.floor(Math.random() * 1000)}`,
            }))
          startTransition(() => {
            setData(data);
            // setInterval(() => {
              setIsloading(false);
            // }, [1000])
          });
        }

        fetchData();
      } catch (error) {
        console.error(error);
      }
    }
  }, []);
  if (isloading) {
    return <Loading />;
  }
  return (
    <div className='container'>
      <NewsFeed data={data} />
    </div>
  )
}

export default Default
