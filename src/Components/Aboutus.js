import React from 'react'
import "../Styles/About.css";
import { Link } from 'react-router-dom';


function Aboutus() {

  window.scrollTo(0, 0);

  return (
    <>
      <div className="container-fluid Full-Width-About py-5">
        <div className='container  my-2 px-5 py-3 rounded' id='text-About' >
          <h3 className='text-center ' id='h1'> <img src="https://img.freepik.com/free-vector/employees-meeting-office-kitchen-drinking-coffee_74855-5237.jpg?size=626&ext=jpg&ga=GA1.1.180599784.1691488875&semt=sph" alt="" style={{height:'80px',width:'180px',marginBottom:'20px'}}/>About Us</h3><hr />
          <div className="row d-flex justify-content-around mt-5 align-items-center">
            <div className="col-md-3 About-box ">

              <h3 className='text-center'>Daily News Post</h3><hr />
              <h1 className='text-center fst-italic'>50+</h1>
              <img src="https://img.freepik.com/free-photo/3d-render-pointing-hand-gesture-palm-with-finger_107791-15938.jpg?size=626&ext=jpg&ga=GA1.2.180599784.1691488875&semt=ais" alt="" style={{ height: '70px', marginLeft: 'auto', marginRight: 'auto', display: 'flex', marginTop: '20px', background: 'transparent' }} />
            </div>

            <div className="col-md-3 About-box ">

              <h3 className='text-center'>Get Live Score</h3><hr />
              <Link to='/livescore' className='d-flex justify-content-center text-decoration-none'><button className='btn btn-light' style={{ backgroundColor: '#321c60', color: '#ffff' }}>Click Here</button></Link>
              <img src="https://img.freepik.com/free-photo/3d-render-pointing-hand-gesture-palm-with-finger_107791-15938.jpg?size=626&ext=jpg&ga=GA1.2.180599784.1691488875&semt=ais" alt="" style={{ height: '70px', marginLeft: 'auto', marginRight: 'auto', display: 'flex', marginTop: '20px', background: 'transparent' }} />
            </div>

            <div className="col-md-3 About-box ">

              <h3 className='text-center'>Daily Visitor</h3><hr />
              <h1 className='text-center fst-italic'>1000K+</h1>
              <img src="https://img.freepik.com/free-photo/3d-render-pointing-hand-gesture-palm-with-finger_107791-15938.jpg?size=626&ext=jpg&ga=GA1.2.180599784.1691488875&semt=ais" alt="" style={{ height: '70px', marginLeft: 'auto', marginRight: 'auto', display: 'flex', marginTop: '20px', background: 'transparent' }} />
            </div>

          </div> <hr />

          <div className="row">
            <div className="col-md-12">
              <h2 className='my-5 text-center' >Who we are... <img src="https://img.freepik.com/free-vector/human-hand-writing-isolated_1308-113867.jpg?size=626&ext=jpg&ga=GA1.2.180599784.1691488875&semt=ais" alt="" style={{height:'40px'}} /> </h2> <hr />
              <p className='text-center fw-500 fs-6 mt-2 mb-2 py-3 ' id='text-About' style={{ backgroundColor: 'transparent' }}>
                Welcome to our website! We are your ultimate destination for everything related to cricket news, insights, stats, live scores, and much more. <br /> As passionate cricket enthusiasts, we strive to provide you with the most comprehensive coverage of the sport, keeping you updated and engaged with the latest happenings in the cricketing world.
                Our team of dedicated writers and analysts works tirelessly to bring you the most accurate and up-to-date information. Whether you're a fan of international cricket, domestic leagues, or even the thriving T20 franchise tournaments, we've got you covered. <br /> We understand the excitement and anticipation that comes with following the sport, and we aim to enhance your cricketing experience by delivering high-quality content that keeps you informed and entertained.
                Stay tuned to our website for the latest news articles, in-depth analysis, match previews, player profiles, expert opinions, and much more. We take pride in our ability to capture the essence of the game and present it to you in an engaging and informative manner. <br />
                In addition to news and insights, we also provide a comprehensive statistics section, allowing you to delve deeper into the numbers behind the game. Whether you're interested in historical records, player performances, team statistics, or head-to-head comparisons, our stats section is a treasure trove for cricket enthusiasts seeking detailed information.
                Furthermore, we understand the importance of keeping up with live scores, especially when you can't catch the action live on television.<br /> Our dedicated live scoring section ensures that you never miss a moment, providing real-time updates, ball-by-ball commentary, <br />and scorecards to keep you in the thick of the action, no matter where you are.
                We value our community of cricket fans and encourage active participation. Feel free to engage with us through comments, discussions, and social media platforms, as we believe in fostering a vibrant cricketing community where fans can connect and share their thoughts.<br />
                Thank you for choosing our website as your go-to source for cricket-related content. We are committed to delivering a top-notch cricket experience, and we hope to bring you closer to the game you love. So sit back, relax, and let us take you on a thrilling journey through the world of cricket.

              </p>

            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Aboutus