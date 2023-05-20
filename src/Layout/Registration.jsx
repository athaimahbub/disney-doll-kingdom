import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Registration = () => {
   const {createUser} = useContext(AuthContext);
    const handleRegistration = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photo.value;
        form.reset();
        console.log(name, email, password,photoUrl)

        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))

    }
    return (
        <div>
                 <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
    
           <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
           <div className="card-body">
       
                 <h2 className='text-center text-2xl text-blue-800 font-bold'>Sign up</h2>
            <form onSubmit={handleRegistration}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                </div>
            <div className="form-control">
                <label className="label">
                   <span className="label-text">Password</span>
                </label>
                    <input type="text" name='password' placeholder="password" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                    <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                </div>
            <div className="form-control mt-6">
                 <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
           
        </form>

        <p className='my-4 text-center'>Already have an account? <Link className='text-blue-600 font-bold' to='/login'>Login</Link> </p>
        
        </div>
     </div>
      </div>
     </div>
        </div>
    );
};

export default Registration;