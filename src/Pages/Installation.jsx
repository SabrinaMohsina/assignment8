import React, { useEffect, useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import IconRating from"../assets/icon-ratings.png"
import IconDownloads from '../assets/icon-downloads.png'
import IconReviews from '../assets/icon-review.png'

const Installation = () => {
    const [ sortOrder , setsortOrder] = useState('none')
    const [inatalled , setInatalled] = useState([])
    
    useEffect(()=>
    {
        const saveList = JSON.parse(localStorage.getItem('installed'))
        if(saveList) setInatalled(saveList) 
    },[])
  
    const sortedItem = (()=>{
        if(sortOrder === 'size-asc'){
            return [...inatalled].sort((a,b) => a.size  - b.size)
        }
      else if(sortOrder === 'size-dsc'){
         return [...inatalled].sort((a,b) => b.size  - a.size)
      }else{
       return inatalled
      }
    })()
    
     const handleRemove =id=>{
         let existingItem =JSON.parse(localStorage.getItem('installed'))
    // console.log(existingItem);
    let updatedList = existingItem.filter(p =>p.id !== id)
   //for ui instant upodate
   setInatalled(updatedList)
    localStorage.setItem('installed' , JSON.stringify(updatedList))
   } 
    return (
        <>
           <div className='flex flex-col justify-center items-center p-10 '>
          <h1 className='text-3xl font-semibold'>Your Installed Apps</h1>
          <p className='text-[#627382]  pt-3 sm:px-3  '>Explore All Apps on the Market developed by us. We code for Millions</p>

        </div>
         <div className='flex justify-between items-center py-6'>
            <h1 className='text-xl font-semibold'><span>({sortedItem.length})  </span>Apps Found</h1>
           <label className="form-control ">
             <select className='select select-bordered' value={sortOrder} onChange={e=> setsortOrder(e.target.value)}>
                <option value="none">Sort By Size</option>
                <option value="size-asc">Low -&gt; High</option>
                <option value="size-dsc">High -&gt;Low</option>
            </select>
           </label>
          
          </div>
          {
            sortedItem.map(a=>(
                <div key={a.id} className=" rounded-lg shadow-sm  flex justify-between  items-center">
                    <div className='flex '>
                     <img className=" rounded-xl col-span-1 p-2 h-30 w-30 " src={a.image} alt={a.title} />
                      <div className='col-span-2 p-5'>
                         <h4 className='font-semibold text-xl'>{a.title}</h4>
                                <div className='p-1 grid grid-cols-3 gap-1'>
                                     <div>
                                         <span><img className='w-5 h-5 text-green-400' src={IconDownloads} alt="d" /> </span>
                                          <p >{a.downloads}</p>
                                     </div>
                                     <div>
                                          <p><img className='w-5 h-5 ' src={IconRating} alt="d" /></p>
                                          <p  >{a.ratingAvg}</p>  
                                     </div>
                                      <div>
                                          <span><img className='w-5 h-5 ' src={IconReviews} alt="d" /></span>
                                          <p >{a.reviews}</p>
                                     </div>
                                 </div> 
                          </div> 
                                
                            </div>
                             <button onClick={() => {handleRemove(a.id)}} className='btn p-3 rounded-2xl  text-white bg-linear-to-r from-[#54CF68] to-[#00827A]'>Uninstall</button>  
                 </div> 

 
            ))
          }

       </> 
)
}
export default Installation;