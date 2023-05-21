import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';


const MyToy = () => {

    const {user} = useContext(AuthContext);
    const [myToys , setMyToys] = useState([]);

    const url = `http://localhost:5000/addToy?email=${user.email}`
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setMyToys(data))
        
 
    },[])


    // Delete Operation
    const handleDelete = id => {
        // const permission = confirm('Are you want to delete?');
        const permission = Swal.fire({
            icon: 'error',
            title: 'Are you sure want to delete?',
            
          });
        if(permission){
            fetch(`http://localhost:5000/addToy/${user.email}/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then (data => {
                console.log(data);
                if(data.deletedCount > 0){
                    
                    Swal.fire({
                        icon: 'error',
                        title: 'Deleted Successfully',
                        
                      })
                    // const restMyToys = myToys.filter(myToys => myToys._id !== id);
                    // setBookings(restMyToys);
                }
            })
        }
    }

    // Confirm 
    const handleConfirm = id => {
        fetch(`http://localhost:5000/addToy/${user.email}/${id}`,{
            method: 'PATCH',
            header: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                //  
            }
        })
    }
     


    return (
        <div>
            <h2>My Toys: </h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full ">
    {/* head */}
    <thead className='text-blue-600'>
      <tr>
        <th>
         
        </th>
        <th>Category</th>
        <th>Toy Name</th>
        <th>Price</th>
        
        <th></th>
      </tr>
    </thead>
    <tbody>
            {myToys.map((myToy) => (
            <tr key={myToy._id}>
                
            <th>
              
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="rounded w-24 h-24">
                    <img src={myToy.toyPhoto} alt="Image can not loaded"/>
                  </div>
                </div>
                <div>
                  <div className="font-bold">{myToy.category}</div>
                 
                </div>
              </div>
            </td>
            <td >
              {myToy.tName}
            </td>
            <td>{myToy.price}</td>
            <th>
              <button onClick={handleConfirm} className="btn text-white btn-success btn-xs">Confirm</button>
            </th>
            <th>
                <button onClick={handleDelete} className="btn btn-square btn-sm btn-error">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
               </button>
            </th>
          </tr>
        ))}
    </tbody>

    </table>
   </div>
        </div>
    );
};

export default MyToy;