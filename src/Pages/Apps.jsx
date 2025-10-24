import React, { useState } from 'react';
import useApps from './Hook/useApps';
import AppCard from '../Components/AppCard'

const Apps = () => {
  const {allapps} =useApps()
 console.log(allapps);
  const [search , setSearch]= useState('')
 
  
  const term = search.trim().toLocaleLowerCase()
  const searchApps = term? allapps.filter(apps => apps.title.toLocaleLowerCase().includes(term)) : allapps
  
  // console.log(searchApps)
  
    return (
      <div>
        <div className='flex flex-col justify-center items-center p-10 '>
          <h1 className='text-3xl font-semibold'>Our all Applications</h1>
          <p className='text-[#627382]  pt-3 sm:px-3  '>Explore All Apps on the Market developed by us. We code for Millions</p>

        </div>
        <div>
          <div className='flex justify-between items-center py-6'>
            <h1 className='text-xl font-semibold'><span>({searchApps.length})  </span>Apps Found</h1>
            <label className="input">
               <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                   <g strokeLinejoin="round"  strokeLinecap="round"  strokeWidth="2.5" fill="none" stroke="currentColor">
                     <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                   </g>
                </svg>
                <input onChange={(e)=>setSearch(e.target.value)} value={search} className='text-[#627382]' type="search" required placeholder="Search Apps" />
             </label>
          </div>
          <div  className='grid grid-cols-1 md:grid-cols-2  pl-12 md:pl-0 lg:grid-cols-4 gap-4  mx-auto'>
             {
                searchApps?.map(singleApp=>( <AppCard key={singleApp.id} singleApp={singleApp}></AppCard>))
              }
           </div>
         </div>
       </div> 
    );
};

export default Apps;