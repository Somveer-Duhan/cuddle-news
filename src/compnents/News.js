import React, { useState, useEffect, useCallback } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchArticles = useCallback(async (page) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=20`;
    let data = await fetch(url);
    if (!data.ok) {
      throw new Error(`HTTP error! status: ${data.status}`);
    }
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setPage(page);
  }, [props.category, props.apiKey]);

  useEffect(() => {
    fetchArticles(page);
  }, [fetchArticles, page]);

  const handlePreviousClick = async () => {
    fetchArticles(page - 1);
  };

  const handleNextClick = async () => {
    if (page + 1 <= Math.ceil(totalResults / 20)) {
      fetchArticles(page + 1);
    }
  };

  const headerStyle = {
    color: '#333',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '20px 0',
    textTransform: 'uppercase',
  };

  return (
    <div className='container my-3'>
      <h1 style={headerStyle}>Headlines</h1>
      <div className='news-grid'>
        {articles.length > 0 ? (
          articles.map((element) => {
            return (
              <NewsItem
                key={element.url}
                title={element.title || "No title available"}
                description={element.description || "No description available"}
                imageUrl={element.urlToImage || "https://via.placeholder.com/150"}
                newUrl={element.url}
                author={element.author || "unknown"}
              />
            );
          })
        ) : (
          <p>No articles found</p>
        )}
      </div>
      <div className='container-fluid d-flex justify-content-between'>
        <button disabled={page <= 1} type='button' onClick={handlePreviousClick} className='btn btn-dark'>&larr; Previous</button>
        <button type='button' onClick={handleNextClick} className='btn btn-dark'>Next &rarr;</button>
      </div>
    </div>
  );
};

News.defaultProps = {
  category: 'general',
};

News.propTypes = {
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
};

export default News;
