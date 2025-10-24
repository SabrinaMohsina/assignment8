import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../assets/logo.png';
import { House } from 'lucide-react';
import { Triangle } from 'lucide-react';
import { ArrowDownToLine } from 'lucide-react';
import { Github } from 'lucide-react';



const Navbar = () => {
    return (
      
      <div className="navbar bg-base-100 shadow-sm px-10 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
        <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/apps">Apps</NavLink></li>
      <li><NavLink to="/installation">Installation</NavLink></li>
      </ul>
    </div>
    <Link to="/" className=" text-2xl flex font-bold text-purple-600 gap-1"> <img src={Logo} className='w-10' alt="" /> HERO.IO</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
      <li><NavLink to="/"><House size={24} />Home</NavLink></li>
      <li><NavLink to="/apps"><Triangle size={24} />Apps</NavLink></li>
      <li><NavLink to="/installation"> <ArrowDownToLine />Installation</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/SabrinaMohsina/assignment8.git' className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]"><Github /> Contribute</a>
  </div>
</div>

    );
};

export default Navbar;