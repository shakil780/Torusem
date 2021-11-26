import React from 'react';
import { Link } from 'react-router-dom';


const Service = ({service}) => {
    const{name,images,descripstion,price,_id}=service

    return (
        
        <div className="col-lg-4 col-md-4 col-6 my-5">
            <div class="card w-100">
     <img src={images} class="card-img-top" alt=""/>
      <div class="card-body">
       <h5 class="card-title">{name} </h5>
       <h5 class="card-title">{price} </h5>
       <p class="card-text">{descripstion}</p>
       <Link className="list" to={`/booking/${_id}`}>
           <button>book</button>
       </Link>
   
  </div>
</div>    
        </div>
    );
};

export default Service;