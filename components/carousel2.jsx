import React from "react";
import Carousel from 'react-bootstrap/Carousel';
function Carouse({images} ) {
  return (
    <div className='w-100'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src={images.image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src={images.image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src={images.image3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src={images.image4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
   </div>
  );
}

export default Carouse;
