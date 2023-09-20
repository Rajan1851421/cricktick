import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/footer.css';


function Footer() {
  return (
    <div className='container-fluid py-5 ' style={{
      borderTopRightRadius: '10px',
      borderTopLeftRadius: '10px',
      backgroundColor: '#1e1e1f',
      color: '#FFFFFF',
      fontWeight: '500',
      fontSize: '12px'

    }}>
      <footer className=''>
        <div className="container   ">
          <div className="row mb-3">
            <div className="d-flex justify-content-center">
              <div className="copyright">               
                <Link to='https://twitter.com/Cricktic_?t=p9jC3uOMj34PbXtEitJ2Yg&s=09'><span className='mx-5 rounded'><i className="fa-brands fa-square-twitter fs-3" style={{ color: '#0b61f4' }}></i></span></Link>
                <Link to='https://instagram.com/cricktic_?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D'><span className='mx-5 rounded'><i className="fa-brands fa-instagram fs-3" style={{ color: '#f50ac2' }}></i></span></Link>
                <Link to='https://wa.me/message/H5FLM4K6K6GGK1'><span className='mx-5 rounded'><i className="fa-brands fa-whatsapp fs-3" style={{ color: '#05631F' }}></i></span></Link>
              </div>
            </div>
          </div> <hr />
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 ">
              <div className='px-3 Footer-Brand' >
                <h3 className='text-center'><img src="./purplebg1.png" classupload_video="App-logo" alt="logo" className="logo border-0 " /></h3>
                <p className='text-center'>Welcome to our website! We are your ultimate destination for everything related to cricket news, insights, stats, live scores, and much more.</p>
              </div>
            </div>
            <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6 mt-5">
              <div className="quick-link text-center">
                <h4>Quick Link</h4> <hr />
                <ul className="list-unstyled text-center">
                  <li className=' border border-success  mt-3 rounded py-2'>
                    <Link to="/" className="text-decoration-none text-light footer-Link">Home</Link>
                  </li>
                  <li className=' border border-success  mt-3 rounded py-2'>
                    <Link to="/aboutUs" className="text-decoration-none text-light footer-Link">About Us</Link>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 mt-5">
              <div className='text-center'>
                <h4>Service</h4><hr />
                <ul className="list-unstyled text-center">
                  <li className=' border border-success  mt-3 rounded py-2'>
                    <Link to="/login" className="text-decoration-none text-light footer-Link">My Account</Link>
                  </li>
                  <li className=' border border-success  mt-3 rounded py-2'>
                    <Link to="/contactus" className="text-decoration-none text-light footer-Link">Contact Us</Link>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 mt-5">
              <div className='text-center'>
                <h4>More</h4> <hr />
                <ul className="list-unstyled text-center">
                  <li className=' border border-success  mt-3 rounded py-2'>
                    <Link to="/teamRanking" className="text-decoration-none text-light footer-Link">Team Rank</Link>
                  </li>
                  <li className=' border border-success  mt-3 rounded py-2'>
                    <Link to="/ranking" className="text-decoration-none text-light footer-Link">Player Rank</Link>
                  </li>

                </ul>

              </div>

            </div><hr />
            <div className="row">
              <div className="col">
                <div className="d-flex justify-content-center">
                  <br />
                  <div className="copyright">
                    <p className='text-center font-italic'>By using our website, you acknowledge that you have read and understood this Privacy Policy and agree to be bound by its terms and conditions.</p>
                    <p className='text-center'>Developed and maintained by <Link to="/PrivacyPolicy">CrickTick &nbsp;(Privacy Policy)</Link></p>
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