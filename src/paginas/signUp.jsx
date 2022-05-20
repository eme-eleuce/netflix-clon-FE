import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Foto from '../foto/mundo.jpg.jpg';
import { UserAuth } from "../context/authContext";


const SignUp = () => { 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {user, signUp} = UserAuth();
    const navegar = useNavigate();
    
    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
          await signUp(email,password)
          navegar('/')
      } catch (error) {
          console.log(error)
      }
    }


  return (
    <>  
    <div className='w-full h-screen'> 
    <img className='hidden sm:block absolute w-full h-full object-cover' src={Foto} alt="" />
       <div className='bg-black/20 fixed top-0 left-0 w-full h-screen'></div>
       <div className='fixed w-full px-4 py-24 z-50'>
           <div className='max-w-[450px] max-h-[470px] mx-auto bg-black/75 text-white rounded-lg'>
               <div className='max-w-[320px] mx-auto py-16  '>
                <h1 className=' text-3xl font-bold '> Sign Up</h1>
                   <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                       <input onChange={(e) => setEmail(e.target.value)} 
                       className='p-3 my-2  bg-gray-700 rounded-lg ' type="email" placeholder='E-mail' autoComplete='email' />
                       <input onChange={(e) => setPassword(e.target.value)}
                       className='p-3 my-2 bg-gray-700 rounded-lg ' type="password" placeholder='Password' autoComplete='current-password' />
                       <button className='bg-orange-500 py-3 my-6 rounded-lg font-bold text-white '> Sign Up</button>
                       <div className='flex justify-between items-center text-sm text-gray-500'>
                           <p><input className='mr-2' type="checkbox" /> Remember Me</p>
                           <p> Need Help ?</p>
                       </div>
                       <p className='py-6'><span className='text-gray-500'>Already subscribed to Ne-flix? </span>
                        <Link to='/login' >
                        Sign in
                        </Link>
                       </p>
                   </form>

               </div>

           </div>

       </div>
    </div>
    
    </>
   
    
    )
  
    
      }

export default SignUp;