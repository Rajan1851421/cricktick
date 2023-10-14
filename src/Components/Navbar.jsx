import React, { useState, useEffect } from 'react';
import '../Styles/header.css';
import { Link } from 'react-router-dom';
import NewCheck from './Navbar2';

function Navbar() {
  const [theme, setTheme] = useState('light-theme');

  const toggleTheme = () => {
    setTheme(theme === 'dark-theme' ? 'light-theme' : 'dark-theme');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <nav className='navbar1 sticky-top header1' id='header1'>
        <div className='container-fluid' id='container-fluid'>
          <div className='d-flex align-items-center justify-content-sm-between justify-content-md-between'>
            <div>
              <Link className='navbar-brand' to='/'>
                <img
                  src='./purplebg1.png'
                  className='App-logo logo'
                  alt='logo'
                />
              </Link>
            </div>

            <div>

              <Link
                to='/login'
                className='btn btn-secondary Sign_Btn mx-5'
                style={{ backgroundColor: '#ffff', color: 'black', fontSize: '12px' }}
              >
                Sign In
              </Link>


              <div
                className='btn btn-none mx-5 px-3 btn-light-dark fs-7'
                style={{ backgroundColor: 'transparent', fontSize: '12px' }}
                onClick={toggleTheme}
              >
                {theme === 'dark-theme' ? <img src='https://www.crictracker.com/_next/static/media/dark-mode.a8b195e8.svg' /> : <img src='https://www.crictracker.com/_next/static/media/light-mode.6f89d25e.svg' />}
              </div>


            </div>
          </div>
        </div>
      </nav>
      <NewCheck />
    </>
  );
}

export default Navbar;
