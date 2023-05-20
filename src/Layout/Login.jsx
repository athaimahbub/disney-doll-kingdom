import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        // signIn(email, password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);
        //     })
        //     .catch(error => console.log(error));
    }
    return (
    <div>       
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
    
           <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
           <div className="card-body">
       
                 <h2 className='text-center text-2xl text-blue-800 font-bold'>Log in</h2>
            <form onSubmit={handleLogin}>
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
            <div className="form-control mt-6">
                 <input className="btn btn-primary" type="submit" value="Login" />
            </div>
        </form>

        <p className='my-4 text-center'>New to Disney Doll <Link className='text-blue-600 font-bold' to="/registration">Sign Up</Link> </p>
        
        </div>
     </div>
      </div>
     </div>
    </div>
    );
};

export default Login;