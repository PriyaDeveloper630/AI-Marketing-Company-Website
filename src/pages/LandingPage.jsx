import React from "react";
import './button_style.css';
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";
import seven from "../assets/7.png";
import eight from "../assets/8.png";
import nine from "../assets/9.png";
import ten from "../assets/10.png";
import eleven from "../assets/11.png";
import twelve from "../assets/12.png";
import thirteen from "../assets/13.png";
import fourteen from "../assets/14.png";
import fifteen from "../assets/15.png";
import sixteen from "../assets/16.png";
import seventeen from "../assets/17.png";
import eighteen from "../assets/18.png";
import nineteen from "../assets/19.png";
import twenty from "../assets/20.png";
import globe from "../assets/globe.png";
import cube from "../assets/cube.png";
import cube2 from "../assets/cube2.png";
import trumpet from "../assets/trumpet.png";
import semicircle from "../assets/semicircle.png";
import shape from "../assets/shape.png";

const LandingPage = () => {
  return (
    <div className="bg-[#000] overflow-x-hidden">
      <Navbar />
      <div class="bg-gray-500 lg:bg-gradient-to-r from-orange-500 to-green-500">
  {/* <!-- Content goes here --> */}
</div>

      <div className="slider flex flex-col-reverse justify-center md:flex-row bg-[#000]">
        <div className="left flex flex-col justify-center items-center md:items-baseline py-12 ml-5 md:ml-32 space-y-5">
          <h1 className="text-2xl font-medium md:text-4xl mx-5 text-white bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            AI Marketing.
          </h1>
          <h1 className="text-2xl font-medium md:text-4xl mx-5 text-white">
            Optimised Reach.
          </h1>
          <p className="w-3/4 mx-5 text-center md:text-left text-white">
            Our vision is to revolutionize the way brands and advertisers target, reach
          </p>
          <div style={{borderRadius: "10px"}}>
  <button  className="btn bg-black px-4 py-2 my-6 font-bold  hover:bg-black-100 text-white text-sm border rounded-full">
    Get Started &gt;
  </button>
</div>


        </div>
        <div className="right flex items-center justify-center">
          <img className="w-80 md:w-96" src={globe} alt="" />
        </div>
      </div>
      <div className="bg-[#000]">
        <div className="promo space-y-6 flex flex-col lg:flex-row justify-center pt-4">
          <div className="item flex items-center mx-4 mt-6 space-x-2 md:flex-col">
            <img className="w-12 hidden md:block mr-16" src={one} alt="" />
          </div>
          <div className="item flex md:flex-col items-center mx-4 space-x-2">
            <img className="w-12 hidden md:block mr-16" src={two} alt="" />
          </div>
          <div className="item flex items-center mx-4 space-x-2 md:flex-col">
            <img className="w-12 hidden md:block mr-16" src={three} alt="" />
          </div>
          <div className="item flex items-center mx-4 space-x-2 md:flex-col">
            <img className="w-12 hidden md:block mr-16" src={four} alt="" />
          </div>
          <div className="item flex items-center mx-4 space-x-2 md:flex-col">
            <img className="w-12 hidden md:block mr-16" src={five} alt="" />
          </div>
          <div className="item flex items-center mx-4 space-x-2 md:flex-col">
            <img className="w-12 hidden md:block mr-16" src={six} alt="" />
          </div>
        </div>
        <div className="promo space-y-6 flex flex-col lg:flex-row justify-center pt-4">
          <div className="item flex items-center mx-4 mt-6 space-x-2 md:flex-col">
            <img className="w-8 hidden md:block mr-11" src={seven} alt=""  />
          </div>
          <div className="item flex md:flex-col items-center mx-4 space-x-2">
            <img className="w-12 hidden md:block mr-11" src={eight} alt="" />
          </div>
          <div className="item flex items-center mx-4 space-x-2 md:flex-col">
            <img className="w-8 hidden md:block mr-11" src={nine} alt="" />
          </div>
          <div className="item flex items-center mx-4 space-x-2 md:flex-col">
            <img className="w-8 hidden md:block mr-11" src={ten} alt="" />
          </div>
          <div className="item flex items-center mx-4 space-x-2 md:flex-col">
            <img className="w-16 hidden md:block mr-11" src={eleven} alt="" />
          </div>
          <div className="item flex items-center mx-4 space-x-2 md:flex-col">
            <img className="w-16 hidden md:block mr-11" src={twelve} alt="" />
          </div>
          <div className="item flex items-center mx-4 mt-6 space-x-2 md:flex-col">
            <img className="w-16 hidden md:block mr-11" src={thirteen} alt="" />
          </div>
        </div>
        <div className="promo space-y-6 flex flex-col lg:flex-row justify-center pt-4 w-screen">
          <div className="item flex md:flex-col items-center mx-4 space-x-2 pt-4">
            <img className="w-20 hidden md:block mr-11" src={fourteen} alt="" />
          </div>
          <div className="item flex items-center mx-4 space-x-2 md:flex-col">
            <img className="w-8 hidden md:block mr-11" src={fifteen} alt="" />
          </div>
          <div className="item flex items-center mx-4 space-x-2 md:flex-col">
            <img className="w-16 hidden md:block mr-11" src={sixteen} alt="" />
          </div>
          <div className="item flex items-center mx-4 space-x-2 md:flex-col">
            <img className="w-8 hidden md:block mr-11" src={seventeen} alt="" />
          </div>
          <div className="item flex items-center mx-4 space-x-2 md:flex-col">
            <img className="w-8 hidden md:block mr-11" src={eighteen} alt="" />
          </div>
          <div className="item flex items-center mx-4 space-x-2 md:flex-col">
            <img className="w-16 hidden md:block mr-11" src={nineteen} alt="" />
          </div>
          <div className="item flex items-center mx-4 space-x-2 md:flex-col">
            <img className="w-8 hidden md:block sm:block  mr-11" src={twenty} alt="" />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <div className="flex flex-row justify-center items-center space-x-16 md:hidden">
            <img className="w-12" src={one} alt="" />
            <img className="w-12" src={two} alt="" />
            <img className="w-12" src={nine} alt="" />
          </div>
          <div className="flex flex-row justify-center items-center mt-8 space-x-16 md:hidden">
            <img className="w-12" src={fourteen} alt="" />
            <img className="w-12" src={fifteen} alt="" />
            <img className="w-12" src={eight} alt="" />
          </div>
        </div>






        <div className="right flex items-center justify-center">
          <p className="mt-8 text-white">Trusted by the world's most ambitious teams.</p>
        </div>
      </div>
      


      
      <div className="slider flex flex-col-reverse justify-center md:flex-row bg-[#000]" >
        <div className="left flex flex-col justify-center items-center md:items-baseline py-12 md:ml-72 space-y-5 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          <h1 className="text-2xl font-medium md:text-4xl mx-5 text-white">
            AI Marketing.
          </h1>
          <h1 className="text-2xl font-medium md:text-4xl mx-5 text-white">
            Optimised Reach.
          </h1>
          <p className="w-2/3 mx-5 text-center md:text-left text-white">
            DOML is a digital media agency powered by AI technology providing real time, <span style={{color: 'blue', fontWeight: 'bold'}}>data-driven insights</span> on your business and audience. The mission of DOML is to create the best experiences for companies through intelligent insights, powerful analytics and <span style={{color: 'blue', fontWeight: 'bold'}}>strategic execution</span>.
          </p>
          <button className="btn bg-black my-6 font-bold mx-5 hover:bg-black-100 text-white text-sm px-4 py-2 border rounded-full">
            Learn More &gt;
          </button>
        </div>
        <div className="right flex items-center justify-center">
          <img className="w-80 md:w-[1440px]" src={cube} alt="" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row bg-[#000] ">
      <div className="flex items-center justify-center sm:justify-start">
        <img className="w-72 mr-72 sm:w-96 ml-72" src={trumpet} alt="Image" />
      </div>
      <div className="left flex flex-col justify-center items-center md:items-start py-12 md:ml-72 space-y-5 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
    <h1 className="text-2xl font-medium md:text-4xl mx-5 text-white">
      AI Marketing.
    </h1>
    <h1 className="text-2xl font-medium md:text-4xl mx-5 text-white">
      Optimized Reach.
    </h1>
    <p className="w-2/3 mx-5 text-center md:text-left text-white">
      DOML is a digital media agency powered by AI technology providing real-time, <span style={{color: 'blue', fontWeight: 'bold'}}>data-driven insights</span> on your business and audience. The mission of DOML is to create the best experiences for companies through intelligent insights, powerful analytics, and <span style={{color: 'blue', fontWeight: 'bold'}}>strategic execution</span>.
    </p>
    <button className="btn bg-black my-6 font-bold mx-5 hover:bg-black-100 text-white text-sm px-4 py-2 border rounded-full" style={{border: "2px solid transparent", borderImage: "linear-gradient(to right, #00f0ff, #5200ff, #ff2df7) 1",borderImageSlice: "1"}}>
      Learn More &gt;
    </button>
  </div>
    </div>

      <Carousel></Carousel>
      <div className="slider flex flex-col-reverse justify-center md:flex-row bg-[#000]" >
        <div className="left flex flex-col justify-center items-center md:items-baseline py-12 md:ml-72 space-y-5">
          <h1 className="text-2xl font-medium md:text-4xl mx-5 text-white bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            AI Marketing.
          </h1>
          <h1 className="text-2xl font-medium md:text-4xl mx-5 text-white">
            Optimised Reach.
          </h1>
          <p className="w-2/3 mx-5 text-center md:text-left text-white">
          DOML is a digital media agency powered by AI technology providing real time, <span style={{color: 'blue', fontWeight: 'bold'}}>data-driven insights</span> on your business and audience. The mission of DOML is to create the best experiences for companies through intelligent insights, powerful analytics and <span style={{color: 'blue', fontWeight: 'bold'}}>strategic execution</span>.
          </p>
          <button className="btn bg-black my-6 font-bold mx-5 hover:bg-black-100 text-white text-sm px-4 py-2 border rounded-full">
            Learn More &gt;
          </button>
        </div>
        <div className="right flex items-center justify-center">
          <img className="w-80 mr-72 md:w-[430px] ml-72" src={cube2} alt="" />
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row bg-[#000] ">
      <div className="flex items-center justify-center sm:justify-start">
        <img className="w-72 mr-72 sm:w-96 ml-72" src={semicircle} alt="Image" />
      </div>
      <div className="left flex flex-col justify-center items-center md:items-start py-12 md:ml-72 space-y-5">
    <h1 className="text-2xl font-medium md:text-4xl mx-5 text-white bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
      AI Marketing.
    </h1>
    <h1 className="text-2xl font-medium md:text-4xl mx-5 text-white">
      Optimized Reach.
    </h1>
    <p className="w-2/3 mx-5 text-center md:text-left text-white">
       It's all about getting your message in front of the right audience and creating those valuable <span style={{color: 'blue', fontWeight: 'bold'}}>relationships</span>. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.
    </p>
    <button className="btn bg-black my-6 font-bold mx-5 hover:bg-black-100 text-white text-sm px-4 py-2 border rounded-full">
      Learn More &gt;
    </button>
  </div>
    </div>
    <div className="flex flex-col sm:flex-row w-full mx-auto rounded-lg">
  <style>
    {`
      @media (max-width: 640px) {
        .carousel-container {
          background: linear-gradient(to right, #00F0FF, #5200FF, #FF2DF7);
          width:75%;
          margin-left:15%;
          border-radius:12px;
        }
      }
      
      @media (min-width: 641px) {
        .carousel-container {
          background-color: #171717;
          margin-left:12%;
        }
      }
    `}
  </style>
  <div className="carousel-container flex flex-col sm:w-3/4 sm:flex-row items-center justify-center sm:justify-start">
    <img className="w-96 h-72 sm:w-96 sm:h-auto mr-8 sm:mr-32" src={shape} alt="Image" />
    <div className="left flex flex-col justify-center items-center md:items-start py-12 md:space-y-5">
      <h1 className="text-2xl font-medium md:text-4xl mx-5 text-white">
        Get Exponential Reach
      </h1>
      <h1 className="text-2xl font-medium md:text-4xl mx-5 text-white">
        Via <span style={{fontWeight:"bold"}}>AI Marketing</span>
      </h1>
      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-start">
        <input
          type="text"
          placeholder="Enter your work email"
          className="btn bg-black text-white border border-white rounded-full px-4 py-2 mx-5 my-6 text-sm w-64 sm:w-auto"
        />
        <button className="btn bg-black font-bold text-white text-sm px-4 py-2 border rounded-full mt-0 md:ml-2">
          Get in touch &gt;
        </button>
      </div>
    </div>
  </div>
</div>


<div className="bg-[#000]">
  <div className="promo space-y-6 flex flex-col lg:flex-row justify-center pt-4">
    <div className="item flex items-center mx-4 mt-6 space-x-2 md:flex-col">
      <img className="w-12 hidden md:block mr-16 sm:hidden" src={one} alt="" />
    </div>
    <div className="item flex md:flex-col items-center mx-4 space-x-2">
      <img className="w-12 hidden md:block mr-16 sm:hidden" src={two} alt="" />
    </div>
    <div className="item flex items-center mx-4 space-x-2 md:flex-col">
      <img className="w-12 hidden md:block mr-16 sm:hidden" src={three} alt="" />
    </div>
    <div className="item flex items-center mx-4 space-x-2 md:flex-col">
      <img className="w-12 hidden md:block mr-16 sm:hidden" src={four} alt="" />
    </div>
    <div className="item flex items-center mx-4 space-x-2 md:flex-col">
      <img className="w-12 hidden md:block mr-16 sm:hidden" src={five} alt="" />
    </div>
    <div className="item flex items-center mx-4 space-x-2 md:flex-col">
      <img className="w-12 hidden md:block mr-16 sm:hidden" src={six} alt="" />
    </div>
  </div>
  <div className="promo space-y-6 flex flex-col lg:flex-row justify-center pt-4">
    <div className="item flex items-center mx-4 mt-6 space-x-2 md:flex-col">
      <img className="w-8 hidden md:block mr-11 sm:hidden" src={seven} alt="" />
    </div>
    <div className="item flex md:flex-col items-center mx-4 space-x-2">
      <img className="w-12 hidden md:block mr-11 sm:hidden" src={eight} alt="" />
    </div>
    <div className="item flex items-center mx-4 space-x-2 md:flex-col">
      <img className="w-8 hidden md:block mr-11 sm:hidden" src={nine} alt="" />
    </div>
    <div className="item flex items-center mx-4 space-x-2 md:flex-col">
      <img className="w-8 hidden md:block mr-11 sm:hidden" src={ten} alt="" />
    </div>
    <div className="item flex items-center mx-4 space-x-2 md:flex-col">
      <img className="w-16 hidden md:block mr-11 sm:hidden" src={eleven} alt="" />
    </div>
    <div className="item flex items-center mx-4 space-x-2 md:flex-col">
      <img className="w-16 hidden md:block mr-11 sm:hidden" src={twelve} alt="" />
    </div>
    <div className="item flex items-center mx-4 mt-6 space-x-2 md:flex-col">
      <img className="w-16 hidden md:block mr-11 sm:hidden" src={thirteen} alt="" />
    </div>
  </div>
  <div className="promo space-y-6 flex flex-col lg:flex-row justify-center pt-4 w-screen">
    <div className="item flex md:flex-col items-center mx-4 space-x-2 pt-4">
      <img className="w-20 hidden md:block mr-11 sm:hidden" src={fourteen} alt="" />
    </div>
    <div className="item flex items-center mx-4 space-x-2 md:flex-col">
      <img className="w-8 hidden md:block mr-11 sm:hidden" src={fifteen} alt="" />
    </div>
    <div className="item flex items-center mx-4 space-x-2 md:flex-col">
      <img className="w-16 hidden md:block mr-11 sm:hidden" src={sixteen} alt="" />
    </div>
    <div className="item flex items-center mx-4 space-x-2 md:flex-col">
      <img className="w-8 hidden md:block mr-11 sm:hidden" src={seventeen} alt="" />
    </div>
    <div className="item flex items-center mx-4 space-x-2 md:flex-col">
      <img className="w-8 hidden md:block mr-11 sm:hidden" src={eighteen} alt="" />
    </div>
    <div className="item flex items-center mx-4 space-x-2 md:flex-col">
      <img className="w-16 hidden md:block mr-11 sm:hidden" src={nineteen} alt="" />
    </div>
    <div className="item flex items-center mx-4 space-x-2 md:flex-col">
      <img className="w-8 hidden md:block sm:hidden  mr-11" src={twenty} alt="" />
    </div>
  </div>

  <div className="flex flex-col sm:flex-row justify-center items-center">
    <div className="flex flex-row justify-center items-center space-x-16 md:hidden">
      <img className="w-12 " src={one} alt="" />
      <img className="w-12 " src={two} alt="" />
      <img className="w-12 " src={nine} alt="" />
    </div>
    <div className="flex flex-row justify-center items-center mt-8 space-x-16 md:hidden">
      <img className="w-12 " src={fourteen} alt="" />
      <img className="w-12 " src={fifteen} alt="" />
      <img className="w-12 " src={eight} alt="" />
    </div>
  </div>

  <div className="right flex items-center justify-center">
    <p className="mt-8 text-white">Trusted by the world's most ambitious teams.</p>
  </div>
</div>

    </div>
    
  );
};

export default LandingPage;