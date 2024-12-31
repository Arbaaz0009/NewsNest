import axios from "axios";

//Exapmle of how to fetch data
export const fetchArticles = async (query) => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  try {
    const url = `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${API_KEY}`;
    const response = await axios.get(url);
    
    return response.data; // Return only the data part
  } catch (error) {
    console.log(error);
    return null; // In case of an error, return null
  }
};
export const fetchSearch = async (query) => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  try {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`;
    const response = await axios.get(url);
    
    return response.data; // Return only the data part
  } catch (error) {
    console.log(error);
    return null; // In case of an error, return null
  }
};
export const fetchWithSection = async (section) => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  try {
    const url = `https://api.nytimes.com/svc/news/v3/content/all/${section}.json?api-key=${API_KEY}`;
    const response = await axios.get(url);
   
    return response.data; // Return only the data part
  } catch (error) {
    console.log(error);
    return null; // In case of an error, return null
  }
};
export const fetchSectionLists = async () => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  try {
    const url = `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${API_KEY}`;
    const response = await axios.get(url);
   
    return response.data; // Return only the data part
  } catch (error) {
    console.log(error);
    return null; // In case of an error, return null
  }
};
export const fetchHealthNews = async () => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  try {
    const url = `https://api.nytimes.com/svc/news/v3/content/all/Health.json?api-key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data; // Return only the data part
  } catch (error) {
    console.log(error);
    return null; // In case of an error, return null
  }
};
export const fetchTechnologyNews = async () => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  try {
    const url = `https://api.nytimes.com/svc/news/v3/content/all/Technology.json?api-key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data; // Return only the data part
  } catch (error) {
    console.log(error);
    return null; // In case of an error, return null
  }
};
export const fetchSportsNews = async () => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  try {
    const url = `https://api.nytimes.com/svc/news/v3/content/all/Sports.json?api-key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data; // Return only the data part
  } catch (error) {
    console.log(error);
    return null; // In case of an error, return null
  }
};
export const fetchBusinessNews = async () => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  try {
    const url = `https://api.nytimes.com/svc/news/v3/content/all/Business.json?api-key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data; // Return only the data part
  } catch (error) {
    console.log(error);
    return null; // In case of an error, return null
  }
};
export const fetchLatestNews = async () => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  try {
    const url = `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data; // Return only the data part
  } catch (error) {
    console.log(error);
    return null; // In case of an error, return null
  }
};
