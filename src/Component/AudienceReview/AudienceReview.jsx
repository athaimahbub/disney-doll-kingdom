import React from 'react';
import galleryImg4 from '../../assets/gallery/p4.jpg';

const AudienceReview = () => {
    return (
        <div className='my-12'>
            <h2 className='text-center mb-8 text-4xl text-blue-800 font-bold'>Audience Review</h2>
            <div className="container mx-auto mt-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="card w-96 bg-base-100 shadow-xl border-solid border-2 border-gray-400 rounded">
                    
                  <div className="card-body   ">
                   <h2 className="card-title text-blue-700 text-center font-bold">Disney princess</h2>
                  <p className='text-gray-600'>Disney Princess, also called the Princess Line, is a media franchise and toy line owned by the Walt Disney Company. Created by Disney Consumer Products chairman Andy Mooney, the franchise features a lineup of female protagonists who have appeared in various Disney franchises.The franchise does not include all princess characters from the whole of Disney-owned media, but rather refers to select specific characters from the company's animated films, including only protagonists of animated films from Walt Disney Pictures, with 11 characters from the Walt Disney Animation Studios films and one character from a Pixar film. The characters in the franchise consist of Snow White, Cinderella, Aurora, Ariel, Belle, Jasmine, Pocahontas, Mulan, Tiana, Rapunzel, Merida, and Moana..........</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-sm btn-primary ">Read Details</button>
                </div>
            </div>
            </div>

            {/* second card */}
            <div className="card w-96 bg-base-100 shadow-xl border-solid border-2 border-gray-400 rounded">
                    
                    <div className="card-body   ">
                     <h2 className="card-title text-blue-700 text-center font-bold">Frozen Dolls</h2>
                    <p className='text-gray-600'>Disney Princess, also called the Princess Line, is a media franchise and toy line owned by the Walt Disney Company. Created by Disney Consumer Products chairman Andy Mooney, the franchise features a lineup of female protagonists who have appeared in various Disney franchises.The franchise does not include all princess characters from the whole of Disney-owned media, but rather refers to select specific characters from the company's animated films, including only protagonists of animated films from Walt Disney Pictures, with 11 characters from the Walt Disney Animation Studios films and one character from a Pixar film. The characters in the franchise consist of Snow White, Cinderella, Aurora, Ariel, Belle, Jasmine, Pocahontas, Mulan, Tiana, Rapunzel, Merida, and Moana..........</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-sm btn-primary ">Read Details</button>
                  </div>
              </div>
              </div>

              {/* Third Carrd */}
              <div className="card w-96 bg-base-100 shadow-xl border-solid border-2 border-gray-400 rounded">
                    
                    <div className="card-body   ">
                     <h2 className="card-title text-blue-700 text-center font-bold">Disney princess</h2>
                    <p className='text-gray-600'>Disney Princess, also called the Princess Line, is a media franchise and toy line owned by the Walt Disney Company. Created by Disney Consumer Products chairman Andy Mooney, the franchise features a lineup of female protagonists who have appeared in various Disney franchises.The franchise does not include all princess characters from the whole of Disney-owned media, but rather refers to select specific characters from the company's animated films, including only protagonists of animated films from Walt Disney Pictures, with 11 characters from the Walt Disney Animation Studios films and one character from a Pixar film. The characters in the franchise consist of Snow White, Cinderella, Aurora, Ariel, Belle, Jasmine, Pocahontas, Mulan, Tiana, Rapunzel, Merida, and Moana..........</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-sm btn-primary ">Read Details</button>
                  </div>
              </div>
              </div>
        </div>
        </div>      
    </div>
    );
};

export default AudienceReview;