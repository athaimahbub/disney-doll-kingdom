import React from 'react';
import galleryImg4 from '../../assets/gallery/p4.jpg';

const AudienceReview = () => {
    return (
        <div className='my-12'>
            <h2 className='text-center mb-8 text-4xl text-blue-800 font-bold'>Audience Review</h2>
            <div className="container mx-auto mt-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="card  w-96 bg-base-100 shadow-xl border-solid border-2 border-gray-400 rounded">
                
                    <div className="card-body   ">
                     <h2 className="card-title text-blue-700 text-center font-bold">Frozen Dolls</h2>
                    <p className='text-gray-600'>The Disney princess doll is an enchanting toy that brings the magic of beloved characters to life. With meticulous attention to detail, it captures the essence of each princess in its design, making it a must-have for Disney enthusiasts and young children alike.One of the standout features of the doll is its exquisite outfit. The costume is beautifully crafted, showcasing the signature style of the princess it represents. The colors are vibrant, and the fabric feels high-quality, adding to the overall authenticity of the doll.</p>
                  <div className="card-actions justify-end">

                  </div>
              </div>
              </div>

            {/* second card */}
            <div className="card w-96 bg-base-100 shadow-xl border-solid border-2 border-gray-400 rounded">
                    
                    <div className="card-body   ">
                     <h2 className="card-title text-blue-700 text-center font-bold">Frozen Dolls</h2>
                    <p className='text-gray-600'>The Frozen dolls are captivating toys inspired by the beloved characters from the hit Disney movie. These dolls beautifully capture the essence of Elsa, Anna, and their enchanting world. The attention to detail in their design is impressive, from their intricately styled hair to their intricately crafted costumes. The dolls' quality construction ensures durability, allowing for hours of imaginative play. These dolls are a must-have for Frozen fans, providing endless fun and bringing the magic of the movie into playtime. </p>
                  <div className="card-actions justify-end">
                    
                  </div>
              </div>
              </div>

              {/* Third Card */}
              <div className="card w-96 bg-base-100 shadow-xl border-solid border-2 border-gray-400 rounded">
              
                    <div className="card-body   ">

                    <div className="btn btn-ghost btn-circle avatar justify-end">
                  <div className="w-24 rounded-full">
                     <img src={galleryImg4} />
                  </div>
                  </div>
                  <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-600" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-600" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-600" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-600" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-600" />
                  
                    </div>
                     
                    <p className='text-gray-600'>The Donald Duck toy is a delightful collectible for Disney fans. With its iconic design and recognizable features, it captures the essence of this beloved character. The toy is well-made, ensuring durability for long-lasting enjoyment. Donald's playful and mischievous personality shines through in the toy's expression. Whether displayed as a collector's item or used for imaginative play, the Donald Duck toy is a charming addition to any Disney collection and is sure to bring a smile to fans of all ages.</p>
                  
              </div>
              </div>
        </div>
        </div>      
    </div>
   
    );
};

export default AudienceReview;