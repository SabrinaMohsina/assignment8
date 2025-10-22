

import React from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../Components/AppCard'
import { FaGooglePlay } from 'react-icons/fa';
import { FaAppStoreIos } from 'react-icons/fa';
import image from '../assets/hero.png'

const Home = () => {
  const allApps = useLoaderData()
  return (
   
   <div>
    <div className='flex justify-center items-center flex-col pt-10'>
      <h1 className='text-4xl m-0 mx-auto  font-bold'>We Build <br />  <span className='text-[#632EE3]'>Productive</span>Apps</h1>
      <p className='text-[#627382]  pt-3 sm:px-3  '>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting .<br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className='mt-8 '>
        <button className='btn mr-3'><FaGooglePlay></FaGooglePlay> Google Play</button>
        <button className='btn '> <FaAppStoreIos></FaAppStoreIos> App Store</button>
      </div>
      <img className='mt-10' src={image} alt="" />
    </div>
    <div className='h-[300px] p-5 text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] flex items-center flex-col '>
      <h2 className='text-3xl font-semibold'>Trusted by Millions, Built for You</h2>
      <div className='grid sm:grid-rows-1 grid-rows-3 border-2 border-white'>
        <div className='flex-1'>
          <p >Total Downloads</p>
          <h1 className='text-2xl font-bold'>29.6M</h1>
          <p>21% More Then Last Month</p>
        </div>
        <div className='flex-1'>
          <p>Total Reviews</p>
          <h1>906K</h1>
          <p>46% More Then Last Month</p>
        </div>
        <div className='flex-1'>
          <p>Active Apps</p>
          <h1>132+</h1>
          <p>31 More Will Launch</p>
        </div>
      </div>
    </div>
    <div>
    {
      allApps.map(singleApp=>( <AppCard key={singleApp.id} singleApp={singleApp}></AppCard>))
    }
    </div>
   </div>
    
  );
};

export default Home;