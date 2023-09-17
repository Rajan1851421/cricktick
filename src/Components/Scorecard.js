import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Scorecard() {
  const [scorecards, setScorecards] = useState([]);
  const [selectedScorecard, setSelectedScorecard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get('https://backend-ekms.onrender.com/cricinfo/scorecard/')
      .then(response => {
        //console.log(response.data)
        setScorecards(response.data);
        setIsLoading(false) // Assuming the response contains an array of scorecards
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleButtonClick = index => {
    setSelectedScorecard(scorecards[index]);

  };

  return (
    <div className='container-fluid py-3' id='AdminEmp'>
      <div className='container my-5 '>
        {isLoading ? (
          <p className='text-center'>Loading...</p>
        ) : (
          scorecards.map((scorecard, index) => (
            <>
              {/* {console.log("Raj", scorecard)} */}
              <button key={index} className="btn btn-primary mx-2 mt-2" onClick={() => handleButtonClick(index)} disabled={scorecard.length < 1} >
                View Scorecard
              </button>
            </>
          )
          )
        )}
      </div>
      {selectedScorecard && (
        <div className='container'>

          <div className="1stInnings border p-3 rounded my-3">

            <h3 id='h1'>1st Innings</h3>
            {Object.keys(selectedScorecard[0][0]).slice(0, 1).map((key, index) => (
              <h3 id='h1' key={index} className='px-3'> {key.replace('Batters', '')}</h3>
            ))}
            <div className="table-responsive">
              <table className='table table-sm w-100'>

                <thead >
                  <tr>
                    <th className='py-1 pl-1'>Batter</th>
                    <th className='py-1 pl-1'>R</th>
                    <th className='py-1 pl-1'>B</th>
                    <th className='py-1 pl-1'>4s</th>
                    <th className='py-1 pl-1'>6s</th>
                    <th className='py-1 pl-1'>SR</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Render the table rows based on the selectedScorecard */}

                  {selectedScorecard[0].map((batter, batterIndex) => (
                    <tr key={batterIndex}>
                      {/* <td className="py-1">{index}</td>              */}
                      {/* <td className="py-1">{batter[(Object.keys(scorecards[index][0][0])[0])]}</td> */}
                      <td className="py-1">{batter[(Object.keys(batter)[0])]}</td>
                      <td className="py-1">{batter['R']}</td>
                      <td className="py-1">{batter['B']}</td>
                      <td className="py-1">{batter['4s']}</td>
                      <td className="py-1">{batter['6s']}</td>
                      <td className="py-1">{batter['SR']}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className=' fall-of-wickets my-2'>
              <p id='h1'><strong>Fall of Wickets: &nbsp;</strong>{selectedScorecard[1][0]['Fall of Wickets']}</p>
            </div>
            <h3 id='h1'>Bowling: &nbsp;
              {Object.keys(selectedScorecard[2][0]).slice(0, 1).map((key, index) => (
                <span id='h1' key={index} className='px-3'>{key.replace('Bowlers', '')}</span>
              ))}
            </h3>
            <div className="table-responsive">
              <table className='table table-sm w-100'>
                <thead>
                  <tr>
                    <th className='px-3'>Bowler</th>
                    <th className='px-3'>O</th>
                    <th className='px-3'>M</th>
                    <th className='px-3'>R</th>
                    <th className='px-3'>W</th>
                    <th className='px-3'>Econ</th>
                    <th className='px-3'>Dots</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedScorecard[2].map((bowler, bowlerIndex) => (
                    <tr key={bowlerIndex}>
                      <td className="py-1">{bowler[(Object.keys(bowler)[0])]}</td>
                      <td className="py-1">{bowler['O']}</td>
                      <td className="py-1">{bowler['M']}</td>
                      <td className="py-1">{bowler['R']}</td>
                      <td className="py-1">{bowler['W']}</td>
                      <td className="py-1">{bowler['Econ']}</td>
                      <td className="py-1">{bowler['Dots']}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="2ndInnings border p-3 rounded" id='AdminEmp'>
            <h3 id='h1'>2nd Innings</h3>
            {Object.keys(selectedScorecard[3][0]).slice(0, 1).map((key, index) => (
              <h3 id='h1' key={index} className='px-3'>{key.replace('Batters', '')}</h3>
            ))}
            <div className="table-responsive">
              <table className="table table-sm w-100" id='h1'>
                <thead >
                  <tr>
                    <th className='px-3'>Batter</th>
                    <th className='px-3'>R</th>
                    <th className='px-3'>B</th>
                    <th className='px-3'>4s</th>
                    <th className='px-3'>6s</th>
                    <th className='px-3'>SR</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Render the table rows based on the selectedScorecard */}
                  {selectedScorecard[3].map((batter, batterIndex) => (
                    <tr key={batterIndex}>
                      <td className="py-1">{batter[(Object.keys(batter)[0])]}</td>
                      <td className="py-1">{batter['R']}</td>
                      <td className="py-1">{batter['B']}</td>
                      <td className="py-1">{batter['4s']}</td>
                      <td className="py-1">{batter['6s']}</td>
                      <td className="py-1">{batter['SR']}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className=' fall-of-wickets my-2'>
              <p id='h1'><strong>Fall of Wickets: &nbsp;</strong>{selectedScorecard[4][0]['Fall of Wickets']}</p>
            </div>
            <h3 id='h1'>Bowling: &nbsp;
              {Object.keys(selectedScorecard[5][0]).slice(0, 1).map((key, index) => (
                <span id='h1' key={index} className='px-3'>{key.replace('Bowlers', '')}</span>
              ))}
            </h3>
            <div className="table-responsive">
              <table className='w-100'>
                <thead>
                  <tr>
                    <th className='px-3'>Bowler</th>
                    <th className='px-3'>O</th>
                    <th className='px-3'>M</th>
                    <th className='px-3'>R</th>
                    <th className='px-3'>W</th>
                    <th className='px-3'>Econ</th>
                    <th className='px-3'>Dots</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedScorecard[5].map((bowler, bowlerIndex) => (
                    <tr key={bowlerIndex}>
                      <td className="py-1">{bowler[(Object.keys(bowler)[0])]}</td>
                      <td className="py-1">{bowler['O']}</td>
                      <td className="py-1">{bowler['M']}</td>
                      <td className="py-1">{bowler['R']}</td>
                      <td className="py-1">{bowler['W']}</td>
                      <td className="py-1">{bowler['Econ']}</td>
                      <td className="py-1">{bowler['Dots']}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Scorecard;
