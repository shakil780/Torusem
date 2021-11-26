import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const Hooks = () => {
   
    const { register, handleSubmit,reset } = useForm({});
  const onSubmit = data => {
      console.log(data)
     axios.post('https://possessed-barrow-50941.herokuapp.com/travel-user',data)
        .then(res=>{
            if(res.data.insertedId){
                alert("data add")
                reset()
            }
        })
       
    
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name",   { required: true, maxLength: 20 })} placeholder="name"/>
      <br />
      <input {...register("descripstion", ) } placeholder="description" />
      <br />
      <input type="price" {...register("price",  )} placeholder="price" />
      <br />
      <input {...register("images", ) } placeholder="images" />
      <br />
      <input type="submit" />
     </form>
    );
};

export default Hooks;