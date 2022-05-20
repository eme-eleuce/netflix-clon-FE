import axios from "axios";
import React, {useState, useEffect} from "react";
import requests from "../requests";



const Main = () => { 

    const [movies, setMovies] = useState([])
    // pelicula random
    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
      axios.get(requests.requestPopular).then((response) => (

           setMovies(response.data.results)
      ))

    }, [])  
   
    const AchicarText = (str, num) => {

      if (str?.length > num) {
        
        return str.slice(0, num) + '...'
      } else {
       
        return str;
      }
    }
 
    return (
  
    <div className='text-white h-[550px] w-full'>

         <div className='h-full w-full'>
           <div className='absolute w-full h-[550px] bg-gradient-to-t from-black '></div>
           <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} /> 
           
             <div className='absolute w-full top-[20%] p-4 md:p-8 '>
                    <h1 className='text-3xl md:5xl font-bold'>{movie?.title}</h1>
               <div className='my-4'>
               <a href="#_" class="relative inline-flex items-center justify-center inline-block p-4 px-6 py-2 overflow-hidden font-medium text-white-600 rounded-lg shadow-2xl group">
<span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
<span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
<span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-violet-500 rounded-full blur-md"></span>
<span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-orange-500 rounded-full blur-md"></span>
</span>
<span class="relative text-white">Play</span>
</a>
                 <button className='border text-white border-gray-300 py-2 px-5 ml-4 rounded-lg'> Watch Later </button>
               </div>
               <p className='text-gray-400 text-sm'> Released: {movie?.release_date} </p>
               <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-300'>
                 {AchicarText(movie?.overview, 135)} </p>
             </div>
         </div>
       
    </div>
    
    )
  
    
      }

export default Main;