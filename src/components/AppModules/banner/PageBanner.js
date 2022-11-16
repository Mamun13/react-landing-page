import React from "react";
import BannerImage from "../../../assets/banner.png";
import Bannerimg from "../../../assets/bannerimg.png";
import Carousel from "react-bootstrap/Carousel";

const PageBanner = () => {
  return (
    <section id="" className="banner-height">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100 img-fluid" src={BannerImage} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 img-fluid" src={Bannerimg} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 img-fluid" src={BannerImage} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default PageBanner;
