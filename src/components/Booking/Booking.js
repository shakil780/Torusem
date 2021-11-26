import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../Hook/useAuth';




const Booking = () => {

  let history= useHistory()
    const {travelID}=useParams()
    const [travel,setTravel]=useState({})
    const{user}=useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

           delete travel._id
         console.log(travel);
        console.log(data)
        axios.post('https://possessed-barrow-50941.herokuapp.com/user',{...data,...travel})
        .then(res=>{
            if(res.data.insertedId){
                alert('book add successfuly')
                history.push('/book')
                reset()
               
            }
          
        })

    
    
    }

   
   
 
    
     useEffect(()=>{
         fetch(`https://possessed-barrow-50941.herokuapp.com/travel-user/${travelID}`)
         .then(res=> res.json())
         .then(data=>setTravel(data))
     },[])
     
    
  
    return (
        <div className="">

      <div class="container ">
  <div class="row">
    <div class="col">
    
            <img src={travel.images} alt="" />
            <h1> Cournty:{travel.name} </h1>
            <h3>{travel.price} </h3>
             <p>{ travel.descripstion} </p>
    </div>
    <div class="col my-5">
    <div>
          <form onSubmit={handleSubmit(onSubmit) }>   
      <p>Name : <input className="" defaultValue={user.displayName} {...register("name", )} /></p>
      <br />
      <p>Email : <input className="" defaultValue={user.email} {...register("email", )} /></p>
      <br />
      {
          travel.name&&<p>country: <input  className=""defaultValue={travel.name} {...register("travel", )} /></p>
      }
       
      <br />
        <input  className="my-2" type="submit" />
     
      </form>
     </div>
     </div>
    </div>
          </div>
        </div>
        
    );
};

export default Booking;