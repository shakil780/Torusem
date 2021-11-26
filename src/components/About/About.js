import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faGlobeEurope,faShip,faPlane } from '@fortawesome/free-solid-svg-icons';


const About = () => {
    const element = <FontAwesomeIcon icon={faGlobeEurope} />
    const ship = <FontAwesomeIcon icon={faShip} />
    const plane = <FontAwesomeIcon icon={faPlane} />
    return (
        <div>
              <h1 className="fw-bold text-success">{element}World Tour</h1>
            <h1 className="text-danger fw-bold ">
            
               we are the beast travel agent and we are toure world</h1>
               <h1 className="fw-bold text-success">{ship}Cruises </h1>
               <p className="lead text" >We are an travel-agent, family-operated travel agency offering our clients rewarding experiences by curating each holiday to suit your travel style – bringing you exclusive, handpicked itineraries combined with unparalleled service. You’ll access a raft of luxury travel packages and itineraries, insider-only travel information, exclusive invitations to special events, and so much more.</p>

               <h1 className="fw-bold text-success" >{plane}Best Tours </h1>
               <h1 className="fw-bold text-danger"> lets Inspiring Vacations for the best Tours</h1>
               <p className="text lead">Travelling with Inspiring Vacations allows you to explore the wonders of the world in a variety of different ways. We have partnered with a worldwide network of local travel experts to bring you culturally unique and delightfully unforgettable travel experiences. Whether it is meandering through narrow canyons by rail, cruising the idyllic waters of the Mediterranean or touring through the backroads of provincial towns, Inspiring Vacations trips offer amazing value and will leave you inspired</p>



        </div>
    );
};

export default About;