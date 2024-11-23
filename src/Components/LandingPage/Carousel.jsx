import React from "react";
import Carousel1 from "../../assets/carousel1.svg";
import Carousel2 from "../../assets/carousel2.svg";

function Carousel() {
  return (
    <div className="bg-[#FCF8F3] py-16 mb-20 pl-20 relative">
      <div className="container relative mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 p-10">
          <h1 className="text-[40px] leading-[48px] font-bold  text-gray-800">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="text-gray-600 text-{#616161} text-lg">
            Our designer already made a lot of beautiful prototype of rooms
            that inspire you.
          </p>
          <button className="px-10 py-3 bg-[#B88E2F] text-white">
            Explore More
          </button>
        </div>

        {/* Carousel Images */}
        <div className="md:w-3/4 flex relative">
          <div className="w-full flex gap-6 overflow-hidden">
            {/* Image 1 */}
            <div className="relative w-full">
              <img src={Carousel1} alt="Room Inspiration 1" className="-lg" />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-10 py-8 ">
                <p className="text-sm text-gray-600">01 — Bed Room</p>
                <h3 className="text-3xl opacity-75 font-semibold">Inner Peace</h3>
              </div>
              <div className="absolute bg-[#B88E2F] inline-block w-20 h-20" >{">"}</div>
            </div>

            {/* Image 2 */}
            <div className="relative w-full">
              <img src={Carousel2} alt="Room Inspiration 2" className="" />
            </div>
          </div>

          {/* Arrows */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button className="bg-white text-2xl text-gray-800 shadow-lg w-8 h-8 rounded-full flex justify-center items-center">
              {"<"}
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button className="bg-white text-2xl text-gray-800 shadow-lg w-8 h-8 rounded-full flex justify-center items-center">
              {">"}
            </button>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="mt-8 absolute flex justify-center gap-2 bottom-24 right-[300px]">
        <span className="w-3 h-3 bg-[#B39256] rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      </div>
    </div>
  );
}

export default Carousel;
