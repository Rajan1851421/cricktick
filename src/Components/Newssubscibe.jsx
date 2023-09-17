import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

function Newssubscibe() {
    const [data, setData] = useState([])
    const [msg, setMsg] = useState('')
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState(null); // Changed to null to avoid default value being sent as string
    const [name, setName] = useState(' ');
    const [expandedIndex, setExpandedIndex] = useState(-1);


    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 30000);
        return () => clearTimeout(timer);
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://liveupcomingpro-production-f9ac.up.railway.app/subscription/get_post_social/', {
                name: name,
                email: email,
                whatsapp: whatsapp
            })
            .then(response => {
                console.log(response);
                if (name.trim() === '' || email.trim() === '') {
                    setError('Please fill in all fields.');
                    setShowModal(true);
                    return;
                }
                if (response.status == 201) {
                    //console.log('Created Rajan');
                    setMsg("Thanks For Connecting")
                    setEmail('')
                    setName('')
                    setWhatsapp('')
                    setTimeout(() => {
                        setMsg('') // Clear the twiterStatus message after 3 seconds
                        setShowModal(false);
                    }, 5000)
                    
                    // Setmessage('You are Subscribed !!')
                    
                } else {
                    setShowModal(true);
                }
            })
            .catch(error => {
                //console.log(error);
            });
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
            {data.map((item, index) => (
                <div key={index}>
                    {/* Render data from API */}
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <Button onClick={() => setExpandedIndex(index)}>Read More</Button>

                    {/* Popup Card */}
                    <Modal show={expandedIndex === index} onHide={() => setExpandedIndex(-1)}>
                        <Modal.Header closeButton>
                            <Modal.Title>{item.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>{item.description}</p>
                            {/* Add more details from the API if needed */}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setExpandedIndex(-1)}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            ))}

            {/* Popup for Subscription */}
            <Modal show={showModal} onHide={handleClose}  >
                <Modal.Header closeButton>

                    <Modal.Title className="text-center w-100">

                        <img src="./newsSubcribeTitle.png" alt='image ' style={{ height: '120px' }} />

                    </Modal.Title>


                </Modal.Header>
                <Modal.Body className='news-subcribe' style={{
                    backgroundImage: 'url("https://img.freepik.com/free-vector/soccer-stadium_1284-22432.jpg?size=626&ext=jpg&ga=GA1.1.180599784.1691488875&semt=sph")',
                    backgroundSize: 'cover'
                }}>


                    <Form onSubmit={handleSubmit}>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        { msg && <p style={{color:'green'}}>{msg}</p>}

                        <Form.Group>
                            <Form.Label className='text-light'>Name:</Form.Label>
                            <Form.Control

                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className='text-light'>Email:</Form.Label>
                            <Form.Control

                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className='text-light'>WhatsApp Number:</Form.Label>
                            <Form.Control

                                type="text"
                                value={whatsapp}
                                onChange={(e) => setWhatsapp(e.target.value)}
                            />
                        </Form.Group><br />
                        <Button type="submit" className='my-3 btn btn-light w-100' style={{ backgroundColor: '#311c60', color: 'white' }}>Subscribe</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Newssubscibe;
