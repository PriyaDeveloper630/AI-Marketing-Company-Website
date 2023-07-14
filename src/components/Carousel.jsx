import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import profile from '../assets/profile.png';

const CarouselItem = ({ image, title, description }) => (
  <div className="carousel-item flex flex-col items-center sm:flex-row sm:justify-center p-4 w-3/4 ml-12 border rounded-[16px] border-transparent sm:rounded-[16px]">
    <div className="sm:w-1/4 sm:ml-72 mb-4 sm:mb-0">
      <img src={profile} alt="Carousel Item" className="w-96" />
    </div>
    <div className="w-3/4 sm:w-1/2 pl-4 flex flex-col items-center sm:items-start">
      <p className="mb-2 text-white text-center sm:text-left">
        It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.
      </p>
      <h3 className="text-xl font-semibold mb-2 text-white text-center sm:text-left">Amaka Micheal</h3>
      <h4 className="text-l mb-2 text-white text-center sm:text-left">Media Executive, Buying & Control</h4>
      <hr className="border-t-2 border-gray-300 mt-8 mb-2 w-3/4 sm:ml-8" />
      <div className="mr-8 mt-8 sm:mt-0"></div>
    </div>
  </div>
);




const ResponsiveCarousel = () => (
  <div className="carousel-container">
    <style>
      {`
        @media (max-width: 640px) {
          .carousel-container {
            background: linear-gradient(to right, #00F0FF, #5200FF,#FF2DF7); /* Replace with your desired gradient colors */
          }
        }
        
        @media (min-width: 641px) {
          .carousel-container {
            background-color: #171717; /* Replace with your desired gray color */
          }
        }
      `}
    </style>
    <Carousel
      showArrows={true}
      showThumbs={true}
      showStatus={false}
      infiniteLoop={true}
      transitionTime={500}
      interval={3000}
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
  </div>
);

export default ResponsiveCarousel;
