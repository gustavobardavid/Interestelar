import { useState, useEffect } from 'react';
import NasaImages from '../components/NasaImages';
import Loading from '../components/Loading';
import Header from '../components/Header';
import axios from 'axios';
import Carousel from 'react-material-ui-carousel';
import { Box, Container,  Stack, Typography } from '@mui/material';
import Hero from '../components/Hero';

export default function Home(){
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const API_KEY = 'pfOCjpXW6m2Ua9mDn0M4WwqUhSmQIHsrD9COBCch';

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false); 
        }, 3000);
      }, []);


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
        <>
        <Header
          foto = './logoInter.png'
          />
              {isLoading ? (
            <Loading 
            foto= './logoInter.png'
                  />
                  ) : (
                    
                    <div>
                      <Carousel className='carousel'
                          sx={{
                            width: '100%',
                            margin: '0 auto',
                            textAlign:'center'
                           }}
                           animation="slide"
                          autoPlay={true}
                          navButtonsAlwaysVisible={false}
                          indicatorIconButtonProps={{
                            style: {
                              color: 'var(--secondary)'
                            }
                          }}
                          activeIndicatorIconButtonProps={{
                            style: {
                              color: 'var(--terciary)'
                            }
                          }}
                          >
                          {images.map((image) => (
                            <div key={image.date}>
                              <Hero image={image}/>
                            </div>
                          ))}
                      </Carousel>
          </div>
 )}
              </>
    )
}