

import React from 'react';
// import { useLoaderData } from 'react-router';
import AppCard from '../Components/AppCard'
import { FaGooglePlay } from 'react-icons/fa';
import { FaAppStoreIos } from 'react-icons/fa';
import image from '../assets/hero.png'
import {Link} from 'react-router'
import useApps from './Hook/useApps';
import LoadingSpinner from '../Components/LoadingSpinner';


const Home = () => {
  // const allApps = useLoaderData()
  const {allapps , loading , error} = useApps()
  
  const allInOneApp = allapps.slice(0,8)
  // console.log(allInOneApp);
  
  return (
   
   <div>
   
    <div className='flex justify-center items-center flex-col pt-10'>
      <h1 className='text-4xl m-0 mx-auto  font-bold'>We Build <br />  <span className='text-[#632EE3]'>Productive</span>  Apps</h1>
      <p className='text-[#627382]  pt-3 sm:px-3  '>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting .<br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className='mt-8 '>
        <button className='btn   mr-3 '><FaGooglePlay  color="green"></FaGooglePlay> Google Play</button>
        <button className='btn '> <FaAppStoreIos  color="blue"></FaAppStoreIos> App Store</button>
      </div>
      <img className='mt-10' src={image} alt="" />
    </div>
    <div className='py-10 p-5 text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] flex items-center flex-col '>
      <h2 className='text-3xl font-semibold'>Trusted by Millions, Built for You</h2>
      <div className='grid  grid-cols-1 lg:grid-cols-3 text-white gap-10 mt-10'>
        <div className=''>
          <p >Total Downloads</p>
          <h1 className='text-5xl font-bold p-2'>29.6M</h1>
          <p>21% More Then Last Month</p>
        </div>
        <div>
          <p>Total Reviews</p>
          <h1 className='text-5xl font-bold p-2'>906K</h1>
          <p>46% More Then Last Month</p>
        </div>
        <div >
          <p>Active Apps</p>
          <h1 className='text-5xl font-bold p-2'>132+</h1>
          <p>31 More Will Launch</p>
        </div>
      </div>
    </div>
    <div>
      <div className='flex items-center justify-center p-10 flex-col'>
        <h1 className='text-4xl m-0 mx-auto  font-bold '>Trending Apps</h1>
      <p className='text-[#627382]  pt-3 sm:px-3  '>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div  className='grid grid-cols-1 md:grid-cols-2  pl-12 md:pl-0 lg:grid-cols-4 gap-4  mx-auto'>
    { loading? <LoadingSpinner></LoadingSpinner>
:      allInOneApp?.map(singleApp=>( <AppCard key={singleApp.id} singleApp={singleApp}></AppCard>))
    }
    </div>
<div className='flex justify-center items-center p-10'>
      <Link to="/apps" className=' p-3 rounded-2xl  text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>Show All</Link>
</div>  
  </div>
   </div>
    
  );
};

export default Home;