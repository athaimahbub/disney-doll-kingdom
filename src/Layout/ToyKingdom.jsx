import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ToyKingdom = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
    fetch('http://localhost:5000/addToy')
         .then(res => res.json())
         .then(data => setToys(data))
         .catch(error => console.error(error))
  }, []);
    
      return (
        <div>
          
        <div className="overflow-x-auto mt-8">
        <table className="table table-compact w-full ">
            <thead className='text-blue-600'>
              <tr>
              <th></th> 
               <th>Seller</th> 
               <th>Toy Name</th> 
               <th>Sub-category</th> 
               <th>Price</th> 
               <th>Available Quantity</th> 
              </tr>
            </thead>
            <tbody className='text-gray-800'>
              {toys.map((toy, index) => (
                
                <tr key={index}>
                <th></th>
                <td>{toy.sName}</td> 
                <td>{toy.tName}</td> 
                <td>{toy.category}</td> 
                <td>{toy.price}</td> 
                <td>{toy.quantity}</td> 
                <td>
                    <Link to={`/singleToy/${toy._id}`} className='btn btn-sm btn-primary'>View Details</Link>
                   <button ></button>
                </td>
                </tr>

              ))}
            </tbody>
          </table>
          </div>
        </div>
    );
};

export default ToyKingdom;