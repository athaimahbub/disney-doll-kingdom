import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo1.jpg';
import { UserIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const headerItems = <>
        <li className='text-blue-800 font-bold'><Link to="/">Home</Link></li>
        <li className='text-blue-800 font-bold'><Link to="/allToys">All Toys</Link></li>
        <li className='text-blue-800 font-bold'><Link to="/myToys">My Toys</Link></li>
        <li className='text-blue-800 font-bold'><Link to="/addToy">Add a Toy</Link></li>
        <li className='text-blue-800 font-bold'><Link to="/blogs">Blogs</Link></li> 
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {headerItems} 
      </ul>
    </div>
    <Link to='/'><img src={logo} alt=''/></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
            {headerItems}
    </ul>
  </div>
  
  <div className="navbar-end">
     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
          <UserIcon className="h-10 w-8 text-gray-500" />
        </div>
      </label>
    <Link className="btn btn-sm btn-primary text-white">Login</Link>
  </div>
</div>
    );
};

export default Header;