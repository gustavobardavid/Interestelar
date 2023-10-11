import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'pfOCjpXW6m2Ua9mDn0M4WwqUhSmQIHsrD9COBCch'; 

const NasaImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchNasaImages = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=5`
        );
        setImages(response.data);
      } catch (error) {
        console.error('Erro ao buscar imagens da NASA:', error);
      }
    };

    fetchNasaImages();
  }, []);

  return (
    <div>
      <h1>NASA Images</h1>
      {images.map((image) => (
        <div key={image.date}>
          <h2>{image.title}</h2>
          <img src={image.url} alt={image.title} />
          <p>{image.explanation}</p>
        </div>
      ))}
    </div>
  );
};

export default NasaImages;
