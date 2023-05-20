import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/gallery/404Page.avif'

const NotFoundPage = () => {
    return (
        <div className='container mx-96 my-32' >
            <div className="card w-96 bg-base-100 shadow-xl">
            <Link to='/' className="btn btn-sm btn-primary text-white mb-8">Back to Home</Link>
                <div className="card-body">
                <h2 className="card-title text-2xl text-red-600 font-bold">404 - Page Not Found !!</h2>
                <img src={image} alt='The page you are looking for does not exist'></img>
    
                </div>

            </div>
        </div>
    );
};

export default NotFoundPage;