import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/navbar2.css';

function Navbar2() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    return (
        <>
            <div className='container-fluid'>
                <nav className={`navbar navbar-expand-lg navbar-light position-fixed navbar2 ${isNavOpen ? 'show' : ''}`} style={{ zIndex: "1000" }}>
                    <div className="container-fluid" >
                        <button className="navbar-toggler" type="button" onClick={toggleNav}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='h1'>
                                <li className="nav-item">
                                    <Link to="/home" className="active nav_link" onClick={closeNav}>
                                        <i className="fa-solid fa-house text-primary mx-1"></i>Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/livescore" className="active nav_link" onClick={closeNav}>
                                        <i className="fa-solid fa-circle-dot text-success mx-1"></i>Livescore
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/upcoming_events" className="active nav_link" onClick={closeNav}>
                                        <i className="fa-solid fa-calendar-days mx-1 text-info"></i>Upcoming Events
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/manualNewsGet" className="active nav_link" onClick={closeNav}>
                                        <i className="fa-regular fa-newspaper text-danger mx-1"></i>News
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/ranking" className="active nav_link " onClick={closeNav}>
                                        <i className="fa-solid fa-arrow-up-right-dots mx-1 text-success"></i>Ranking
                                    </Link>
                                </li>
                                <li className="nav-item dropdown mx-3 ">
                                    <Link className="active nav-item nav-link   " id="navbarDropdown" data-bs-toggle="dropdown">
                                        <i className="fa-solid fa-arrow-up-right-dots mx-1 text-success"></i>   Team Ranking
                                    </Link>
                                    <ul className="dropdown-menu dp-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item dp-item" to='/womenteamRanking' onClick={closeNav}>&#8594; Women Team Ranking</Link></li>
                                        <li><Link className="dropdown-item dp-item" to='/menteamrank' onClick={closeNav}>&#8594; Men Team Ranking</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/trandingTweet" className="active nav_link" onClick={closeNav}>
                                        <i className="fa-brands fa-twitter mx-1 text-info"></i>Trending Post
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/aboutUs" className="active nav_link" onClick={closeNav}>
                                        <i className="fa-solid fa-circle-question mx-1 text-danger"></i>About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar2;
