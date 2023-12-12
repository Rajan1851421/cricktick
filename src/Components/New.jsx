import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/Ranking.css';
import PageNotFound from "./PageNotFound"
// ... (imports remain the same)

const Upcoming_Events = () => {
    const [eventData, setEventData] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
        axios
            .get('https://backend-ekms.onrender.com/cricinfo/InternetionalEvent/')
            .then((response) => {
                console.log(response);
                setEventData(response.data.dict);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='container-fluid py-3 mt-5' id='AdminEmp'>
            {/* ... (rest of the code remains the same) */}
            {eventData.date_venue_event &&
                eventData.date_venue_event.length > 0 &&
                eventData.team &&
                eventData.team.length > 0 &&
                eventData.time &&
                eventData.time.length > 0 ? (
                <div className='table-responsive rounded tableFixHead container' id='table'>
                    <table className='table w-100'>
                        <thead className='' style={{ color: '#4B059B' }}>
                            <tr id='headerTable'>
                                <th>SL.no</th>
                                <th>Date Event Venue</th>
                                <th>Team</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {eventData.date_venue_event.map((event, index) => {
                                const team = eventData.team[index];
                                const dateVenueEvent = eventData.date_venue_event[index];
                                const time = eventData.time[index];

                                // Check if both teams exist before rendering the row
                                if (team && dateVenueEvent && time) {
                                    // Create pairs by adding adjacent elements for both date_venue_event and team
                                   
                                    const pairedDateVenueEvent =
                                        index + 1 < eventData.date_venue_event.length
                                            ? `${eventData.date_venue_event[index]}, ${eventData.date_venue_event[index + 1]}`
                                            : eventData.date_venue_event[index];
                                            const pairedTeam =
                                            index + 1 < eventData.team.length
                                              ? `${eventData.team[index]} VS ${eventData.team[index + 1]}`
                                              : eventData.team[index];
                                          

                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{pairedDateVenueEvent}</td>
                                            <td className='p-3'>{pairedTeam}</td>
                                            <td>{time}</td>
                                        </tr>
                                    );
                                }

                                // Return null if the data is missing to skip rendering the row
                                return null;
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className='text-center'>Loading data...</p>
            )}
        </div>
    );
};

export default Upcoming_Events;











