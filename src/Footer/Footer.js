import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faLinkedin,} from '@fortawesome/free-brands-svg-icons'
import {faPhone,faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
;
import useAuth from '../Hook/useAuth';

const Footer = () => {
    const {user}=useAuth()
    const facbook = <FontAwesomeIcon icon={faFacebook} />
    const twitter = <FontAwesomeIcon icon={faTwitter} />
    const linkedin = <FontAwesomeIcon icon={faLinkedin} />
    const pho = <FontAwesomeIcon icon={faPhone} />
    const arow = <FontAwesomeIcon icon={faChevronRight} />
    return (
        <div className=" color">
           <h1 className="fw-bold text-info">Travel</h1>
            <h1 className="my-3">{facbook} {twitter} {linkedin} </h1>

            <h1>{pho}+19990007 </h1>
            <h1 className="my-3 text-success fw-bold">OUR AGENCY</h1>
            <ul className="text-secondary">
                <li >{arow} Services</li>
                <li>{arow} Agency</li>
                <li>{arow} Tourism</li>
                <li>{arow} Paymen</li>
            </ul>
            <h1 className="my-3 text-success fw-bold">LAST MINUTE</h1>
            <ul className="text-secondary">
                <li>{arow} new zealand</li>
                <li>{arow} bangladesh</li>
                <li>{arow} Australiay</li>
                <li>{arow} Indonesia</li>
                <li>{arow} India</li>
                <li>{arow} France</li>
            </ul>

              <h1 className="text-primary fw-bold">You Can Email Your Travel Agent</h1>
            <div className="mb-3 row">
     <label for="staticEmail" className="col-sm-2 col-form-label ">Email</label>
    <div className="col-sm-10 ">
      <input defaultValue={user.email} className="w-50" type="text " readonly className="form-control-plaintext"  id="staticEmail" value="Email"/>
    </div>
   </div>
   <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password"  className="form-control"  id="inputPassword" placeholder="Password"  />
    </div>
  </div>
        

        
            
        </div>
    );
};

export default Footer;

