import React, { useState } from 'react';
import axios from 'axios'
import '../Styles/contactus.css';
import { Link } from 'react-router-dom'


const ContactForm = () => {

  const [frist_name, setFname] = useState('');
  const [last_name, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState(null);
  const [message, setMessage] = useState('');
  const [msg, setMsg] = useState('')
  
  const [inputerror, setInputError] = useState('')
  window.scrollTo(0, 0);
  //console.log(fname, lname)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!frist_name || !last_name || !email || !whatsapp || !message) {
      setInputError("Please fill in all fields");
      setTimeout(() => {
        setInputError("");
      }, 5000)
      return; // Don't proceed further if any field is empty
    }

    const newPost = {
      first_name: frist_name,
      last_name: last_name,
      email: email,
      whatsapp: whatsapp,
      msg: message
    };

    axios.post('https://liveupcomingpro-production-f9ac.up.railway.app/contact/get_post_social/', newPost)
      .then(response => {
        console.log(response.data)
        if (response.data.id > 0) {
          setMsg("Successfully submitted");
          setFname('');
          setLname('');
          setEmail('');
          setWhatsapp(null);
          setMessage('');
          setTimeout(() => {
            setMsg('');
          }, 3000);
        } else {
          setMsg("Failed");
        }
        console.log('Post created:', response.data);
      })
      .catch(error => {
        console.error('Error creating post:', error);
      });
  };


  return (
    <>
      <div className="container-fluid mt-3 contactus-wrapper" id="AdminEmp">
        <div className="container my-3">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center mt-3">
              <div className='contactHeadText'>
                <img
                  src="./contact.png"
                  className="App-logo"
                  alt="logo"
                  style={{ height: '100px' }}
                />
              </div>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-md-12 d-flex justify-content-center position-relative">
              <img
                className='w-100 contact-bg'
                src="https://img.freepik.com/free-vector/background-gradient-with-bokeh-effect_23-2148382073.jpg?size=626&ext=jpg&ga=GA1.1.180599784.1691488875&semt=ais"
                alt=""
              />
              <div className='position-absolute top-0 start-0 p-2 img-absolute'>
                <img
                  src="https://img.freepik.com/free-photo/vase-plant-decoration-with-empty-room_1339-3565.jpg?size=626&ext=jpg&ga=GA1.1.180599784.1691488875&semt=ais"
                  alt=""
                />
              </div>
              <div className="position-absolute top-0 start-0 p-2 from-absolute">
                <form className="my-5 contact-box-child " onSubmit={handleSubmit}>
                  <h3 className="font-weight-light py-3 fw-bold get-in-touch" id="h1" >
                    Get <strong className='text-light'>In</strong> Touch
                  </h3>
                  <span className='text-center  fw-bolder' style={{ color: '#025E13' }}>{msg}</span>
                  <span className='text-center  fw-bold' style={{ color: '#611704 ' }}>{inputerror}</span>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder='Frist Name'
                      type="text"
                      name="frist_name"
                      value={frist_name}
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder='Last Name'
                      name='last_name'
                      type="text"
                      value={last_name}
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder='Email'
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Mobile number"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary mt-3 text-dark px-3 py-2 btn-contactus mb-5"
                  >
                    <i className="fa-solid fa-paper-plane fa-fade fa-xl mx-2" style={{ color: '#7523c7' }}></i> SUBMIT
                  </button>
                </form>
                <div className="position-absolute top-0 start-0 p-2 footer-absolute">
                  <div className="row ">
                    <div className="col-md-12">
                      <div className=' top-0 start-0 footer-absolute'>
                        <div className="col  p-2 text-center">
                          <i className="fa-sharp fa-solid fa-phone"> </i> <br />
                          +91-00000000000
                        </div>
                        <div className="col  p-2 text-center">
                          <i className="fa-solid fa-envelope fa-xl" style={{ color: '#2c0693' }}></i> <br />
                          Email: Cricktic.com@gmail.com
                        </div>
                        <div className="col p-2 text-center">
                          <div className='d-flex flex-lg-row flex-md-row flex-sm-col'>
                            <Link to='https://twitter.com/Cricktic_?t=p9jC3uOMj34PbXtEitJ2Yg&s=09'><span className='mx-1 rounded'><i className="fa-brands fa-square-twitter fs-3" style={{ color: '#0b61f4' }}></i></span></Link>
                            <Link to='https://instagram.com/cricktic_?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D'><span className='mx-1 rounded'><i className="fa-brands fa-instagram fs-3" style={{ color: '#f50ac2' }}></i></span></Link>
                            <Link to='https://wa.me/message/H5FLM4K6K6GGK1'><span className='mx-1 rounded'><i className="fa-brands fa-whatsapp fs-3" style={{ color: '#05631F' }}></i></span></Link>
                          </div>
                          Social media
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile contact us */}
      <div className='mobile-form '>
        <div className="container">
          <div className="contact-section">
            <h2 className="ct-section-head text-center mt-2">CONTACT US</h2>
            <div className="row contact-fields">
              <div className="col-md-8 left-form">
                <form className="my-5 contact-box-child " onSubmit={handleSubmit}>
                  <h3 className="font-weight-light py-3 fw-bold get-in-touch" id="h1" >
                    Get <strong className='text-light'>In</strong> Touch
                  </h3>
                  <span className='text-center  fw-bolder' style={{ color: '#025E13' }}>{msg}</span>
                  <span className='text-center  fw-bold' style={{ color: '#611704 ' }}>{inputerror}</span>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder='Frist Name'
                      type="text"
                      name="frist_name"
                      value={frist_name}
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder='Last Name'
                      name='last_name'
                      type="text"
                      value={last_name}
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder='Email'
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Mobile number"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary mt-3 text-dark px-3 py-2 btn-contactus mb-5"
                  >
                    <i className="fa-solid fa-paper-plane fa-fade fa-xl mx-2" style={{ color: '#7523c7' }}></i> SUBMIT
                  </button>
                </form>
              </div>
              <div className="col-md-4 contact-info">
                <div className="phone">
                  <i className="fa-sharp fa-solid fa-phone"> </i> <br />
                  +91-00000000000
                </div>
                <div className="email">
                  <h2>Email</h2>
                  <Link to="Cricktic.com@gmail.com" className='text-decoration-none'>Email: Cricktic.com@gmail.com</Link>
                </div>
                <div className="location">
                  <div className='d-flex flex-lg-row flex-md-row flex-sm-col'>
                    <Link to='https://twitter.com/Cricktic_?t=p9jC3uOMj34PbXtEitJ2Yg&s=09'><span className='mx-1 rounded'><i className="fa-brands fa-square-twitter fs-3" style={{ color: '#0b61f4' }}></i></span></Link>
                    <Link to='https://instagram.com/cricktic_?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D'><span className='mx-1 rounded'><i className="fa-brands fa-instagram fs-3" style={{ color: '#f50ac2' }}></i></span></Link>
                    <Link to='https://wa.me/message/H5FLM4K6K6GGK1'><span className='mx-1 rounded'><i className="fa-brands fa-whatsapp fs-3" style={{ color: '#05631F' }}></i></span></Link>
                  </div>
                  Social media</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );

}

export default ContactForm;
