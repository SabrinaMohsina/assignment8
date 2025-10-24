import React from 'react';
import IconRating from"../assets/icon-ratings.png"
import IconDownloads from '../assets/icon-downloads.png'
import { Link } from 'react-router';

const AppCard = ({singleApp}) => {
   const {image , title , downloads , ratingAvg, id}= singleApp
  //  console.log(singleApp);
    
   return (
      <>
       
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:scale-105   transition duration-300">
     <Link to={`/app/${id}`}  href=""> <img className="rounded-t-lg w-full h-48 object-cover" src={image} alt={title} /></Link>
      <div className="p-5">
        <p className="mb-2 text-xl font-semibold tracking-tight text-gray-800">{title}</p>
        <div className='flex justify-between'>
         <button className=" btn mb-1 text-sm text-green-600"><img className='w-5 h-5 text-green-400' src={IconDownloads} alt="d" /> {downloads}</button>
        <button className=" btn text-sm text-[#FF8811] "><img className='w-5 h-5 ' src={IconRating} alt="d" /> {ratingAvg}/5</button>
        </div>
      </div>
    </div>

      </>
      
   );
};

export default AppCard;