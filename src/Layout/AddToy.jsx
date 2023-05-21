import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const AddToy = () => {
    // const toy = useLoaderData();
    // const {toy_name, _id} = toy
    const {user} = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const toyPhoto = form.toyPhoto.value;
        const tName = form.tName.value;
        const email = form.email.value;
        const sName = form.sName.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const detail = form.detail.value;
        const addToy = {toyPhoto, tName, email,sName,category,price,rating,quantity,detail}
        form.reset();

        console.log(addToy);

        fetch('http://localhost:5000/addToy', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Toy added successfully');
            }
        })
    }

    return (
    <div>
 
        <div className="card-body">
       
                 <h2 className='text-center text-2xl text-blue-800 font-bold'>Add Toy</h2>
            {/* <form onSubmit={handleLogin}> */}
            <form onSubmit={handleAddToy}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Picture URL of the toy</span>
                   </label>
                    <input type="text" name='toyPhoto' placeholder="Photo URL" className="input input-bordered" />
                </div>
                <div className="form-control">
                   <label className="label">
                      <span className="label-text">Name</span>
                   </label>
                    <input type="text" name='tName' placeholder="Toy Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Seller Name</span>
                </label>
                    <input type="text" name='sName' defaultValue= {user?.displayName} placeholder="Seller Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Seller Email</span>
                </label>
                    <input type="text" name='email' defaultValue= {user?.email} placeholder="Seller Email" className="input input-bordered" />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Sub-category</span>
                </label>
                    <input type="text" name='category' placeholder="Sub-category" className="input input-bordered" />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                    <input type="text" name='price' placeholder="Price" className="input input-bordered" />
                </div>
            <div className="form-control">
                <label className="label">
                   <span className="label-text">Rating</span>
                </label>
                    <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Available Quantity</span>
                </label>
                    <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Detail Description</span>
                </label>
                    <input type="text" name='detail' placeholder="Detail Description" className="input input-bordered" />
                </div>

        </div>  
             <div className="form-control mt-6 flex">
                 <input className="btn btn-primary" type="submit" value="Add Toy" />   
            </div>
        </form>

        
        </div>
     </div>
      
       
    );
};

export default AddToy;