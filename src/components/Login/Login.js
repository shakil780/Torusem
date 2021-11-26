import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import { useHistory, useLocation, } from 'react-router';
import useFirebase from '../../useFirebase/useFirebase';



const Login = () => {
  const history=useHistory()
  const{GoogleSingin,user,
    setUser,
    setLoding,
    setError }=useAuth()
  console.log(user);
  let location = useLocation();


  let { from } = location.state || { from: { pathname: "/" } };
   const handelLogin=()=>{
     GoogleSingin()
     .then(result=>{
      setUser(result.user)
      setLoding(false)
      history.replace(from);

   })
   .catch((error)=>{
       setError(error.message)
       setLoding(false)
       

   })
   }

    return (
        
        <div className="my-5">
           <button className="btn btn-danger" onClick={handelLogin}>Sign With Google</button>
        </div>
    
    );

};

export default Login;