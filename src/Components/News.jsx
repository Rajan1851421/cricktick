import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/News.css';
import ManualNewsGet from './ManualNewsGet';
import { Modal, Button, Form } from 'react-bootstrap';

function CricketNews() {
  const [news, setNews] = useState([]);
  const [message, setMessage] = useState(' ')
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [name, setName] = useState(' ')


  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get('https://backend-ekms.onrender.com/sports_news/cricket_news/')
      .then(response => {
        //console.log(response);
        //console.log(response.data.message);
        setMessage(response.data.message)       
        let responseData = response.data;
        if (!Array.isArray(responseData)) {
          responseData = [responseData];
        }
        setNews(responseData);
        setTimeout(() => {
          setShowModal(true);
        },20000);
      })       
      
      .catch(error => {
        //console.log(error);
      });

  }, []);


  // *******************************Popup*****************


  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Clicked Modal")

    axios.post(`https://backend-ekms.onrender.com/subscription/get_post_social/`, {
      name: name,
      email: email,
      whatsapp: whatsapp
    })
      .then(response => {
        //console.log("Modal==",response)
        if (name.trim() === '' || email.trim() === '') {
          setError('Please fill in all fields.');
          setShowModal(true);
          return;
        } if (response.statusText == "Created") {
          //console.log("Created Rajan")
          setShowModal(false);
        } 
        else {
          setShowModal(true);
        }
      }).catch(error => {
        //console.log(error)
      })

  };

  const handleClose = () => {
    setShowModal(false);
  };


 
  


  // *******************************Popup*****************


  const newData = news.length > 0 ? news.flatMap(item => {
    const { date = [], title = [], details = [], image = [] } = item;
    const n = Math.min(date.length, title.length, details.length, image.length);
    let prevDate = '';
    return Array.from({ length: n }, (_, i) => {
      let currentDate = date[i]
        ?.replace('NDTV Sports Desk', '')
        .replace('Press Trust of India', '')
        .replace('Asian News International', '')
        .replace('Rica Roy', '');
      if (!currentDate) {
        currentDate = prevDate;
      } else {
        prevDate = currentDate;
      }
      return {
        date: currentDate,
        title: title[i],
        details: details[i],
        image: image[i]
      };
    });
  }) : [];

  const [clickedIndex, setClickedIndex] = useState(null);

  const handleMoreButtonClick = index => {
    setClickedIndex(index);
  };

  return (



    <div className="news-container ">

      <h2 id='h1'>Live Cricket News</h2>
      {news.length === 0 ? (
        <center>
          <p id='h1'>Please Wait...</p>
        </center>

      ) : (
        <div className="news-box-container ">
          <div>
            <ManualNewsGet />
          </div>
          {newData.map((item, index) => (
            <div className="news-box" key={index}>
              <div className="container">
                <div className="row">
                  <div className="col-3">
                    <img src={item.image} className="new-img" alt="news-image" />
                  </div>
                  <div className="col-9">
                    <p className="date">{item.date}</p>
                    <p className="title">{item.title}</p>
                    <p className="details">
                      {clickedIndex === index ? item.details : `${item.details.slice(0, 55)}...`}
                      {item.details.length > 55 && (
                        <button
                          className="read-more-button badge badge-primary mx-3"
                          onClick={() => handleMoreButtonClick(index)}
                        >
                          {clickedIndex === index ? 'Read Less' : 'Read More'}
                        </button>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Pop Box */}
      <Modal show={showModal} onHide={handleClose} className='my-5 my-5' id='modal'>
        <Modal.Header closeButton id='modal'>
          <Modal.Title ><h2 class="badge badge-pill  text-center" style={{color:'purple'}}><i class="fa-regular fa-newspaper mx-2"></i>News Subscribe Now</h2> </Modal.Title>
        </Modal.Header>
        <Modal.Body id='modal'>
          <Form onSubmit={handleSubmit} >
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Form.Group>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='my-3'>
              <Form.Label>WhatsApp Mobile No. </Form.Label>
              <Form.Control
                type="number"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" className='my-3'>Submit</Button>
          </Form>
        </Modal.Body>
        
      </Modal>
    </div>
  );
}

export default CricketNews;
