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
              <span 
                className='btn btn-secondary mx-5 Sign_Btn px-3'
                style={{ backgroundColor: 'transparent', color: '#fff',borderRadius:'50px' }}
                onClick={toggleTheme}
              >
                {theme === 'dark-theme' ? 'Light Mode ' : 'Dark Mode'}
              </span>
              <Link
                to='/login'
                className='btn btn-secondary Sign_Btn mx-5'
                style={{ backgroundColor: '#ffff', color: 'black' }}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <NewCheck />
    </>
  );
}

export default Navbar;
