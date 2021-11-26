import React from 'react';
import image1 from '../../image-banner/astronaut-floating-space-elements-this-image-furnished-by-nasa_117023-513.jpg'
import image2 from '../../image-banner/travel-world-monuments-concept_117023-14.jpg'

const Header = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image1} className="d-block w-100" alt=""/>
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" alt=""/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
};

export default Header;