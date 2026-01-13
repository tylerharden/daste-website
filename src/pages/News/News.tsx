import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import './News.css';
import newsData from '../../data/newsData.json';
import SEO from '../../components/SEO';
import image1 from '../../assets/1.daste-World-Poster-NoLogo.jpg';

type NewsDataItem = {
  photo: string;
  title: string;
  description: string;
  link: string;
  selectedToDisplay: boolean;
  orderInt: number;
  linkButtonTitle: string;
};

const imageMap = {
  image1,
} as const;

const NewsItem = ({ photo, title, description, link, linkButtonTitle }: NewsDataItem) => {
  const imgSrc = (imageMap as Record<string, string>)[photo] ?? photo;

  return (
    <motion.div
      className="news-item"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="news-content">
        <div className="news-photo-container">
          <img src={imgSrc} alt={title} className="news-photo" />
        </div>

        {/* <h2 className="news-title">{title}</h2>
        <p className="news-description">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="news-link">
          {linkButtonTitle}
        </a> */}
      </div>
    </motion.div>
  );
};

const News = () => {
  const [news, setNews] = useState<NewsDataItem[]>([]);

  const filteredSortedNews = useMemo(() => {
    return (newsData as NewsDataItem[])
      .filter((item) => item.selectedToDisplay)
      .sort((a, b) => a.orderInt - b.orderInt);
  }, []);

  useEffect(() => {
    setNews(filteredSortedNews);
  }, [filteredSortedNews]);

  return (
    <>
      <SEO
        title="daste. News - Latest Updates, Releases & Announcements"
        description="Stay up to date with daste. Latest news, music releases, tour announcements, and band updates."
        url="https://daste.world/news"
        keywords="daste news, daste updates, daste announcements, daste new music, daste latest"
      />
      <div className="news-list-container">
        <div className="news news-container">
          {news.map((item) => (
            <NewsItem key={`${item.orderInt}-${item.title}`} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
