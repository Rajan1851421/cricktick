import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function FullNews() {
    const [photourl, setPhotoUrl] = useState('https://backend-ekms.onrender.com/')
    const { id } = useParams()
    // console.log(id)
    const [news, setNews] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`https://backend-ekms.onrender.com/manual_news/get_put_patch_delete_socialByID/${id}`)
            .then((response) => {
                console.log(response);
                setNews(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    // go to top button function
    const GotoTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <div className='container-fluid mt-5 px-0' id='AdminEmp'> {/* Use container-fluid and px-0 to make it full-width */}
                <div className="container" id='AdminEmp'>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xl-12 col-x-12 ">
                            <div class="card my-5 d-flex justify-content-center w-100 mx-0" id='AdminEmp'> {/* Use mx-0 to remove horizontal margin */}
                                <div class="card-header ">
                                    <Link to='/manualNewsGet' className='text-decoration-none fw-bold p-2  ' style={{ color: "#5c07a2" }} >
                                        <i class="fa-solid fa-arrow-left fa-lg" style={{ color: "#5c07a2" }}></i>
                                        &nbsp;Back</Link>
                                    <h3 className='text-left' id='h1'>{news.title}</h3>
                                    <p className='text-left ' id='h1'>{news.date}</p>
                                </div>
                                <div class="card-body">
                                    <div className="row d-flex justify-content-evenly">
                                        <div className="col-md-5  text-center ">
                                            <img className="img-thumbnail"  src={`${photourl}${news.upload_photo}`} alt="no image" />
                                        </div>
                                        <div className="col-md-5  text-center">
                                            <div class="embed-responsive embed-responsive-4by3">
                                            {/* <iframe className="embed-responsive-item" src={`${photourl}${news.upload_video}`} title="Video" allowFullScreen></iframe> */}
                                            <video controls width="100%" height="100%" src={`${photourl}${news.upload_video}`} type="video/mp4"></video>
                                            </div>
                                            
                                        </div>
                                    </div> <hr />
                                    <p class="card-text text-center" id='h1'>{news.description}</p>
                                    <div className=' d-flex float-right'>
                                        <button onClick={GotoTop} className='btn btn-primary ' style={{ backgroundColor: 'purple' }}>
                                            &#x2191;
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FullNews
