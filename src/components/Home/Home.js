import React from 'react';
import Footer from '../../Footer/Footer';
import About from '../About/About';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
      
          <Header></Header>
       <Services></Services>
        <About></About>
        <Footer></Footer>
           
        </div>
    );
};

export default Home;