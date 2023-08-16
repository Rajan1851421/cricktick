import React, { useState } from 'react';
import axios from 'axios';

function PostForm() {
  const [formData, setFormData] = useState({
    upload_photo: '',
    upload_video: '',
    title: '',
    description: '',
    date: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('upload_photo', formData.upload_photo);
    formDataToSend.append('upload_video', formData.upload_video);
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('date', formData.date);

    try {
      const response = await axios.post(
        'https://backend-ekms.onrender.com/manual_news/get_post_social/',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Handle success or display a message to the user
      //console.log('Post successful:', response.data);
    } catch (error) {
      // Handle error or display an error message to the user
      console.error('AxiosError:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='my-5'>
      <div>
        <label htmlFor="upload_photo">Upload Photo</label>
        <input
          type="file"
          id="upload_photo"
          name="upload_photo"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="upload_video">Upload Video</label>
        <input
          type="file"
          id="upload_video"
          name="upload_video"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostForm;
