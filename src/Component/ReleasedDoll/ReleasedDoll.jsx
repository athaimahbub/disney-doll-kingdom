import React from 'react';
import galleryImg5 from '../../assets/gallery/p5.jpg';
import galleryImg7 from '../../assets/gallery/p7.webp';
import photo1 from '../../assets/gallery/c1.jpg';
import photo2 from '../../assets/gallery/c2.jpg';

const ReleasedDoll = () => {
    return (
        <div>
            <h2 className='text-center mb-8 text-4xl text-blue-800 font-bold'>Newly Realeased Doll in Disney Doll Kingdom</h2>
            <div className="carousel rounded-box">
  <div className="carousel-item">
    <img src={photo1} alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src={galleryImg7} alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src={photo2} alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src={galleryImg5} alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src={photo1} alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src={photo2} alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src={galleryImg5} alt="Burger" />
  </div>
</div>
        </div>
    );
};

export default ReleasedDoll;