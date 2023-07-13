import React from "react";
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
    <div className="bg-[#000]">
      <Navbar />
      <div className="slider flex flex-col-reverse justify-center md:flex-row bg-[#000]">
        <div className="left flex flex-col justify-center items-center md:items-baseline py-12 ml-5 md:ml-32 space-y-5">
          <h1 className="text-2xl font-medium md:text-4xl mx-5 text-white">
            AI Marketing.
          </h1>
          <h1 className="text-2xl font-medium md:text-4xl mx-5 text-white">
            Optimised Reach.
          </h1>
          <p className="w-3/4 mx-5 text-center md:text-left text-white">
            Our vision is to revolutionize the way brands and advertisers target, reach
          </p>
          <button className="text-white bg-black px-4 py-2 my-6 font-bold mx-5 hover:bg-black-100 text-white text-sm px-4 py-2 border rounded-full">
            Get Started &gt;
          </button>
        </div>
        <div className="right flex items-center justify-center">
          <img className="w-80 md:w-96" src={globe} alt="" />
        </div>
      </div>
      <div className="bg-[#000]">
        <div className="promo space-y-6 flex flex-col lg:flex-row justify-center pt-4">
          <div className="item flex items-center mx-4 mt-6 space-x-2 md:flex-col">
            <img className="w-12 block md:block sm:block mr-16" src={one} alt="" />
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
            <img className="w-8 hidden md:block mr-11" src={twenty} alt="" />
          </div>
        </div>
        <div className="promo space-y-6 flex flex-col lg:flex-row justify-center pt-4">
          <p className="text-white">Trusted by the world's most ambitious teams.</p>
        </div>
      </div>
      <div className="slider flex flex-col-reverse justify-center md:flex-row bg-[#000]" >
        <div className="left flex flex-col justify-center items-center md:items-baseline py-12 md:ml-72 space-y-5">
          <h1 className="text-2xl font-medium md:text-4xl mx-5 text-white">
            AI Marketing.
          </h1>
          <h1 className="text-2xl font-medium md:text-4xl mx-5 text-white">
            Optimised Reach.
          </h1>
          <p className="w-2/3 mx-5 text-center md:text-left text-white">
            DOML is a digital media agency powered by AI technology providing real time, data-driven insights on your business and audience. The mission of DOML is to create the best experiences for companies through intelligent insights, powerful analytics and strategic execution.
          </p>
          <button className="text-white bg-black px-4 py-2 my-6 font-bold mx-5 hover:bg-black-100 text-white text-sm px-4 py-2 border rounded-full">
            Learn More &gt;
          </button>
        </div>
        <div className="left flex items-center justify-center mr-64">
          <img className="w-80 md:w-[1728px]" src={cube} alt="" />
        </div>
      </div>
      <div className="slider flex flex-col-reverse justify-center md:flex-row bg-[#000]">
      <div className="left flex items-center justify-center">
          <img className="w-80 md:w-96 ml-96" src={trumpet} alt="" />
        </div>
        <div className="right flex flex-col justify-center items-center md:items-baseline py-12 ml-5 md:ml-96 space-y-5">
          <h1 className="text-2xl font-medium md:text-4xl mx-5 text-white">
            AI Marketing.
          </h1>
          <h1 className="text-2xl font-medium md:text-4xl mx-5 text-white">
            Optimised Reach.
          </h1>
          <p className="w-2/3 mx-5 text-center md:text-left text-white">
            It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.
          </p>
          <button className="text-white bg-black px-4 py-2 my-6 font-bold mx-5 hover:bg-black-100 text-white text-sm px-4 py-2 border rounded-full">
            Learn More &gt;
          </button>
        </div>  
      </div>
      <Carousel></Carousel>
      <div className="slider flex flex-col-reverse justify-center md:flex-row bg-[#000]" >
        <div className="left flex flex-col justify-center items-center md:items-baseline py-12 md:ml-72 space-y-5">
          <h1 className="text-2xl font-medium md:text-4xl mx-5 text-white">
            AI Marketing.
          </h1>
          <h1 className="text-2xl font-medium md:text-4xl mx-5 text-white">
            Optimised Reach.
          </h1>
          <p className="w-2/3 mx-5 text-center md:text-left text-white">
          DOML is a digital media agency powered by AI technology providing real time, data-driven insights on your business and audience. The mission of DOML is to create the best experiences for companies through intelligent insights, powerful analytics and strategic execution.
          </p>
          <button className="text-white bg-black px-4 py-2 my-6 font-bold mx-5 hover:bg-black-100 text-white text-sm px-4 py-2 border rounded-full">
            Learn More &gt;
          </button>
        </div>
        <div className="left flex items-center justify-center mr-64">
          <img className="w-80 md:w-[1440px]" src={cube2} alt="" />
        </div>
      </div>
      <div className="slider flex flex-col-reverse justify-center md:flex-row bg-[#000]">
      <div className="left flex items-center justify-center">
          <img className="w-80 md:w-96 ml-96" src={semicircle} alt="" />
        </div>
        <div className="right flex flex-col justify-center items-center md:items-baseline py-12 ml-5 md:ml-96 space-y-5">
          <h1 className="text-2xl font-medium md:text-4xl mx-5 text-white">
            AI Marketing.
          </h1>
          <h1 className="text-2xl font-medium md:text-4xl mx-5 text-white">
            Optimised Reach.
          </h1>
          <p className="w-2/3 mx-5 text-center md:text-left text-white">
          It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.
          </p>
          <button className="text-white bg-black px-4 py-2 my-6 font-bold mx-5 hover:bg-black-100 text-white text-sm px-4 py-2 border rounded-full">
            Learn More &gt;
          </button>
        </div>  
      </div>
      <div className="carousel-item flex items-center  ml-48 p-4 bg-[#171717] w-11/12 md:w-2/3 lg:w-3/4 xl:w-4/5 mx-auto ml-12 border rounded-[16px] border-transparent justify-center">
  <div className="w-1/2 md:w-1/4 md:ml-8 lg:ml-16 xl:ml-24">
    <img src={shape} alt="Carousel Item" className="w-full" />
  </div>
  <div className="w-1/2 md:w-3/4 md:pl-8">
    {/* <p className="mb-2 text-white text-left">It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.</p> */}
    <h1 className="text-4xl  mb-2 text-white text-left">Get Exponential reach</h1>
    <h1 className="text-4xl  mb-2 text-white text-left">via AI Marketing</h1>
    <button className=" px-4 py-2 my-6 font-bold mx-5 hover:bg-black-100 text-white text-sm px-4 py-2 ">
    <input
              type="text"
              placeholder="Enter your work email"
              className="text-white bg-black px-4 py-2 my-6 font-bold mx-5 hover:bg-black-100 text-white text-sm px-4 py-2 border rounded-full"
            />
          
    </button>
    <button className="text-white bg-black px-4 py-2 my-6 font-bold mx-5 hover:bg-black-100 text-white text-sm px-4 py-2 border rounded-full">
      Get in touch &gt;
    </button>
    <hr className="border-t-2 border-gray-300 mb-2 w-3/4" />
  </div>
</div>

      <div className="bg-[#000]">
        <div className="promo space-y-6 flex flex-col lg:flex-row justify-center pt-4">
          <div className="item flex items-center mx-4 mt-6 space-x-2 md:flex-col">
            <img className="w-12 block md:block sm:block mr-16" src={one} alt="" />
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
            <img className="w-8 hidden md:block mr-11" src={twenty} alt="" />
          </div>
        </div>
        <div className="promo space-y-6 flex flex-col lg:flex-row justify-center pt-4">
          <p className="text-white">Trusted by the world's most ambitious teams.</p>
        </div>
      </div>
    </div>
    
  );
};

export default LandingPage;
