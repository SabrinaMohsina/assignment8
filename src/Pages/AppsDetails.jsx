import React from 'react';
import { useParams } from 'react-router';
import useApps from './Hook/useApps';
import IconRating from"../assets/icon-ratings.png"
import IconDownloads from '../assets/icon-downloads.png'
import IconReviews from '../assets/icon-review.png'
import {Bar, BarChart, CartesianGrid, Legend, Rectangle, Tooltip, XAxis, YAxis} from "recharts"

const AppsDetails = () => {
    const {id} = useParams()
    const {allapps , loading , error} = useApps()
    const app = allapps.find(a=> String(a.id)=== id)
//    console.log(id)
//     console.log(app);
if (loading) return <p>loading...</p>
const {title,image , companyName , description , size , reviews, ratingAvg , downloads , ratings }= app

const handleInstalledApps = ()=>{
    let existingItem =JSON.parse(localStorage.getItem('installed'))
    // console.log(existingItem);
    let updatedList = []
    if((existingItem)){
        const isDuplicate = existingItem.some(a=>a.id=== app.id)
        if(isDuplicate) return ('sorry vai')
         updatedList =[...existingItem,app]
    }else {
    updatedList.push(app)
    }

    localStorage.setItem('installed' , JSON.stringify(updatedList))
} 
    return (
        <div>
            <div className=" grid grid-cols-3 rounded-lg shadow items-center">
               <img className=" col-span-1 p-2 " src={image} alt={title} />
               <div className='col-span-2 p-5'>
                <h4 className='font-semibold text-xl'>{title}</h4>
                <p className='p-1 text-[#627382]    '>Developed by {companyName} </p>
                <hr className='border border-gray-300  '/>
                <div className='p-1 grid grid-cols-3 gap-4'>
                    <div>
                        <span><img className='w-5 h-5 text-green-400' src={IconDownloads} alt="d" /> </span>
                        <p className=' text-[#627382]'>Downloads</p>
                        <p className=' font-bold text-3xl'>{downloads}</p>
                    </div>
                    <div>
                         <p><img className='w-5 h-5 ' src={IconRating} alt="d" /></p>
                        <p  className=' text-[#627382]'>Average RAtings</p>
                        <p  className=' font-bold text-3xl'>{ratingAvg}</p>
                        
                    </div>
                     <div>
                         <span><img className='w-5 h-5 ' src={IconReviews} alt="d" /></span>
                        <p  className=' text-[#627382]'>Total Reviews</p>
                        <p className=' font-bold text-3xl'>{reviews}</p>
                    </div>
                </div>
                <button onClick={handleInstalledApps} className='btn p-3 rounded-2xl  text-white bg-linear-to-r from-[#54CF68] to-[#00827A]'>Install Now  ({size})</button>
               </div>
      
    </div>
   <hr />
    {/* chart  */}
    <div className='space-y-3'>
        <h3 className='text-xl'>Ratings</h3>
        <div className='p-4 h-200'>
                 <BarChart layout='vertical'  responsive data={ratings}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="count" />
      <YAxis width="name" />
      <Tooltip />
      <Legend />
      <Bar dataKey="name" fill="#8884d8"  />
    
    </BarChart>
        </div>
    </div>
 
        </div>
    );
};

export default AppsDetails;