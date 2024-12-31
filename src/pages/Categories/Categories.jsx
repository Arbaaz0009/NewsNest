import React, { useState, useEffect } from 'react';
import './Categories.css';
import Lists from './Lists.jsx';
import { fetchSectionLists, fetchWithSection } from '../../api/FetchData';
import Loading from '../../components/Loading/Loading.jsx';
import NewsFeed from '../../components/Newsfeed/NewsFeed.jsx';

const Categories = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [choosenCategories, setChoosenCategories] = useState([]);
  const [sections, setSections] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showNews, setShowNews] = useState(false);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await fetchSectionLists();
        const data = response.results.map((item) => ({
          section: item.section,
        }));
        setSections(data);
      } catch (error) {
        console.error('Error fetching sections:', error);
      }
    };

    fetchSections();
  }, []);

  const handleSelect = (category) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };

  const handleApply = async () => {
    setChoosenCategories(selectedCategories);
    setSelectedCategories([]);
    setIsLoading(true);

    if (selectedCategories.length > 4) {
      setTimeout(async () => {
        try {
          const promises = selectedCategories.map(async (category, index) => {
            const response = await fetchWithSection(category);
            const data = response.results?.map((item) => {
              const title = item.title || '';
              const description = item.abstract || '';
              const logo = item.multimedia?.[2]?.url || item.multimedia?.[0]?.url || '';
              const url = item.url || '';
              const id = `${category}-${index}-${title}`; // Unique key

              if (title && description && logo && url) {
                return {
                  title,
                  description,
                  logo,
                  url,
                  id,
                };
              }
            }).filter(Boolean);
            return data;
          });

          if (selectedCategories.length > 10) {
            alert('Please select up to 10 categories');
            return;
          }
          const fetchedData = await Promise.all(promises);
          setData(fetchedData.flat());
        } catch (error) {
          console.error('Error fetching news:', error);
        } finally {
          setIsLoading(false);
          setShowNews(true);
        }
      }, 6000);
    } else {
      try {
        const promises = selectedCategories.map(async (category, index) => {
          const response = await fetchWithSection(category);
          const data = response.results?.map((item) => {
            const title = item.title || '';
            const description = item.abstract || '';
            const logo = item.multimedia?.[2]?.url || item.multimedia?.[0]?.url || '';
            const url = item.url || '';
            const id = `${category}-${index}-${title}`;

            if (title && description && logo && url) {
              return {
                title,
                description,
                logo,
                url,
                id,
              };
            }
          }).filter(Boolean);
          return data;
        });

        const fetchedData = await Promise.all(promises);
        setData(fetchedData.flat());
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
        setShowNews(true);
      }
    }
  };

  const handleCancel = () => {
    setSelectedCategories([]);
    setChoosenCategories([]);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (showNews) {
    return <NewsFeed data={data.map(item => ({ ...item, discription: item.description }))} />;
  }

  return (
    <div className="categories">
      <h2>Categories</h2>
      <ul className="lists">
        {sections.map(({ section }) => (
          <Lists
            key={section}
            category={section}
            selectedCategories={selectedCategories}
            handleSelect={handleSelect}
          />
        ))}
      </ul>
      {selectedCategories.length > 0 && (
        <div>
          <hr />
          <p>Chosen categories:</p>
          <ul className="lists">
            {selectedCategories.map((category, index) => (
              <li className="list-item" key={`${category}-${index}`}>
                {category}
              </li>
            ))}
          </ul>
          <div className="controls">
            <button onClick={handleApply} className='applyBtn'>Apply</button>
            <button onClick={handleCancel} className='cancelBtn'>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;


