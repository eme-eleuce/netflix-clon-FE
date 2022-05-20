import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/authContext";


const Navbar = () => { 

   const {user, logOut} = UserAuth();
   const navegar = useNavigate();
   
   const handleLogOut = async () => {

      try {
         await logOut();
         navegar('/')
      } catch (error) {
         console.log(error);
      }
   }

    return (
    
      <div className='flex items-center p-4 justify-between z-[100] w-full absolute'> 
          <Link to='/'>
         <h1 className='text-6xl font-semibold bg-gradient-to-r bg-clip-text  text-transparent from-orange-500 via-red-500 to-violet-500 animate-text'> NE-FLIX</h1>
          </Link>
         {user?.email ? (<div>
            <Link to='account'>
            <button className='text-white pr-4'>Account</button>
            </Link>
            
            <a onClick={handleLogOut} href="#_" class="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-white-600 rounded-lg shadow-2xl group">
<span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
<span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
<span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-violet-500 rounded-full blur-md"></span>
<span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-orange-500 rounded-full blur-md"></span>
</span>
<span class="relative text-white">Log Out</span>
</a>
            
            
         </div> ) : (<div>
         <Link to='login'>
         <button className='text-white pr-4'>Sign In</button>
         </Link>
         <Link to='signup'>
         <a href="#_" class="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-white-600 rounded-lg shadow-2xl group">
<span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
<span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
<span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-violet-500 rounded-full blur-md"></span>
<span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-orange-500 rounded-full blur-md"></span>
</span>
<span class="relative text-white">Sign Up</span>
</a>
         </Link>
         
      </div>  )}
      </div>
      
      )
    
      
        }
  
  export default Navbar;
  