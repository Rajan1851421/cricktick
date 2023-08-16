import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CricketRankings = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [tblheader, setTblheader] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    handleButtonClick1();
  }, []);

  const handleButtonClick1 = () => {
    setLoading(true); // Show loading message
    axios
      .get(`https://backend-ekms.onrender.com/cricinfo/MenTeamsTestRanking/`)
      .then(response => {
        //console.log(response)
        if (response.status == 200) {
          const parsedData = JSON.parse(response.data.data);
          setTableData(parsedData);
          setTblheader('Men Team Test Ranking');
          setLoading(false); // Hide loading message when data is received
        } else {
          setTblheader('');
          setLoading(false); // Hide loading message when no data is available
        }
      })
      .catch(error => {
        //console.log(error);
        setLoading(false); // Hide loading message on error
      });
    setSelectedTable(1);
  };

  // Table 2 API Integration

  const handleButtonClick2 = () => {
    setLoading(true);
    axios
      .get(`https://backend-ekms.onrender.com/cricinfo/MenODITeamsRanking/`)
      .then(response => {
        if (response.status == 200)  {
          setTableData(JSON.parse(response.data));
          setTblheader('Men  ODI Teams Ranking');
          setLoading(false);
        } else {
          setTblheader('');
          setLoading(false);
        }
        //console.log(response.statusText);
      })
      .catch(error => {
        //console.log(error);
        setLoading(false);
      });
    setSelectedTable(2);
  };

  const handleButtonClick3 = () => {
    setLoading(true);
    axios
      .get(`https://backend-ekms.onrender.com/cricinfo/MenT20TeamsRanking/`)
      .then(response => {
        if (response.status == 200)  {
          setTableData(JSON.parse(response.data));
          setTblheader('Men  T20 Teams Ranking');
          setLoading(false);
        } else {
          setTblheader('');
          setLoading(false);
        }
      })
      .catch(error => {
        //console.log(error);
        setLoading(false);
      });
    setSelectedTable(3);
  };

  return (
    <>
      <div className='container-fluid' id='AdminEmp'>
        <div className='container mt-5' id='AdminEmp'>
          <div>
            <button
              onClick={handleButtonClick1}
              className='btn btn-light mx-3 my-5'
              style={{ backgroundColor: '#321c60', color: 'white' }}
            >
              Men's Test Rankings
            </button>
            <button
              onClick={handleButtonClick2}
              className='btn btn-light mx-3 my-5'
              style={{ backgroundColor: '#321c60', color: 'white' }}
            >
              Men's ODI Rankings
            </button>
            <button
              onClick={handleButtonClick3}
              className='btn btn-light mx-3 my-5'
              style={{ backgroundColor: '#321c60', color: 'white' }}
            >
              Men's T20 Rankings
            </button>

            {/* Show loading message */}
            {loading && <p>Loading Data...</p>}

            {/* Show no data message */}
            {!loading && selectedTable !== null && tableData.length === 0 && (
              <p>No data available</p>
            )}

            {/* table 1 */}
            {selectedTable === 1 && !loading && tableData.length > 0 && (
              <>
                <h3 className='text-center my-2' id='h1'>
                  {tblheader}
                </h3>
                <table className='table table-border'>
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Team</th>
                      <th>Rating</th>
                      <th>Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((team, index) => (
                      <tr key={index}>
                        <td>{team.Rank}</td>
                        <td>{team.Team}</td>
                        <td>{team.Rating}</td>
                        <td>{team.Points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}

            {/* table 2 */}
            {selectedTable === 2 && !loading && tableData.length > 0 && (
              <>
                <h3 className='text-center my-2' id='h1'>
                  {tblheader}
                </h3>
                <table className='table table-border'>
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Team</th>
                      <th>Rating</th>
                      <th>Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((team, index) => (
                      <tr key={index}>
                        <td>{team.Rank}</td>
                        <td>{team.Team}</td>
                        <td>{team.Rating}</td>
                        <td>{team.Points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}

            {/* table 3 */}
            {selectedTable === 3 && !loading && tableData.length > 0 && (
              <>
                <h3 className='text-center my-2' id='h1'>
                  {tblheader}
                </h3>
                <table className='table table-border'>
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Team</th>
                      <th>Rating</th>
                      <th>Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((team, index) => (
                      <tr key={index}>
                        <td>{team.Rank}</td>
                        <td>{team.Team}</td>
                        <td>{team.Rating}</td>
                        <td>{team.Points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CricketRankings;
