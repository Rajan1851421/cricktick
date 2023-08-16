import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='container-fluid py-5 ' style={{
      borderTopRightRadius: '10px',
      borderTopLeftRadius: '10px',
      backgroundColor: '#1e1e1f',
      color: '#FFFFFF',
      fontWeight: '500',
      fontSize:'12px'

    }}>
      <footer className=''>
        <div class="container   ">
          <div className="row mb-3">
            <div class="d-flex justify-content-center">
              <div class="copyright">
                <span className='mx-5 rounded'><i class="fa-brands fa-telegram fs-3" style={{ color: '#075ced' }}></i></span>
                {/* <span className='mx-5 rounded'><i class="fa-brands fa-youtube fs-3" style={{ color: '#d81313' }}></i></span> */}
                <span className='mx-5 rounded'><i class="fa-brands fa-square-twitter fs-3" style={{ color: '#0b61f4' }}></i></span>
                <span className='mx-5 rounded'><i class="fa-brands fa-instagram fs-3" style={{ color: '#f50ac2' }}></i></span>
                {/* <span className='mx-5 rounded'><i class="fa-brands fa-linkedin fs-3" style={{ color: '#0a60f5' }}></i></span> */}
                <span className='mx-5 rounded'><i class="fa-brands fa-whatsapp fs-3" style={{ color: '#20F10C' }}></i></span>
              </div>
            </div>
          </div> <hr />
          <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-6 ">
              <div className='px-3' >
                <h3 className='text-center'><img src="./purplebg1.png" classupload_video="App-logo" alt="logo" className="logo border-0 " /></h3>
                <p className='text-center'>Welcome to our website! We are your ultimate destination for everything related to cricket news, insights, stats, live scores, and much more.</p>
              </div>
            </div>
            <div class="col-xl-2 offset-xl-1 col-lg-2 col-md-6 mt-5">
              <div class="quick-link text-center">
                <h4>Quick Link</h4> <hr />
                <ul class="list-unstyled text-center">
                  <li className=' border border-success  mt-3 rounded py-2'>
                    <Link to="/" class="text-decoration-none text-light">Home</Link>
                  </li>
                  <li className=' border border-success  mt-3 rounded py-2'>
                    <Link to="/aboutUs" class="text-decoration-none text-light">About Us</Link>
                  </li>

                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 mt-5">
              <div className='text-center'>
                <h4>Service</h4><hr />
                <ul class="list-unstyled text-center">
                  <li className=' border border-success  mt-3 rounded py-2'>
                    <Link to="/login" class="text-decoration-none text-light">My Account</Link>
                  </li>
                  <li className=' border border-success  mt-3 rounded py-2'>
                    <Link to="/privacyPolicy" class="text-decoration-none text-light">privacyPolicy</Link>
                  </li>

                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 mt-5">
              <div className='text-center'>
                <h4>More</h4> <hr />
                <ul class="list-unstyled text-center">
                  <li className=' border border-success  mt-3 rounded py-2'>
                    <Link to="/teamRanking" class="text-decoration-none text-light">Team Rank</Link>
                  </li>
                  <li className=' border border-success  mt-3 rounded py-2'>
                    <Link to="/ranking" class="text-decoration-none text-light">Player Rank</Link>
                  </li>

                </ul>

              </div>
             
            </div><hr />
            <div className="row">
                <div className="col">
                  <div class="d-flex justify-content-center">
                    <br />
                    <div class="copyright">
                      <p className='text-center font-italic'>By using our website, you acknowledge that you have read and understood this Privacy Policy and agree to be bound by its terms and conditions.</p>
                      <p className='text-center'>Developed and maintained by <Link to="/PrivacyPolicy" target="_blank">CrickTick &nbsp;(Privacy Policy)</Link></p>
                    </div>
                  </div>
                </div>
              </div>
          </div>     

        </div>

      </footer >


    </div >
  )
}

export default Footer;