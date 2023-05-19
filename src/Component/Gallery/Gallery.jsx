import React from 'react';
import galleryImg1 from '../../assets/gallery/p1.webp';
import galleryImg2 from '../../assets/gallery/p2.avif';
import galleryImg3 from '../../assets/gallery/p3.jpg';
import galleryImg4 from '../../assets/gallery/p4.jpg';
import galleryImg5 from '../../assets/gallery/p5.jpg';
import galleryImg6 from '../../assets/gallery/p6.jpg';
import galleryImg7 from '../../assets/gallery/p7.webp';



const Gallery = () => {
    return (
        <div className="container mx-auto mt-8">
            <h2 className='text-center mb-8 text-4xl text-blue-800 font-bold'>Disney Doll Kingdom Gallery</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Photo items will be added here */}
          <div className="w-full h-48 md:h-auto md:aspect-w-1 md:aspect-h-1 border-solid border-2 border-blue-400 rounded ">
             <img src={galleryImg1} className="w-full rounded-lg" />  
          </div>
          <div className="w-full h-48 md:h-auto md:aspect-w-1 md:aspect-h-1 border-solid border-2 border-blue-400 rounded ">
             <img src={galleryImg2} className="w-full rounded-lg" />  
          </div>
          <div className="w-full h-48 md:h-auto md:aspect-w-1 md:aspect-h-1 border-solid border-2 border-blue-400 rounded">
             <img src={galleryImg3} className="w-full rounded-lg" />  
          </div>
          <div className="w-full h-48 md:h-auto md:aspect-w-1 md:aspect-h-1 border-solid border-2 border-blue-400 rounded">
             <img src={galleryImg4} className="w-full rounded-lg" />  
          </div>
          {/* secound row */}
          <div className="w-full h-48 md:h-auto md:aspect-w-1 md:aspect-h-1 border-solid border-2 border-blue-400 rounded">
             <img src={galleryImg5} className="w-full rounded-lg" />  
          </div>
          <div className="w-full h-48 md:h-auto md:aspect-w-1 md:aspect-h-1 border-solid border-2 border-blue-400 rounded">
             <img src={galleryImg6} className="w-full rounded-lg" />  
          </div>
          <div className="w-full h-48 md:h-auto md:aspect-w-1 md:aspect-h-1 border-solid border-2 border-blue-400 rounded">
             <img src={galleryImg7} className="w-full rounded-lg" />  
          </div>
          <div className="w-full h-48 md:h-auto md:aspect-w-1 md:aspect-h-1 border-solid border-2 border-blue-400 rounded">
             <img src={galleryImg3} className="w-full rounded-lg" />  
          </div>
        </div>

        
      </div>
    );
};

export default Gallery;