import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Gallery1.css';



const galleryImages = [ images.semafor, images.cvekla, images.mango, images.zelenis, images.pahuljice,  images.dezert,  ]


const Gallery1 = () => {
  const scrollRef = React.useRef(null)
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <>
    <div className="app__gallery flex__center" id="galerija">

     
      <div className="app__gallery-content">

        
            <div className="rotating_logo_container">
              <img className="rotating-logo" src={images.logo1} alt="logo" />
            </div>



                    <SubHeading title="Instagram" />
                    <h1 className="headtext__cormorant">Foto Galerija</h1>
                    <p className="p__opensans">
                      Berlin u srcu grada Šapca. Za još slika možete posetiti naš instagram ili facebook profil.
                    </p>
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
