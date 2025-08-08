import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './News.css';
import newsData from '../../data/newsData.json';
import image1 from '../../assets/1.daste-World-Poster-NoLogo.jpg';

const imageMap = {
  image1,
};

const NewsItem = ({ photo, title, description, link, linkButtonTitle }) => (
  <motion.div
    className="news-item"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
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
    
  </motion.div>
);

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
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
            link={item.link}
            linkButtonTitle={item.linkButtonTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
