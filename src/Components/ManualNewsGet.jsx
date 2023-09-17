import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsSubscribe from './Newssubscibe';
import PageNotFound from './PageNotFound'

function ManualNewsGet() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); // Updated error state
  const [loading, setLoading] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState(-1);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get('https://liveupcomingpro-production-f9ac.up.railway.app/manual_news/get_post_social/')
      .then(function (response) {
        const newsData = response.data;
        const currentDate = new Date();
        const filteredNews = newsData.filter(
          (newsItem) =>
            new Date(newsItem.date).toDateString() === currentDate.toDateString()
        );

        setData(filteredNews);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(function (error) {
        setError(error); // Set the error state if an error occurs
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  const isMoreThan20Words = (text) => {
    const words = text.split(' ');
    return words.length > 20;
  };

  const truncateText = (text, maxWords) => {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ');
    }
    return text;
  };

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <>
      <div className='container-fluid py-3 d-flex justify-content-center align-items-center mt-5' id='AdminEmp'>
        <div className='container'>
          <NewsSubscribe />
          {loading ? (
            <p className='text-center'>Loading...</p>
          ) : error ? ( // Check for the error state
            <p className='text-center'><PageNotFound/></p>
          ) : (
            <div className='row'>
              {data.map((item, index) => {
                return (
                  <div className='col-md-10 mb-3' key={index}>
                    <div className='card' id='AdminEmp'>
                      <div className='row g-0'>
                        <div className='col-md-4'>
                          <img
                            src={item.upload_photo}
                            className='img-fluid rounded-start'
                            alt='Card'
                          />
                        </div>
                        <div className='col-md-8'>
                          <div className='card-body'>
                            <h5 className='card-title' id='h1'>
                              {item.title}
                            </h5>
                            <p className='card-text' id='h1'>
                              {isMoreThan20Words(item.description) && expandedIndex !== index
                                ? truncateText(item.description, 20) + '...'
                                : item.description}
                            </p>
                            {isMoreThan20Words(item.description) && (
                              <button
                                className='btn btn-link'
                                onClick={() => toggleExpand(index)}
                              >
                                {expandedIndex === index ? 'Read Less' : 'Read More'}
                              </button>
                            )}
                            <p className='text-text' id='h1'>
                              {item.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ManualNewsGet;
