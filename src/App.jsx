import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./componentes/navbar";
import ProtectRoute from "./componentes/protectRoute";
import { AuthContextProvider } from "./context/authContext";
import Account from "./paginas/account";
import Home from "./paginas/home";
import Login from "./paginas/login";
import SignUp from "./paginas/signUp";

const App = () => { 
  return (
  
    <div> 
          <AuthContextProvider>
        <Navbar/> 
           <Routes>
               <Route path='/' element={<Home />} />
               <Route path='login' element={<Login />} />
               <Route path='signup' element={<SignUp />} />
               <Route path='account' element={
                 <ProtectRoute>
                    <Account />
                 </ProtectRoute>} 
                />
           </Routes>  
          </AuthContextProvider>
    </div>
    
    )
  
    
      }

export default App;
