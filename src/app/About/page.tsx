'use client'
import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const VideoWrapper = ({ children }:any) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once when it comes into view
    threshold: 0.5, // Customize the threshold as needed
  });

  

  return (
    <div
      ref={ref}
      style={{
        height: "1280px",
        width: "100%",
        position: "absolute",
        top: 140,
        left: 0,
        zIndex: -1,
        opacity: inView ? 1 : 0,
        transform: inView ? "scale(1)" : "scale(0.5)",
      }}>
      {children}
    </div>
  );
};

const About = () => {
  return (
    <div className="max-container flex flex-col ">
      <div className="relative w-[70%]  text-[60px]  pl-[5%] flex justify-center font-bold flex-col font-sans lg:text-[75px] xl:text-[160px] mt-64 mb-96 text-gray-300">
        <div className="text-xl leading-tight">Our Mission</div>

        <div className="leading-tight flex justify-start items-start flex-col font-extrabold">
          <span className="lg:mb-[-20px] xl:mb-[-64px]">BRING</span>
          <span className="lg:mb-[-20px] xl:mb-[-64px]">INSPIRATION</span>
          <span className="lg:mb-[-20px] xl:mb-[-64px]">AND</span>
          <span className="lg:mb-[-20px] xl:mb-[-64px]">INNOVATION</span>
          <span className="lg:mb-[-20px] xl:mb-[-64px]">TO</span>
          <span className="lg:mb-[-20px] xl:mb-[-64px]">EVERY</span>
          <span className="lg:mb-[-20px] xl:mb-[-64px]">ATHLETE*</span>
          <span className="lg:mb-[-20px] xl:mb-[-64px]">IN THE</span>
          <span className="lg:mb-[-20px] xl:mb-[-64px]">WORLD</span>
          <span className="font-serif font-semibold text-sm mt-8">
            *If you have a body, you are an athlete
          </span>
        </div>
      </div>
     
        <VideoWrapper>
          <video autoPlay loop style={{ height: "100%" }}>
            <source src="./NikeVideo.mp4" className="" />
          </video>
        </VideoWrapper>
      </div>
    
  );
};

export default About;
