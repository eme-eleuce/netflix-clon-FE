import React from "react";
import Main from "../componentes/main";
import Slice from "../componentes/slice";
import requests from "../requests";


const Home = () => { 

  
    return (
    
      <div> 
         <Main /> 
         
         <Slice sliceID='2' title='Popular' fetchURL={requests.requestPopular} />
         <Slice sliceID='3' title='Horror' fetchURL={requests.requestHorror} />
         <Slice sliceID='4' title='Top Rating' fetchURL={requests.requestTopRated} />
        
      </div>
      
      )
    
      
        }
  
  export default Home;
  