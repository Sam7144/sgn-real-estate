import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
   <div className='w-100'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src="./r5.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          
          <p>g-50</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src="./r6.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <p>g-60</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src="./r7.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <p>
           g-70
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </div>
  );
}

export default UncontrolledExample;