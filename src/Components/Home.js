import React, { useState, useEffect } from "react";
import "../Styles/home.css";
import { Link } from 'react-router-dom'
import axios from 'axios';
import ManualNewsGet from "./ManualNewsGet";
import TradingTweet from "./TradingTweet"

function ScoreTable() {
  const [scoreData, setScoreData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    window.scrollTo(0, 0);
    handleLivescore();
    const interval = setInterval(() => {
      handleLivescore();
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleLivescore = () => {
    axios
      .get('https://backend-ekms.onrender.com/cricinfo/Live_Interntonal/')
      .then(response => {
        //console.log(response.data);
        setScoreData(response.data);
        setIsLoading(false); // Set isLoading to false when data is fetched
      })
      .catch(error => {
        //console.log(error);
        setIsLoading(false); // Set isLoading to false on error as well
      });
  };

  const ScoreCard = ({ score, index }) => {
    const country1 = score.live[`teams&run`][index * 2] || '';
    const country2 = score.live[`teams&run`][index * 2 + 1] || '';

    
    return (
      <div className="col-sm-12 col-md-6 col-lg-4 my-3">
        <Link to='/scorecard' className="text-decoration-none">
          <div className="card h-100 shadow-lg rounded" key={index}>
            <div className="card-body d-flex flex-column" id="AdminEmp">
              <h6 className="card-title" id='h1'>{score.live.overview[index]}</h6> <hr />
              <div className='d-flex justify-content-between align-items-center '>
                {/* <span><img src={img1} className="img-fluid img-thumbnail" alt="Flag" /></span> */}
                <b><span className='text-right' id='h1' style={{color:'#321c60'}}>{country1}</span></b>
              </div>
              <div className='d-flex justify-content-between align-items-center my-1'>
                {/* <span><img src={img2} className="img-fluid img-thumbnail" alt="Flag" /></span> */}
                <b><span className='text-right' id='h1' style={{color:'#321c60'}}>{country2}</span></b>
              </div>
              <div className="mt-auto"> {/* This will push the result data to the bottom */}
                <p className="card-text text-center text-light rounded p-2 my-3" style={{ backgroundColor: "#321c60" }}>
                  {score.live.result[index]}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  };



  return (
    <>
      <div className='container-fluid py-3 mt-5 ' id='AdminEmp'>
        {/* On top show some score data on home page */}
        <div className="container">
          <div className="row">
            <div className="col">
              {isLoading ? ( // Show loading message while isLoading is true
                <center><h5>Please wait....</h5></center>
              ) : (
                scoreData && (
                  <div className="container">
                    <div className="row">
                      {scoreData.live.overview.slice(0, 3).map((_, index) => (
                        <ScoreCard score={scoreData} index={index} key={index} />
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="container" id='AdminEmp'>
          <div className="row">
            <div className="col-md-8">
              <Link to='/manualNewsGet' className='text-decoration-none'>
              <ManualNewsGet />
              </Link>
              
            </div>
            <div className="col-md-4">
              <TradingTweet />
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default ScoreTable;