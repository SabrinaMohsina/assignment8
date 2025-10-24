import React from 'react';

const LoadingSpinner = ({count = 8}) => {
    return (
      <div className='grid grid-cols-1 md:grid-cols-2  pl-12 md:pl-0 lg:grid-cols-4 gap-4  mx-auto'>
        {Array.from({length:count}).map((_, i)=>(
            <div key={i} className="flex w-52 flex-col gap-4">
            <div className="skeleton h-48 w-full"></div>
            <div className="skeleton h-48 w-full"></div>
             <div className="skeleton h-48 w-full"></div>
            <div className="skeleton h-48 w-full"></div>
            <div className="skeleton h-48 w-full"></div>
            <div className="skeleton h-48 w-full"></div>
            <div className="skeleton h-48 w-full"></div>
            <div className="skeleton h-48 w-full"></div>
           
  </div>
        )) }
  
</div>
    );
};

export default LoadingSpinner;