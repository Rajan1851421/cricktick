import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../Styles/Ranking.css";

function WomenTeamRanking() {
  const [team1HeaderName, setTeam1HeaderName] = useState('');
  const [team2HeaderName, setTeam2HeaderName] = useState('');
 

  const [team1, setTeam1] = useState([]);
  
  const [team2, setTeam2] = useState([]);
  
  const [error, setError] = useState('')

  const [isLoading, setIsLoading] = useState(false);

  const handleTeam = () => {
    setIsLoading(true);

    const t1 = axios.get('https://liveupcomingpro-production-f9ac.up.railway.app/cricinfo/WomenT20Teams/');
    const t2 = axios.get('https://liveupcomingpro-production-f9ac.up.railway.app/cricinfo/WomenODITeams/');
   
    axios.all([t1, t2])
      .then(axios.spread((t11, t22) => {
        // Team 1 ranking Data
        //console.log(t11)
        setTeam1(t11.data.data);
        setTeam1HeaderName(t11.statusText === "OK" ? 'Women T20 Teams Rank ' : 'Women T20 Teams Rank');

        // Team 2 ranking Data

        setTeam2(t22.data.data);

        setTeam2HeaderName(t22.statusText === "OK" ? 'Women ODI Teams Rank' : 'Women ODI Teams Rank');

        // Team 3 ranking Data
        

        setIsLoading(false);
      }))
      .catch((error) => {
        //console.log(error.statusText);
        console.error(error);

        setIsLoading(false);
        setError('No data');
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    handleTeam();
  }, []); // Dependency array

  return (
    <>
      <div className="container-fluid p-5" id="Team-rank-full-width">
        <div className="row">
          <div className="col-md-10 container  mt-3">
            <div className="container">
              <center>
                <h2 id="h1">{team1HeaderName}</h2>
              </center>
              {isLoading ? (
                <center>
                  <h6 className="text-center text-success" id='h1'>Please Wait.....</h6>
                </center>
              ) : error ? (
                <center>
                  <h2 className="text-center text-danger border"></h2>
                </center>
              ) : (
                <div className='container'>
                  <div className='table-responsive tableFixHead'>
                    <table className='table  table-hover'>
                      <thead>
                        {team1.length > 0 && (
                          <tr>
                            {team1[0].map((header, index) => (
                              <th key={index}>{header}</th>
                            ))}
                          </tr>
                        )}
                      </thead>
                      <tbody>
                        {Array.isArray(team1) && team1.length > 1 ? (
                          team1.slice(1).map((row, index) => (
                            <tr key={index}>
                              {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                              ))}
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <h3><td colSpan="5" className="text-center"></td></h3>

                          </tr>
                        )}
                      </tbody>
                    </table>

                  </div>

                </div>
              )}


              <center className="mt-5">
                <h2 id="h1">{team2HeaderName}</h2>
              </center>
              {isLoading ? (
                <center>
                  <h2 className="text-center d-none"></h2>
                </center>
              ) : (
                <div className='container'>
                  <div className="table-responsive tableFixHead">
                    <table className='table  table-hover'>
                      <thead>
                        {team2.length > 0 && (
                          <tr>
                            {team2[0].map((header, index) => (
                              <th key={index}>{header}</th>
                            ))}
                          </tr>
                        )}
                      </thead>
                      <tbody>
                        {Array.isArray(team2) && team2.length > 1 ? (
                          team2.slice(1).map((row, index) => (
                            <tr key={index}>
                              {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                              ))}
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="5" className="text-center text-danger">No data available</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                </div>
              )}

              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WomenTeamRanking;
