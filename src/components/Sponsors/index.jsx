import React, { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import curve from "../../assets/Sponsors/curve.png";
import swipeleft from "../../assets/Sponsors/swipe-left.png";
import swiperight from "../../assets/Sponsors/swipe-right.png";
import twitter from "../../assets/logos/twitter.png";
import titleicon from "../../assets/Sponsors/title-icon.png";

const Sponsors = () => {
  
  const  sponsors  = [
    {
      tite: "HIS",
      src: twitter,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting indust the printing and typesetting indusdfd gdgd ",
    },
    {
      tite: "Github",
      src: twitter,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting indust  the printing and typesetting indus",
    },
    {
      tite: "ESi",
      src: twitter,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting indust mply dummy text of the printing ",
    },

    {
      tite: "GDG",
      src: twitter,
      description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting indust mply dummy text of the printing ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sponsors.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === sponsors.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section>
      <div className=" flex flex-col gap-3    m-auto py-16 sm:px-4  px-1 relative group">
        {/*  section title  */}
        <div className="flex flex-row justify-center">
          <h1 className=" text-3xl font-bold text-center py-3   "> Sponsors</h1>
          <img src={titleicon} alt="" />
        </div>
         {/*  div contains sponsor's info  */}
        <div
          style={{ 
          backgroundImage: `url(${curve})`,}}
          className=" self-center  max-h-60 max-w-60  md:max-h-[750px] md:w-[650px] md:h-[550px] bg-center bg-cover duration-500"
        >
          <h1 className="text-center font-bold text-3xl text-iwd-white mt-1 sm:mt-4  ">
            {sponsors[currentIndex].tite}
          </h1>
          <div className="flex flex-row  ">
            <img
              src={sponsors[currentIndex].src}
              alt=""
              className=" h-16 w-16 sm:h-24 sm:w-24 ml-2 mt-8  sm:ml-5 sm:mt-20"
            />
            <p className=" text-center  text-iwd-white text-base sm:text-xl p-4 sm:mt-16">
              {sponsors[currentIndex].description}
            </p>
          </div>
        </div>
        {/* Left Arrow */}
        <div className="hidden md:flex  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
          <img src={swipeleft} alt="" onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="  hidden md:flex  absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <img src={swiperight} alt="" onClick={nextSlide} size={30} />
        </div>
        {/* go to slide componant*/}
        <div className="flex top-4 justify-center py-2">
          {sponsors.map((sponsor, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
