import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PasswordResetForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://backend-ekms.onrender.com/space/api/password_reset/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      });
      //console.log(response)

      if (response.ok) {
        // Password reset request successful
        //console.log('Password reset request successful');
      } else {
        // Password reset request failed, handle the desired behavior
        //console.log('Password reset request failed');
      }
    } catch (error) {
      console.error('Error during password reset request:', error);
    }
  };

  return (
    <>
      <div className='container-fluid py-5' id='AdminEmp'>
        <div className='container d-flex justify-content-center'>

        <form onSubmit={handleSubmit} className='border border-secondary p-5 rounded'>
          <center>
            <h4 id='h1'>Reset Password</h4> <hr />
          </center>
          <div className='container py-3'>
            <div class="row">
              <div class="col">
                <label id='h1'>
                  Email:
                  <input type="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
              </div>
            </div>


            <div class="row">
              <div class="col">
                <button className='btn btn-secondary mx-3' type="submit">Reset Password</button>
                <Link to='/login'>Login</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default PasswordResetForm;
