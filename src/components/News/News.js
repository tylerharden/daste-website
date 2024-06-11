import React, { useState, useEffect } from 'react';
import './News.css';
import newsData from '../../data/newsData.json';

// Import images
import image1 from '../../assets/1.daste-World-Poster-NoLogo.jpg';
// Import more images as needed

const imageMap = {
  image1,
  // Add more image mappings as needed
};

const NewsItem = ({ photo, title, description, link, linkButtonTitle }) => (
  <div className="news-item">
    <div className="news-content">
      {/* <h2 className="news-title">{title}</h2> */}
      <div className="news-photo-container">
      <img src={imageMap[photo]} alt={title} className="news-photo" />
    </div>
      {/* <p className="news-description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="news-link">
        {linkButtonTitle}
      </a> */}
    </div>
    
  </div>
);

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Filter and sort news items based on selectedToDisplay and orderInt
    const filteredNews = newsData
      .filter(item => item.selectedToDisplay)
      .sort((a, b) => a.orderInt - b.orderInt);
    setNews(filteredNews);
  }, []);

  return (
    <div className="news-list-container">
      <div className="news news-container">
        {news.map((item, index) => (
          <NewsItem
            key={index}
            photo={item.photo}
            // title={item.title}
            // description={item.description}
            link={item.link}
            linkButtonTitle={item.linkButtonTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
