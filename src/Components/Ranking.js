import React, { useState, useEffect } from "react";
import "../Styles/Ranking.css";
import axios from 'axios';

function App() {

    const [currentCategory, setCurrentCategory] = useState("batsman");
    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(false);

    const headings = {
        batsman: ['BatsMan-Test Rank', 'BatsMan-ODI Rank', 'BatsMan-T20 Rank'],
        bowlers: ["Bowler Man Test Rank", 'Bowler Man ODI Rank', 'Bowler Man T20 Rank'],
        allRounders: ["All Rounder Man Test Rank", 'All Rounder Bowler Man ODI Rank', 'All Rounder Bowler Man T20 Rank'],
        womenODI: ["BatsMan Women-ODI Rank", "Bowler Women-ODI Rank"],
        womenT20: ["Bowler Women-T20 Rank", "BatsMan Women-T20 Rank", "All Rounder Women Rank"]
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        handleClick(
            [
                "https://backend-ekms.onrender.com/cricinfo/BatMenTestRanking/",
                "https://backend-ekms.onrender.com/cricinfo/BatMenODIRanking/",
                "https://backend-ekms.onrender.com/cricinfo/BatMenT20Ranking/",
            ],
            "batsman"
        );

    }, []);

    const handleClick = async (urls, category) => {
        try {
            setLoading(true);
            const responsePromises = urls.map(url => axios.get(url));
            const responses = await Promise.all(responsePromises);

            const categoryData = responses.map(response => {
                const rawData = response.data["news from times of india"];
                return JSON.parse(rawData);
            });

            setTableData([{ category, data: categoryData }]);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }

        setCurrentCategory(category);
    };





    return (
        <div className="container-fluid my-3" id="btn_container">
            <div className="btn_container container d-inline-block">
                <button
                    className={`btn btn-info rounded-pill ${currentCategory === "batsman" ? "active" : ""}`}
                    onClick={() =>
                        handleClick(
                            [
                                "https://backend-ekms.onrender.com/cricinfo/BatMenTestRanking/",
                                "https://backend-ekms.onrender.com/cricinfo/BatMenODIRanking/",
                                "https://backend-ekms.onrender.com/cricinfo/BatMenT20Ranking/",
                            ],
                            "batsman"
                        )
                    }
                >
                    Batsman
                </button>
                <button
                    className="btn btn-info rounded-pill"
                    onClick={() =>
                        handleClick(
                            [
                                "https://backend-ekms.onrender.com/cricinfo/bowlerMenTestRanking/",
                                "https://backend-ekms.onrender.com/cricinfo/bowlerMenODIRanking/",
                                "https://backend-ekms.onrender.com/cricinfo/bowlerMenT20Ranking/",
                            ],
                            "bowlers"
                        )
                    }
                >
                    Bowlers
                </button>
                <button
                    className="btn btn-info rounded-pill"
                    onClick={() =>
                        handleClick(
                            [
                                "https://backend-ekms.onrender.com/cricinfo/AllrounderMenTestRanking/",
                                "https://backend-ekms.onrender.com/cricinfo/AllrounderMenODIRanking/",
                                "https://backend-ekms.onrender.com/cricinfo/AllrounderMenT20Ranking/",
                            ],
                            "allRounders"
                        )
                    }
                >
                    All-rounders
                </button>
                <button
                    className="btn btn-info rounded-pill"
                    onClick={() =>
                        handleClick(
                            [
                                "https://backend-ekms.onrender.com/cricinfo/BatWoMenODIRanking/",
                                "https://backend-ekms.onrender.com/cricinfo/BowlerWoMenODIRanking/",
                                "https://backend-ekms.onrender.com/cricinfo/AllrounderWoMenODIRanking/",
                            ],
                            "womenODI"
                        )
                    }
                >
                    Women-ODI
                </button>
                <button
                    className="btn btn-info rounded-pill"
                    onClick={() =>
                        handleClick(
                            [
                                "https://backend-ekms.onrender.com/cricinfo/WomenT20Bowler/",
                                "https://backend-ekms.onrender.com/cricinfo/WomenT20Bat/",
                                "https://backend-ekms.onrender.com/cricinfo/WomenT20Allrounder/",
                            ],
                            "womenT20"
                        )
                    }
                >
                    Women-T20
                </button>
            </div>
            {loading && <center><p className='mt-2' id='h1'>Loading data...</p></center>}

            {tableData.map((categoryData, index) => (
                <div key={index} className={`table-container ${currentCategory === categoryData.category ? "active" : "hidden"}`}>
                    {
                        categoryData.data.map((dataSet, dataSetIndex) => (
                            <div key={dataSetIndex}>
                                <center clssName='mt-3'>
                                    {/* Different images for each table */}
                                    {currentCategory === "batsman" && (
                                        <h3 id='h1'><img src="https://img.freepik.com/premium-vector/cricket-bat-vector-illustration_110233-78.jpg?size=626&ext=jpg&ga=GA1.2.180599784.1691488875&semt=sph" style={{ width: '60px' }} /> {headings[currentCategory][dataSetIndex]}</h3>
                                    )}
                                    {currentCategory === "bowlers" && (
                                        <h3 id='h1'><img src="https://img.freepik.com/free-vector/ball_53876-25477.jpg?size=626&ext=jpg&ga=GA1.2.180599784.1691488875&semt=ais" style={{ width: '60px' }} /> {headings[currentCategory][dataSetIndex]}</h3>
                                    )}
                                    {currentCategory === "allRounders" && (
                                        <h3 id='h1'><img src="https://img.freepik.com/premium-vector/set-equipment-cricket-vector-illustration_110233-73.jpg?size=626&ext=jpg&ga=GA1.1.180599784.1691488875&semt=ais" style={{ width: '60px' }} /> {headings[currentCategory][dataSetIndex]}</h3>
                                    )}

                                    {currentCategory === "womenODI" && (
                                        <h3 id='h1'><img src="https://img.freepik.com/free-vector/girl-about-hit-baseball-isolated_1308-37767.jpg?size=626&ext=jpg&ga=GA1.1.180599784.1691488875&semt=ais" style={{ width: '60px' }} /> {headings[currentCategory][dataSetIndex]}</h3>
                                    )}

                                     {currentCategory === "womenT20" && (
                                        <h3 id='h1'><img src="https://img.freepik.com/free-vector/cricket-fever-freehand-sketch-graphic-design-vector-illustration_460848-10737.jpg?size=626&ext=jpg&ga=GA1.2.180599784.1691488875&semt=sph" style={{ width: '60px' }} /> {headings[currentCategory][dataSetIndex]}</h3>
                                    )}
                                    {/* Add similar conditions for other categories */}
                                </center>
                                {/* <center>
                                    <h3>{headings[currentCategory][dataSetIndex]}</h3>
                                    </center> */}
                                <table className="table container mt-5" key={dataSetIndex}>
                                    <thead>
                                        <tr>
                                            <th>Rank</th>
                                            <th>Name</th>
                                            <th>Team</th>
                                            <th>Rating</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataSet.length > 0 ? (
                                            dataSet.map((item, itemIndex) => (
                                                <tr key={itemIndex}>
                                                    <td>{item.Rank}</td>
                                                    <td>{item.Name}</td>
                                                    <td>{item.Team}</td>
                                                    <td>{item.Rating}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="4">No data available</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        ))
                    }
                </div>
            ))}
        </div >
    );
}

export default App;
