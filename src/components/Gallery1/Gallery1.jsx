import React, {  useRef, useState } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components'
import { images } from '../../constants'
import audioData from './audioData';
import './Gallery1.css';



const galleryImages = [ images.semafor, images.cvekla, images.mango, images.zelenis, images.pahuljice,  images.dezert,  ]


const Gallery1 = () => {

  const [currentAudioIndex, setCurrentAudioIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);



  const scrollRef = React.useRef(null)
 
  

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }


  

  const playRandomSong = () => {
    const newIndex = Math.floor(Math.random() * audioData.length);
    setCurrentAudioIndex(newIndex);
  
    audioRef.current.src = audioData[newIndex].audioSrc;
    audioRef.current.preload = 'auto'; // Preload the audio
    audioRef.current.load(); // Load the audio
  
    audioRef.current.addEventListener('canplaythrough', () => {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      });
    });
  
    audioRef.current.addEventListener('error', (e) => {
      console.error('Audio error:', e);
      // Handle the error here (e.g., display a message to the user)
    });
  };

  const pauseSong = () => {
    audioRef.current.pause();
    setIsPlaying(false); // Postavite stanje na pauzu
  };

  const toggleAudio = () => {
    if (isPlaying) {
      pauseSong();
    } else {
      playRandomSong();
    }
  };


  return (
    <>
    <div className="app__gallery flex__center" id="galerija">

     
      <div className="app__gallery-content">


      <div className="rotating_logo_container" onClick={toggleAudio}>
          <img className={`rotating-logo ${isPlaying ? 'playing' : ''}`} src={images.logo1} alt="logo" />
        </div>

        <audio ref={audioRef}>
          <source src={audioData[currentAudioIndex]?.audioSrc} type="audio/mpeg" />
        </audio>

                    <SubHeading title="Instagram" />
                    <h1 className="headtext__cormorant">Foto Galerija</h1>
                    <p className="p__opensans">
                      Berlin u srcu grada Šapca. Za još slika možete posetiti naš instagram ili facebook profil.
                    </p>

                    <div className="container">
                    <div className="btns">
                      <button
                        onClick={() => window.open("https://www.instagram.com/kaffe_berlin/", "_blank")}
                        className="custom__button"
                        type="button"
                      >Instagram

                      </button>
                      <button
                        onClick={() => window.open("https://www.instagram.com/kaffe_berlin/", "_blank")}
                        className="custom__button"
                        type="button"
                      >Facebook

                      </button>


               


                    </div>

     
                    <div className="rotating_logo_container_mobile" onClick={toggleAudio}>
                      <img className={`rotating-logo ${isPlaying ? 'playing' : ''}`} src={images.logo1} alt="logo" />
                 </div>

                 

            </div>
     
  </div>     

    


      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image}  alt="slike galerija" />
              <BsInstagram onClick={() => window.open("https://www.instagram.com/kaffe_berlin/", "_blank")} className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>

      </div>

            
    </div >


</>
  );
};

export default Gallery1;
