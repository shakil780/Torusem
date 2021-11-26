import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../../service/Service';


const Services = () => {
    const [travel,setTravel]=useState([])
    useEffect(()=>{
        fetch('https://possessed-barrow-50941.herokuapp.com/travel-user')
         .then(res=>res.json())
         .then(data=> setTravel(data))
       
    },[])
   
    return (
        <div className="row">

        {
            travel.map(service=> <Service key={service._id} service={service} ></Service> ) 
             
        }
            
              </div>
   
          
      
           
        
            
      
    );
};

export default Services;