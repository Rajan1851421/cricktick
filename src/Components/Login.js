import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PasswordResetForm from './passwordreset';
import "../Styles/login.css";
import PostNewsPostTwiterBtn from './AdminDashBoard';
import EmpPostNewsPostTwiterBtn from './UserDashBoard'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ulogin, setULogin] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // handle Error Login hook
  const [login, setLogin] = useState(false)


  const handleLogin = (e) => {
    e.preventDefault();

    // Check if email and password are entered
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    const loginData = {
      email: email,
      password: password
    };
    setLoading(true); // Start loading indication

    axios.post('https://backend-ekms.onrender.com/role/login/', loginData)
      .then(response => {
        setLogin(response.data.errors)
        if (response.data.Message === "Admin Login Successfully!!") {
          setIsLoggedIn(true);
          //console.log("Admin Page");
        } else if (response.data.Message === "Staff Login Successfully!!") {
          //console.log("Staff Page");
          setULogin(true);
        } else {
          //console.log('No page');
        }

        //console.log(response);
      })
      .catch(error => {
        //console.log(error);
        setError('Invalid email or password. Please try again.');
      })
      .finally(() => {
        setLoading(false); // Stop loading indication
      });
  };

  const handleLogout = () => {
    window.scrollTo(0, 0);
    
    //console.log('Logout successful');
    const confirmed = window.confirm('Are you sure you want to navigate to another menu?');
    if (confirmed) {    
       setIsLoggedIn(false);  
      navigate('/login');
    }
    else{
      setIsLoggedIn(true); 
    }   
     
     setULogin(false)
    
    
  };

  const resetPassword = () => {
    if (showReset === true) {
      setShowReset(false);
    } else {
      setShowReset(true);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  if (isLoggedIn) {
    return (
      <div className='container-fluid py-5' id='AdminEmpBtn'>
        <div className='container mt-3'>
          <h2 id='h1'>Welcome Admin Dashboard</h2>
          <PostNewsPostTwiterBtn />
          <center><h2>{isLoggedIn}</h2></center>
          <button onClick={handleLogout} className="btn btn-primary mx-5" style={{backgroundColor:'#321c60',color:'#ffff'}}>Logout</button>
          <Link className='mx-2 btn btn-secondary ' to='/register' target='_blank'style={{backgroundColor:'#edb74a',color:'black'}} > Register</Link>

        </div>
      </div>
    );
  } else if (ulogin) {
    return (
      <div className='container-fluid py-5' id='AdminEmpBtn'>
        <div className='container mt-3'>
          <h2 id='h1'>Welcome User dashboard</h2>
          <EmpPostNewsPostTwiterBtn />
          <center><h2>{ulogin}</h2></center>
          <button onClick={handleLogout} className="btn btn-primary mx-5">Logout</button>
        </div>
      </div>
    );
  }


  return (
    <>
      {/* login box */}
      <div className='container-fluid mt-5' id='adminLogin'>
        <section className="vh-100 ">
          <div className="container-fluid h-custom ">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-6 col-lg-6 col-xl-5">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid" alt="Sample image" />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form onSubmit={handleLogin} className=" mt-5 border border-secondery rounded p-3">
                  <div className="row">
                    <center>
                      <h4 className='py-2 text-decoration-underline ' id='h1'> Login Dashboard </h4>
                      <p className='text-danger'>{login}</p>
                    </center>

                    <div className="form-group px-5 mt-3">
                      <br />
                      <label htmlFor="exampleInputEmail1" id='h1'>Email address</label>
                      <input type="email" className='form-control'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group px-5">
                      <label htmlFor="exampleInputPassword1" id='h1'>Password</label>
                      <div className="input-group">
                        <input type={showPassword ? 'text' : 'password'}
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          id="exampleInputPassword1" placeholder="Password" />
                        <button type="button" className="btn btn-outline-secondary"  onClick={toggleShowPassword}>
                          {showPassword ? 'Hide' : 'Show'}
                        </button>

                      </div>
                      {/* <Link to='/resetPassword'>Forget Password</Link> */}
                    </div>
                  </div>
                  {error && <div className="row">
                    <div className='form-group px-5'>
                      <p className="text-danger">{error}</p>
                    </div>
                  </div>}
                  <div className='row'>
                    <div className='form-group px-5'>
                      <button className="btn btn-info my-1" style={{backgroundColor:'#321c60',color:'#ffff'}} disabled={loading}>
                        {loading ? (
                          <span>Loading...</span>
                        ) : (
                          <span>Login</span>
                        )}
                      </button>{' '}
                      <div>
                        {/* <Link to='/userRegister' target='_blank'>Register Here..</Link> */}
                      </div>
                    </div>

                  </div>
                </form>
                <div>{showReset && <PasswordResetForm />}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* login box */}
    </>
  );
};

export default AdminLogin;
