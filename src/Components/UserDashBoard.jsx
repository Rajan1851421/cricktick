import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "../Styles/admindashboard.css";


function App() {
  const [section1Visible, setSection1Visible] = useState(true);
  const [section2Visible, setSection2Visible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [photoG, setPhotoG] = useState(' ')
  const [videoG, setVideoG] = useState(' ')
  const [updateData, setUPDateData] = useState('')
  const [newsPost, seNewsPost] = useState('')
  const [idG, setIdG] = useState(null)
  const [titleG, setTitleG] = useState(' ')
  const [descG, setDescG] = useState(' ')
  const [dateG, setDateG] = useState(' ')
  const [video, setVideo] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [inputdata, setInputData] = useState('');
  const [twiterStatus, setTwiterStatus] = useState('');
  const [data, setData] = useState([]);




  const handleButtonClick = (section) => {
    if (section === 'section1') {
      setSection1Visible(true);
      setSection2Visible(false);
    } else if (section === 'section2') {
      setSection1Visible(false);
      setSection2Visible(true);
    }
  };



  const handleFormSubmit = (e) => {
    console.log("clicked user news")
    setIsLoading(true)
    e.preventDefault();
    // Create form data
    const formData = new FormData();
    formData.append('upload_video', video);
    formData.append('upload_photo', photo);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('date', date);

    // Make a POST request to submit the form data

    axios.post('https://backend-ekms.onrender.com/manual_news/get_post_social/', formData)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === 201) {
          seNewsPost("News Upload Successfully");

          setTimeout(() => {
            seNewsPost('') // Clear the uplaod message after 3 seconds
          }, 3000)
          //console.log("News Uploaded")

        } else {
          console.log("news Upload Faild")

        }

      })
      .catch((error) => {
        console.error(error);
        // Handle form submission error
      }).finally(() => {
        setIsLoading(false); // Set loading state back to false regardless of success or error
      });
  };


  useEffect(() => {
    getManualNews();
  }, []);


  const getManualNews = () => {
    axios.get('https://backend-ekms.onrender.com/manual_news/get_post_social/')
      .then(function (response) {
        // Handle success
        console.log(response)
        const newsData = (response.data)
        const currentDate = new Date();
        const filteredNews = newsData.filter(
          newsItem => new Date(newsItem.date).toDateString() === currentDate.toDateString()
        );

        setData(newsData)

      })
      .catch(function (error) {
        // Handle error
        //console.log(error);
      });

  }

  function selectUser(id, title, upload_photo, date, description, upload_video) {

    // //console.log(title)
    //  //console.log(description)
    // //console.log(id)

    setVideoG(upload_video)
    setPhotoG(upload_photo)
    setTitleG(title)
    setDescG(description)
    setDateG(date)
    setIdG(id)





  }




  const handleNewsUpdate = (e) => {
    e.preventDefault()
    setIsLoading(true)

    let items = { title: titleG, description: descG, date: dateG, id: idG }
    axios.put(`https://backend-ekms.onrender.com/manual_news/get_put_patch_delete_socialByID/${idG}`, items)
      .then((response) => {
        console.log(response);
        if (response.statusText == "") {
          setUPDateData("Data Updated ")
          console.log("Yes")
          setTimeout(() => {
            setUPDateData('') // Clear the uplaod message after 3 seconds
          }, 3000)
        } else {
          //console.log('failed')
        }

      })
      .catch((error) => {
        console.error(error);
      }).finally(() => {
        setIsLoading(false); // Set loading state back to false regardless of success or error
      });
  }

  const NewsupadteReferesh = () => {
    handleNewsUpdate()
  }


  const handlePostCode = (e) => {
    e.preventDefault();    
    if (inputdata.trim() === '') {
      setTwiterStatus('Please enter your code');
      return;
    }
    setIsLoading(true)
    const newInputData = { chtml: inputdata };
    axios
      .post('https://backend-ekms.onrender.com/manual_news/get_post_twitter/', newInputData)
      .then(function (response) {
        console.log(response)
        if (response.data.id > 0) {
          // console.log("Successfully Created !!!!!")
          setTwiterStatus('Successfully Created !!!!!');
          setTimeout(() => {
            setTwiterStatus('') // Clear the uplaod message after 3 seconds
          }, 3000)
        } else {
          //console.log('Create failed');
        }
        //console.log(response);
      })
      .catch(function (error) {
        // Handle error
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false); // Set loading state back to false regardless of success or error
      });
  };


  const handleGetTwiter = () => {
    axios
      .get('https://backend-ekms.onrender.com/manual_news/get_post_twitter/')
      .then(function (response) {
        // Handle success
        //console.log(response);
        const newsData = response.data;
        setData(newsData);
      })
      .catch(function (error) {
        // Handle error
        //console.log(error);
      });
  };






  return (
    <div>
      <div className='container-fluid '>
        <div className='btn-admin-container container'>
          <button onClick={() => handleButtonClick('section1')}
            className='btn btn-primary news-btn' style={{ backgroundColor: '#321c60' }}
          >Post News & Manage Data</button>
          <button onClick={() => handleButtonClick('section2')}
            className='btn btn-primary mx-5 twitter-btn' style={{ backgroundColor: '#321c60' }}
          >Post Twitter & Manage</button>
        </div>
      </div>
      {section1Visible && (
        <div className='container-fluid py-1' id='manulaNews'>
          <div className='container border' >
            <center><h2>Write News {data.title}</h2></center><hr className='py-5' />
            <form onSubmit={handleFormSubmit} className="container border rounded p-2">
              <center><h3 className='text-success' >{newsPost}</h3></center>
              <div className="mb-3">
                <label htmlFor="video" className="form-label">
                  Upload Video:
                </label>
                <input
                  type="file"
                  id="video"
                  accept="video/*"
                  onChange={(e) => setVideo(e.target.files[0])}
                  className="form-control"
                //disabled={photo ? true : false}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="photo" className="form-label">
                  Upload Photo:
                </label>
                <input
                  type="file"
                  id="photo"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  className="form-control"
                // disabled={video ? true : false}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description:
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">
                  Date:
                </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary" disabled={isLoading}>
                {isLoading ? "Please wait..." : "Submit News"}
                {isLoading && <i class="fa-solid fa-spinner fa-spin fa-spin-reverse"></i>}
              </button>
            </form>
            {/* View News Here */}

            <div className='container border border-secondary p-1 rounded my-5' id='manulaNews'>
              <center><h2>Posted News here</h2></center>
              <button className='btn btn-primary my-2' onclick={NewsupadteReferesh}>Refresh</button>
              <div className='table-responsive'>
                <table className='table table-border '>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Phot</th>
                      <th>Video</th>
                      <th>Date</th>
                      <th>Title</th>
                      <th>Descriptin</th>
                      <th>Action</th>
                      {/* <th>Action</th> */}
                    </tr>
                  </thead>

                  <tbody>
                    {
                      data.map((ele, index) => {
                        return (
                          <tr key={index}>
                            <td>{ele.id}</td>
                            <td><input type="file" files={ele.upload_photo} /></td>
                            <td><input type="file" files={ele.upload_video} /></td>
                            <td><input type="date" value={ele.date} /></td>
                            <td><input type="text" value={ele.title} /></td>
                            <td><input type="textarea" rows="5" className='form-control' value={ele.description} /></td>
                            <td ><button className='btn btn-info' onClick={() => selectUser(ele.id,
                              ele.title,
                              ele.upload_photo,
                              ele.date,
                              ele.description)}>Edit</button>

                            </td>
                            {/* <td><button className='btn btn-info mx-5' onClick={() => HandleNewsDalete(ele.id)}>Delete</button></td> */}

                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>

            </div>



            {/* news  edit box */}
            <div className='container border border-secondary p-5 rounded my-5' id='manulaNews' >

              <h3 className='my-3 text-success'>{updateData}</h3>
              <form >
                {/* <h2 className='text-left'>{idG}</h2> */}
                <div className="form-group">
                  <label for="exampleInputEmail1">Select file</label>
                  <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Upload Image"
                    files={photoG}
                    onChange={(e) => setPhotoG(e.target.files[0])} />

                </div>

                <div className="form-group">
                  <label for="exampleInputEmail1">Select file</label>
                  <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Upload Image"
                    files={videoG}
                    onChange={(e) => setVideoG(e.target.files[0])} />

                </div>

                <div className="form-group">
                  <label for="exampleInputPassword1">Title</label>
                  <input type="text" className="form-control" id="exampleInputPassword1"
                    value={titleG}
                    onChange={(e) => setTitleG(e.target.value)} />
                </div>


                <div className="form-group">
                  <label for="exampleFormControlTextarea1" className="form-label" >Description</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
                    value={descG}
                    onChange={(e) => setDescG(e.target.value)}></textarea>
                </div>

                <div className="form-group">
                  <label for="exampleInputPassword1">Date</label>
                  <input type="date" className="form-control" id="exampleInputPassword1"
                    value={dateG}
                    onChange={(e) => setDateG(e.target.value)} />
                </div>


                <button onClick={handleNewsUpdate} className="btn btn-primary" disabled={isLoading}>
                  {isLoading ? "Updating..." : "Update"}
                  {isLoading && <i class="fa-solid fa-spinner fa-spin fa-spin-reverse"></i>}
                </button>
              </form>

            </div>
          </div>

        </div>
      )}
      {section2Visible && (

        <div className='container-fluid' id='manulaNews'>

          <div className="container p-2 ">

            <form
              className="container border border-secondary py-3 rounded my-5"
              id='manulaNews'
            >
              <p className="text-success text-center">{twiterStatus}</p>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Enter Your Code
                </label>
                <textarea
                  className="form-control bg-dark text-light"
                  id="exampleFormControlTextarea1"
                  rows="10"
                  required
                  onChange={(e) => setInputData(e.target.value)}
                  value={inputdata}
                ></textarea>
              </div>
              
              <button onClick={handlePostCode}className="btn btn-primary" disabled={isLoading}>
                {isLoading ? "Posting..." : "Post Code"}
                {isLoading && <i className="fa-solid fa-arrow-trend-up mx-1" style={{ color: 'red' }}></i>}
              </button>

            </form>
          </div>

          <div className="container pb-5">
            <div
              className="container border border-secondary p-3 rounded my-5"
              id='manulaNews'
            >
              <button className="btn btn-info my-3" onClick={handleGetTwiter}>
                <i className="fa-solid fa-arrows-rotate fa-spin mx-1"></i>Refresh
              </button>
              <table className="table table-border">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>CHTML</th>

                  </tr>
                </thead>
                <tbody>
                  {data.map((ele, index) => {
                    return (
                      <tr key={index}>
                        <td>{ele.id}</td>
                        <td>
                          <input
                            type="textarea"
                            rows="5"
                            className="form-control text-dark"
                            value={ele.chtml}
                            readOnly
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      )}
    </div>
  );
}

export default App;
