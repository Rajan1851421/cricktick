import React from 'react';
import { useState, useEffect } from "react"
import "../Styles/header.css";
import { Link } from 'react-router-dom'
import NewCheck from './Navbar2';

function Navbar() {
  const [theme, setTheme] = useState("light-theme")

  const handleLiaghtDarkMode = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme")
    } else {
      setTheme("dark-theme")
    }
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme])



  return (
    <>
      <nav className='navbar1 sticky-top  header1 ' id='header1'>
        <div className='container-fluid' id='container-fluid'>
          <div className=" d-flex  align-items-center justify-content-sm-between justify-content-md-between ">
            <div>
              <Link className="navbar-brand" to="/"><img src="./purplebg1.png" classupload_video="App-logo" alt="logo" className="logo" /></Link>
            </div>

            <div>
              <i className="fa-solid fa-sun fa-spin fa-2xl mx-5 dark-mode " id='icon' onClick={handleLiaghtDarkMode} style={{ color: '#d8dfee', cursor: 'pointer' }}></i>
              <Link to='/login' className="btn btn-secondary Sign_Btn mx-5 " style={{ backgroundColor: '#ffff', color: 'black' }}>Sign In</Link>

            </div>
          </div>
        </div>
      </nav>
      <NewCheck />
    </>
  );
}

export default Navbar;
