
import { useLoaderData } from 'react-router-dom';


const SingleToy = () => {
    const toy = useLoaderData();
    const {toyPhoto, tName, email,sName,category,price,rating,quantity,detail} = toy;
    return (
        <div>
            <h1 className="text-5xl font-bold">{category}</h1>
            <div className="hero min-h-screen bg-base-200">
               <div className="hero-content flex-col lg:flex-row ">
               <img src={toyPhoto} className='rounded '/>
               <div className='w-1/2 '>
              <h1 className="text-5xl font-bold">{tName}</h1>
               <p className="py-2">{detail}</p>
               <h4>Seller Name: {sName}</h4>
               <p >Price:  {price}</p>
               <p >Quantity:  {quantity}</p>
               <p>Rating:  {rating}</p>
               <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-600" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-600" checked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-600" />
                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-600" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-600" />
              
                </div>
            </div>
        </div>
       </div>
  </div>


    );
};

export default SingleToy;