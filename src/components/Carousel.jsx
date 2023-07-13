import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import profile from '../assets/profile.png'
const CarouselItem = ({ image, title, description }) => (
  <div className="carousel-item flex items-center p-4 bg-[#171717] w-11/12 ml-12 border rounded-[16px] border-transparent">
    <div className="w-1/4 ml-72">
      <img src={profile} alt="Carousel Item" className="w-96" />
    </div>
    <div className="w-1/2 pl-4">
      
      <p className="mb-2 text-white text-left w-3/4">It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.</p>
      <h3 className="text-xl font-semibold mb-2 text-white text-left">Amaka Micheal</h3>
      <h4 className="text-l  mb-2 text-white text-left">Media Executive, Buying & Control</h4>
      <hr className="border-t-2 border-gray-300 mb-2 w-3/4" />
    </div>
  </div>
);

const ResponsiveCarousel = () => (
  <Carousel
    showArrows={true}
    showThumbs={true}
    showStatus={false}
    infiniteLoop={true}
    transitionTime={500}
    interval={3000}
    className="carousel-container"
  >
    <CarouselItem
      image="carousel-img-1.jpg"
      title="Heading 1"
      description="Description 1"
    />
    <CarouselItem
      image="carousel-img-2.jpg"
      title="Heading 2"
      description="Description 2"
    />
    <CarouselItem
      image="carousel-img-3.jpg"
      title="Heading 3"
      description="Description 3"
    />
  </Carousel>
);



export default ResponsiveCarousel;
