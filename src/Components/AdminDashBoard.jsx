import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import "../Styles/admindashboard.css";



function App() {
  const [section1Visible, setSection1Visible] = useState(true);
  const [section2Visible, setSection2Visible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [newsDel, setnewsDel] = useState('');
  const [subsDel, setSubsDel] = useState('');
  const [newsPost, seNewsPost] = useState('')
  const [newsupdate, setNewsUpadate] = useState('')
  const [photoG, setPhotoG] = useState(' ')
  const [videoG, setVideoG] = useState(' ')
  const [idG, setIdG] = useState(null)
  const [titleG, setTitleG] = useState(' ')
  const [descG, setDescG] = useState(' ')
  const [dateG, setDateG] = useState(' ')
  const [video, setVideo] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [data, setData] = useState([])
  // subscriber hooks
  const [subsdata, setSubsdata] = useState([])
  const [inputdata, setInputData] = useState(' ')
  const [twiterStatus, setTwiterStatus] = useState('')
  const [del, setDel] = useState('')
  const [contact, setContact] = useState([])
  const [contactusdelete, setContactusDelete] = useState('')




  const handleFormSubmit = (e) => {
    setIsLoading(true);
    // console.log('clicked newspost')
    e.preventDefault();
    // Create form data
    const formData = new FormData();
    formData.append('upload_video', video);
    formData.append('upload_photo', photo);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('date', date);

    // Make a POST request to submit the form data

    axios.post('https://liveupcomingpro-production-f9ac.up.railway.app/manual_news/get_post_social/', formData)
      .then((response) => {
        console.log(response);
        if (response.data.status == 201) {
          seNewsPost("News Upload Successfully");
          // console.log("Response");      
          
          setTimeout(() => {
            seNewsPost('') // Clear the uplaod message after 3 seconds
          }, 3000)
          //// console.log("News Uploaded")


        } else {
          seNewsPost("News Upload Successfully")
          setTimeout(() => {
            seNewsPost('') // Clear the uplaod message after 3 seconds
          }, 3000)
        }


      })
      .catch((error) => {
        console.error(error);
        // Handle form submission error
      })
      .finally(() => {
        setIsLoading(false); // Set loading state back to false regardless of success or error
      });
  };







  const HandleNews = () => {
    axios.get('https://liveupcomingpro-production-f9ac.up.railway.app/manual_news/get_post_social/')
      .then(function (response) {

        const newsData = (response.data)
        const currentDate = new Date();
        const filteredNews = newsData.filter(
          newsItem => new Date(newsItem.date).toDateString() === currentDate.toDateString()
        );
        setData(newsData)
      })
      .catch(function (error) {
        // Handle error
        //// console.log(error);
      });

  }

  // Select edit for news Update javscript code 

  function selectUser(id, title, upload_photo, date, description) {
    setIsDivVisible(!isDivVisible);
    setPhotoG(upload_photo)
    setTitleG(title)
    setDescG(description)
    setDateG(date)
    setIdG(id)

  }
  // news Update javscript code 

  const handleNewsUpdate = (e) => {
    setIsLoading(true)
    e.preventDefault()
    let items = { title: titleG, description: descG, date: dateG, id: idG }
    axios.put(`https://liveupcomingpro-production-f9ac.up.railway.app/manual_news/get_put_patch_delete_socialByID/${idG}`, items)
      .then((response) => {
        //  //// console.log(response);
        if (response.statusText == "OK") {
          setNewsUpadate("Data Updated successfully")

          setTimeout(() => {
            setNewsUpadate('') // Clear the delete message after 3 seconds
          }, 3000)


        } else {
          //// console.log('failed')
        }

      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false); // Set loading state back to false regardless of success or error
      });

  }

  // news Delete javscript code 

  const HandleNewsDalete = async (id) => {
    //// console.log(id)
    try {
      await axios.delete(`https://liveupcomingpro-production-f9ac.up.railway.app/manual_news/get_put_patch_delete_socialByID/${id}`)
        .then(response => {
          //// console.log(response)
          if (response.data == "") {
            setnewsDel("Successfully Deleted !!")
            setTimeout(() => {
              setnewsDel('') // Clear the delete message after 3 seconds
            }, 3000)


          } else {
            //// console.log("Delete failed")
          }
        })
      HandleNews();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };



  // SBUSCRIBER SECTION JAVSCRIPT CODE
  const HandleSubscriber = () => {
    //// console.log("Clicked Subscriber")
    axios.get('https://liveupcomingpro-production-f9ac.up.railway.app/subscription/get_post_social/')
      .then(response => {
        //  //// console.log(response)
        setSubsdata(response.data)
      }).catch(error => {
        //// console.log(error)
      })
  }



  //-------------------------->Handle Remove subcriber<----------------------------------
  const HandleSubscriberDelete = (id) => {

    axios.delete(`https://liveupcomingpro-production-f9ac.up.railway.app/subscription/get_put_patch_delete_socialByID/${id}`)
      .then(response => {
        if (response.data == "") {
          setSubsDel('Item deleted successfully')
          setTimeout(() => {
            setSubsDel('') // Clear the delete subscriber message after 3 seconds
          }, 3000)
          //// console.log('Item deleted successfully');
          HandleSubscriber();
        } else {
          //// console.log("delete Filed")
        }
      }).catch(error => {
        console.error('Error deleting item:', error);
      })

    HandleSubscriber();


  }

  const handleButtonClick = (section) => {
    if (section === 'section1') {
      setSection1Visible(true);
      setSection2Visible(false);
    } else if (section === 'section2') {
      setSection1Visible(false);
      setSection2Visible(true);
    }
  };



  const handlePostCode = (e) => {
    setIsLoading(true);
    e.preventDefault()
    const newInputData = { chtml: inputdata }
    axios.post("https://liveupcomingpro-production-f9ac.up.railway.app/manual_news/get_post_twitter/", newInputData)
      .then(function (response) {
        if (response.data.id > 0) {
          setTwiterStatus("Successfully Created !!!!!")
          setInputData(" ")
          setTimeout(() => {
            setTwiterStatus('') // Clear the twiterStatus message after 3 seconds
          }, 3000)
        } else {
          //// console.log("Create failed")
        }

        //// console.log(response)
      })
      .catch(function (error) {
        // Handle error
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false); // Set loading state back to false regardless of success or error
      });
  }



  const handleGetTwiter = () => {
    axios.get('https://liveupcomingpro-production-f9ac.up.railway.app/manual_news/get_post_twitter/')
      .then(function (response) {
        // Handle success
        console.log(response)
        const newsData = (response.data)


        setData(newsData)
      })
      .catch(function (error) {
        // Handle error
        //// console.log(error);
      });
  }
  // ------------------------------------->Delete Post<-----------

  const handlePostDelete = async (id) => {
    //// console.log(id)
    try {
      await axios.delete(`https://liveupcomingpro-production-f9ac.up.railway.app/manual_news/get_put_patch_delete_twitterByID/${id}`);

      setDel('Item deleted successfully');
      handleGetTwiter()
      setTimeout(() => {
        setDel('') // Clear the delete message after 3 seconds
      }, 3000)

    } catch (error) {
      console.error('Error deleting item:', error);
    }

  };
  // contact us API intigration
  const handleContactus = () => {
    axios.get(`https://liveupcomingpro-production-f9ac.up.railway.app/contact/get_post_social/`)
      .then(response => {
        // console.log(response)
        setContact(response.data)
      }).catch(error => {
        // console.log(error)
      })
  }
  // contact us delete data
  const handlecontactusDelete = (id) => {
    axios.delete(`https://liveupcomingpro-production-f9ac.up.railway.app/contact/get_put_patch_delete_socialByID/${id}`)
      .then(response => {
        if (response.data == "") {
          setContactusDelete("Data deleted successfully !! ")
          handleContactus();
          setTimeout(() => {
            setContactusDelete('') // Clear the delete message after 3 seconds
          }, 3000)
          // window.alert("Data Deleted ")


        }

        else {
          setDel("Failed Try Again")
          // window.alert('Please try again')
        }
        // console.log(response)
      }).catch(error => {
        // console.log(error)
      })

  }



  return (
    <div className='container-fluid '>
      <div className='btn-admin-container container'>
        <button onClick={() => handleButtonClick('section1')}
          className='btn btn-primary news-btn' style={{ backgroundColor: '#321c60' }}
        >Post News & Manage Data</button>
        <button onClick={() => handleButtonClick('section2')}
          className='btn btn-primary mx-5 twitter-btn' style={{ backgroundColor: '#321c60' }}
        >Post Twitter & Manage</button>
      </div>
      {section1Visible && (
        <div>
          <div className="container-fluid" id='manulaNews'>
            <div className=' container py-5' >
              <center ><h2 id='h1'>Write News {data.title}</h2></center><hr className='my-3' />
              <form onSubmit={handleFormSubmit} className="container border border-secondary p-3 rounded ">
                <center><h5 className='text-success' >{newsPost}    </h5></center>
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
                    required
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
                    required
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
                    required
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
                    required
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    Date:
                  </label>c
                  <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                  {isLoading ? "Please wait..." : "Submit News"}
                  {isLoading && <i class="fa-solid fa-spinner fa-spin fa-spin-reverse"></i>}
                </button>
              </form>
              <div className='border border-secondary p-3 rounded my-5' id='manulaNews'>
                <center><h2>Posted News here</h2></center>


                <button className='btn btn-warning my-5' onClick={HandleNews}> Refresh</button>
                <center><h3 className='text-left text-danger'>{newsDel}</h3></center>
                <div className='table-responsive'>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Title</th>
                        <th>Descriptin</th>
                        <th>Action</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data.map((ele, index) => {
                          return (
                            <tr key={index}>
                              <td>{ele.id}</td>
                              <td><input type="date" className='form-control' value={ele.date} /></td>
                              <td><input type="text" className='form-control' value={ele.title} /></td>
                              <td><input type="textarea" rows="5" className='form-control' value={ele.description} /></td>
                              <td ><button className='btn btn-info' onClick={() => selectUser(ele.id,
                                ele.title,
                                ele.upload_photo,
                                ele.date,
                                ele.description)}><i class="fa-solid fa-pen-to-square"></i> Edit</button>
                              </td>
                              <td><button className='btn btn-danger mx-5' onClick={() => HandleNewsDalete(ele.id)}> <i className="fa-solid fa-trash mx-1"></i>Delete </button></td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>

              </div>



              {/* Update News */}
              {isDivVisible && <div>
                <div className='border border-secondary p-3 rounded ' id='manulaNews'>
                  <h3>Update Section</h3> <hr />
                  <h2 className='my-3 text-success'>{newsupdate}</h2>
                  <form >
                    <h2 className='text-left'>{idG}</h2>
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
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"
                        value={descG}
                        onChange={(e) => setDescG(e.target.value)}></textarea>
                    </div>

                    <div className="form-group">
                      <label for="exampleInputPassword1">Date</label>
                      <input type="date" className="form-control" id="exampleInputPassword1"
                        value={dateG}
                        onChange={(e) => setDateG(e.target.value)} />
                    </div>

                    {/* <button onClick={handleNewsUpdate} className="btn btn-primary">Update</button> */}
                    <button onClick={handleNewsUpdate} className="btn btn-primary" disabled={isLoading}>
                      {isLoading ? "Updating..." : "Update"}
                      {isLoading && <i class="fa-solid fa-spinner fa-spin fa-spin-reverse"></i>}
                    </button>
                  </form>

                </div>

              </div>}

              {/* <-----------------------subscriber data ----------------------->*/}
              <div className='container border border-secondary p-3 rounded' id='manulaNews'>
                <label >CLICK HERE TO MANAGE SBUSCRIBER DATA</label><br />
                <button className='btn btn-warning my-5' onClick={HandleSubscriber}> Refresh</button>
                <center><h3 classsName='text-success'>{subsDel}</h3></center>
                <div className='table-responsive'>
                  <table className='table '>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>WhatasApp No.</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        subsdata.map((ele, index) => {
                          return (

                            <tr key={index}>
                              <td>{ele.id}</td>
                              <td>{ele.name}</td>
                              <td>{ele.email}</td>
                              <td>{ele.whatsapp}</td>
                              <td><button className='btn btn-danger' onClick={() => HandleSubscriberDelete(ele.id)}> <i class="fa-solid fa-trash mx-1"></i>Delete</button></td>
                            </tr >

                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>


              </div>

            </div >
          </div>
        </div>
      )}
      {section2Visible && (
        <div>
          <div className='container-fluid py-5' id='manual-twiter'>

            <div className='container border border-secondary  rounded twitter-border  ' id='manual-twiter'>
              <form className='p-3 my-3 twitter-form' >
                <h4 className='text-success text-center'>{twiterStatus}</h4>
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">Enter Your Code</label>
                  <textarea className="form-control " id="exampleFormControlTextarea1" rows="10" required
                    onChange={(e) => setInputData(e.target.value)}></textarea>
                </div>
                {/* <button className='btn btn-warning' onClick={handlePostCode}>Post code</button> */}
                <button onClick={handlePostCode} className="btn btn-primary" disabled={isLoading}>
                  {isLoading ? "Posting ....." : "Post Code"}
                  {isLoading && <i class="fa-solid fa-spinner fa-spin fa-spin-reverse"></i>}
                </button>


              </form>

            </div>
            <div className='container border border-secondary p-3 rounded my-5' id='manual-twiter'>
              <div className='border p-3 rounded'>

                <p className='text-danger'>{del && del}</p>
                <button className='btn btn-info my-3' onClick={handleGetTwiter}>Twitter Code Refresh</button>
                <table className='table table-border'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>CHTML</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((ele, index) => {
                        return (
                          <tr key={index}>
                            <td>{ele.id}</td>
                            <td><input type="textarea" rows="5" className='form-control' value={ele.chtml} /></td>
                            <td><button className='btn btn-danger' onClick={() => handlePostDelete(ele.id)}> <i class="fa-solid fa-trash mx-1"></i>Delete</button></td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
              {/* contact us data */}

              <div className='border p-3 rounded mt-2'>
                <button onClick={handleContactus} className='btn btn-info my-3'>Contact Us Data Referesh</button>
                <div className='table-responsive'>
                  <table className='table table-border'>
                    <span className='text-center text-danger'>{contactusdelete}</span>
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Frist Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mob. No.</th>
                        <th>Message</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    {contact.map(item => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        <td>{item.whatsapp}</td>
                        <td>{item.msg}</td>
                        <td><button className='btn btn-danger' onClick={() => handlecontactusDelete(item.id)}> <i class="fa-solid fa-trash mx-1"></i>Delete</button></td>

                      </tr>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
