import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const MyToy = () => {

    const {user} = useContext(AuthContext);
    const [myToys , setMyToys] = useState([]);

    const url = `http://localhost:5000/addToy?email=${user.email}`
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        // .then(data => setMyToys(data))
        .then(data => console.log(data))
 
    },[])
    return (
        <div>
            <h2>My Toys: {myToys._id}</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        myToys.map(myToys => <myToysRow>
            key ={myToys._id}
            myToys = {myToys}
        </myToysRow>)
      }
    </tbody>

    </table>
   </div>
        </div>
    );
};

export default MyToy;