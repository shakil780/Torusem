import inisilizeAuthticatin from "../components/Firebase/firebaseinisilize";

import { getAuth,signOut, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from 'react';
      inisilizeAuthticatin()

const useFirebase=()=>{
      const [loding,setLoding]=useState(true)
    const [user,setUser]=useState({})
    const [error,setError]=useState('')
    const auth= getAuth()
    const provide=  new GoogleAuthProvider()
    const GoogleSingin=()=>{
       
      return  signInWithPopup(auth,provide)
       
       
       
     }

      console.log(loding);
     const logout=()=>{
       signOut(auth)
       .then(()=>{
         setError({})
         
         
       })

     }
     
     useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
           setUser(user)
         
          setLoding(false)
        }else {
          setUser({})
          setLoding(false)
        }
      });
  },[])
  
      console.log(user);
     return{
         error,
         GoogleSingin,
         user,
         logout,
         loding,
         setUser,
         setLoding,
         setError

     }
    

}
export default useFirebase