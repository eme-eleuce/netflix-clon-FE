import React from 'react';




const Movie = ({ item }) => {
 

return (
    
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
    <img className='w-full h-auto block rounded-lg' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
     <div className='absolute top-0 left-0 w-full h-full hover:bg-black/100 opacity-0 hover:opacity-80 text-orange-400 '>
         <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title} </p>
     </div>
    </div>
  );
};

export default Movie;