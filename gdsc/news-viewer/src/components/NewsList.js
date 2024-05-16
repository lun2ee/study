import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
// import styled from 'styled-components';
import axios from 'axios';
import '../style/main.scss';

// const NewsListBlock = styled.div`
//   box-sizing: border-box;
//   padding-bottom: 3rem;
//   width: 768px;
//   margin: 0 auto;
//   margin-top: 2rem;
//   @media screen and(max-width:768px) {
//     width: 100%;
//     padding-left: 1rem;
//     padding-right: 1rem;
//   }
// `;

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160',
  // 받을 데이터
};

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=e6a9b70aea5a4dd1b265f13208bebe74'
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
    return <div className="NewsListBlock"> 대기 중...</div>;
  }
  if (!articles) {
    return null;
  }
  return (
    <div className="NewsListBlock">
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
