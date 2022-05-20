import React, {useState, useEffect} from "react";
import axios from "axios";
import Movie from "./movie";
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'



const Slice = ({title, fetchURL, sliceID}) => { 

  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideIz = () => {
    var slider = document.getElementById('slider' + sliceID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideDe = () => {
    var slider = document.getElementById('slider' + sliceID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

    return (
    
      <> 
         <h2 className='text-white font-bold md:text-xl p-4'>{title} </h2>
         <div className='relative flex items-center group'>
                    <MdChevronLeft onClick={slideIz}
                    className='bg-orange-400 left-0 rounded-lg absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' 
                    size={40}/>
             <div id={'slider' + sliceID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
             {movies?.map((item, id) => ( 
                   <Movie key={id} item={item} />
              ))}
             </div>
                     <MdChevronRight onClick={slideDe}
                     className='bg-orange-400 right-0 rounded-lg absolute opacity-50 hover:opacity-100 curosr-pointer z-10 hidden group-hover:block' 
                     size={40}/>
         </div>
      </>
      
      );
    };
  
  export default Slice;
  