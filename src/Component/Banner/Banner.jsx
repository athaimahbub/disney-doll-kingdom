import React from 'react';

import bannerImg1 from '../../assets/banner/pic1.jpg';
import bannerImg2 from '../../assets/banner/chindrella1.jpg';
import bannerImg3 from '../../assets/banner/img4.jpg';


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full ">
    <img src={bannerImg1} className="w-full rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle btn-outline btn-accent">❮</a> 
      <a href="#slide2" className="btn btn-circle btn-outline btn-accent">❯</a>
    </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full mt-4">
        <img src={bannerImg2} className="w-full rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle btn-outline btn-accent">❮</a> 
      <a href="#slide3" className="btn btn-circle btn-outline btn-accent">❯</a>
    </div>
    </div> 
       <div id="slide3" className="carousel-item relative w-full">
           <img src={bannerImg3} className="w-full rounded-lg " />
       <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle btn-outline btn-accent">❮</a> 
      <a href="#slide1" className="btn btn-circle btn-outline btn-accent">❯</a>
    </div>
  </div> 
  
</div>
    );
};

export default Banner;