import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/Ranking.css';
import PageNotFound from "./PageNotFound"

const Upcoming_Events = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get('https://liveupcomingpro-production-f9ac.up.railway.app/cricinfo/InternetionalEvent/')
      .then((response) => {
        console.log(response);
        setData(response.data.dict);
      })
      .catch((error) => {
        //console.log(error);
      });
  }, []);

  return (
    <div className='container-fluid py-3 mt-5' id='AdminEmp'>
      <div className='container my-3' id='AdminEmp'>
        <div className='d-flex justify-content-center'>
          <h1 id='h1'>
            <img
              src='https://img.freepik.com/premium-vector/bat-playing-cricket-sport-vector-illustration-isolated-white-background_110233-2856.jpg?size=626&ext=jpg&ga=GA1.1.180599784.1691488875&semt=ais'
              alt=''
              style={{ height: '80px' }}
            />
            Match Events
          </h1>
        </div>

        {Object.keys(data).length === 0 ? (
          <p className='text-center'><PageNotFound/></p>
        ) : (
          <div className='table-responsive rounded tableFixHead' id='table'>
            <table className='table w-100'>
              <thead className='' style={{ color: '#4B059B' }}>
                <tr id='headerTable'>
                  <th>S.no</th>
                  <th>Event Venue</th>
                  <th>Team</th>
                  <th>Time</th>
                  <th>Date</th>
                  <th>Event</th>
                </tr>
              </thead>
              <tbody>
                {data.date_venue_event.map((event, index) => {
                  // Check if both teams exist before rendering the row
                  if (data.team[index] && data.team[index]) {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td> {/* Add 1 to the index */}
                        {/* <td>{data.date_venue_event[index * 2]} , {data.date_venue_event[index * 2 + 1]}</td> */}
                        <td>{data.date_venue_event[index]}</td>
                        <td>{data.team[index]}</td>
                        <td>{data.time[index]}</td>
                        <td>{data.date[index]}</td>
                        <td>{data.event[index]}</td>
                      </tr>
                    );
                  }

                  // Return null if the data is missing to skip rendering the row
                  return null;
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upcoming_Events;
