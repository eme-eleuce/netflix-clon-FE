import React from "react";
import { UserAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({children}) => { 

    const {user} = UserAuth();

   if (!user) {
       return  <Navigate to='/'/>
   } else {
       return children;
   };

  
  
    
      }

export default ProtectRoute;