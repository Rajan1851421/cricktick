import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RegistrationForm from './Register';
import PasswordResetForm from './passwordreset';

function ProfileView() {
  const [profileData, setProfileData] = useState([]);
  const [profile, setProfile] = useState(null);
  const [profileId, setProfileId] = useState('');
  const [formData, setFormData] = useState({
    candidateName: '',
    candidateEmail: '',
    projectName: '',
    companyName: '',
    projectDescription: '',
    requiredSkill: '',
    projectDuration: '',
    bidingPrice: '',
    hireText: '',
    expectedPrice: '',
    deliveryDate: null,
    token: '',
  });



  useEffect(() => {
    if (profileId) {
      fetchProfile();
    }
  }, [profileId]);

  const fetchProfile = () => {
    axios.get(`https://liveupcomingpro-production-f9ac.up.railway.app/profile/putProfileview/${profileId}/`)
      .then(response => {
        //console.log(response)
        setProfile(response.data);
      })
      .catch(error => {
        //console.log(error);
      });
  };

  const updateProfile = () => {
    const updatedProfile = { ...profile, candidateName: 'New Name' }; // Replace with the updated profile data
    axios.put(`https://liveupcomingpro-production-f9ac.up.railway.app/profile/putProfileview/${profileId}/`, updatedProfile)
      .then(response => {
        //console.log(response);
      })
      .catch(error => {
        //console.log(error);
      });
  };

  const deleteProfile = () => {
    axios.delete(`https://liveupcomingpro-production-f9ac.up.railway.app/profile/putProfileview/${profileId}/`)
      .then(response => {
        //console.log(response);
      })
      .catch(error => {
        //console.log(error);
      });
  };

  const handleInputChange = (event) => {
    setProfileId(event.target.value);
  };
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('https://liveupcomingpro-production-f9ac.up.railway.app/profile/Profileview/', formData)
      .then(response => {
        //console.log(response);
      })
      .catch(error => {
        //console.log(error);
      });
  };

  useEffect(() => {
    axios.get('https://liveupcomingpro-production-f9ac.up.railway.app/profile/GetProfileview/')
      .then(response => {
        setProfileData(response.data);
      })
      .catch(error => {
        //console.log(error);
      });
  }, []);

  return (
    <>
      <div className='container p-5'>
        <form onSubmit={handleSubmit}>

          <div className="row">

            <div className="col">
              <label>
                Candidate Name:
                <input type="text" className="form-control" name="candidateName" value={formData.candidateName} onChange={handleChange} />
              </label>
            </div>
            <div className="col">
              <label>
                Candidate Email:
                <input type="text" className="form-control" name="candidateEmail" value={formData.candidateEmail} onChange={handleChange} />
              </label>
            </div>

            <div className="col">
              <label>
                Project Name:
                <input type="text" className="form-control" name="projectName" value={formData.projectName} onChange={handleChange} />
              </label>
            </div>
          </div>


          <div className="row">
            <div className="col">
              <label>
                Company Name:
                <input type="text" className="form-control" name="companyName" value={formData.companyName} onChange={handleChange} />
              </label>
            </div>
            <div className="col">
              <label>
                Project Description:
                <input type="text" className="form-control" name="projectDescription" value={formData.projectDescription} onChange={handleChange} />
              </label>
            </div>

            <div className="col">
              <label>
                Click Below: <br />
                <button className='btn btn-warning' type="submit">Submit</button>
              </label>

            </div>

          </div>





          {/* Add more input fields for other form data */}

        </form>
        {profileData.map(profile => (
          <div key={profile.id}>
            <p>Candidate Name: {profile.candidateName}</p>
            <p>Candidate Email: {profile.candidateEmail}</p>
            <p>Project Name: {profile.projectName}</p>
            <p>Company Name: {profile.companyName}</p>
            <p>Project Description: {profile.projectDescription}</p>
            <p>Required Skill: {profile.requiredSkill}</p>
            <p>Project Duration: {profile.projectDuration}</p>
            <p>Biding Price: {profile.bidingPrice}</p>
            <p>Hire Text: {profile.hireText}</p>
            <p>Expected Price: {profile.expectedPrice}</p>
            <p>Delivery Date: {profile.deliveryDate}</p>
            <p>Token: {profile.token}</p>
          </div>
        ))}
        <h2>Profile ID:</h2>
        <center>
          <input type="number" className='form-control w-25 my-3' value={profileId} onChange={handleInputChange} />
          <button className='btn btn-info' onClick={fetchProfile}>Fetch Profile</button>
        </center>


        {profile && (
          <div>
            <h2>Profile Details</h2>
            <p>Candidate Name: {profile.candidateName}</p>
            <p>Candidate Email: {profile.candidateEmail}</p>
            <p>Project Name: {profile.projectName}</p>
            {/* Add more profile details here */}
            <button onClick={updateProfile}>Update</button>
            <button onClick={deleteProfile}>Delete</button>
          </div>
        )}
      </div><div>

       
       
      
        {/* <RegistrationForm /> */}
        {/* <PasswordResetForm /> */}


      </div></>
  );
}

export default ProfileView;
