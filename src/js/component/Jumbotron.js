import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Jumbotron() {
 
  return (
    <>
<Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://getwallpapers.com/wallpaper/full/3/3/4/490956.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.wallpapertip.com/wmimgs/160-1606283_web-developer-wallpaper.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="	https://beeswebsites.co.uk/wp-content/uploads/2018/01/Hero-image-background-new-services.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>    </>
  )
}

export default Jumbotron;
