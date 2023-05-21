import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/firebase.config';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const {signIn} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        console.log( email, password)


        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
    }

    const handleGoogleSignIn = () => {
        // Handle Google Sign-in
        signInWithPopup(auth, provider)
        .then(result => {
            const user =result.user;
            console.log(user);
        })
        .then(error => console.log('Error: ', error))
      };
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
            <div className="form-control mt-6 flex">
                 <input className="btn btn-primary" type="submit" value="Login" />

                 <button className='btn btn-sm btn-outline btn-primary my-2 mx-16' onClick={handleGoogleSignIn}>Sign in with Google</button>
            </div>

            {/* <button className='btn btn-sm btn-outline btn-primary my-2 mx-16' onClick={handleGoogleSignIn}>Google Sign-in</button> */}
            
        </form>

        <p className='my-4 text-center'>New to Disney Doll Kingdom? <Link className='text-blue-600 font-bold' to="/registration">Sign Up</Link> 
        </p>
        
        </div>
     </div>
      </div>
     </div>
    </div>
    );
};

export default Login;