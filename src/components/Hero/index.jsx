import Navbar from "./NavBar";
import heroImg from "../../assets/Hero/hero-img.png"; 
import arrow from "../../assets/icons/line-end-circle-toRight.png"
import timer from "../../assets/Hero/countDown-img.png"
import arrowRight from "../../assets/icons/line-end-circle-toLeft.png"
const Hero = () => {
  return (<section id="home" className="">
 
<div align="center" className="">

<div className="hidden lg:flex lg:flex-row justify-start items-center mt-24 lg:-ml-36">

<img src={arrow} alt="point-right" className=" w-[20%] h-[15%]"/>
<span>welcome to this beautiful community!</span>
  </div>
<div className="container">

<div className="flex lg:flex-row flex-col justify-center items-center lg:px-5 lg:space-x-20 space-y-20"> 
  <div className="flex lg:flex-col justify-start items-start">
    <p className="text-left fontFamily-sans-serif lg:text-4xl text-1xl"></p>
    <p 
className="font-extrabold text-left text-transparent bg-clip-text lg:text-7xl text-4xl bg-gradient-to-r from-iwd-blue to-iwd-pink">
	 Dare to be Creative!
</p>
<p className="text-left py-5">Do you “Dare To Be” this International Women’s Day in wtm Algiers chapter? </p>
<button className="bg-iwd-dark px-6 py-2 text-iwd-white rounded-full">Register</button>
    </div > 
 
    <img src={heroImg} alt="hero image" className="lg:w-[45%] w-[45%]"></img>
  </div>
 

</div>


<div className="hidden lg:flex lg:flex-row justify-end items-center lg:py-10 lg:-mr-36">
<span>Together we thrive!</span>
<img src={arrowRight} alt="point-right" className=" w-[20%] h-[15%]"/>

  </div>
  <div className="container">

    <div className="grid grid-cols-2 gap-2 p-[2%] place-items-center lg:flex lg:flex-row lg:justify-center lg:items-center lg:w-full lg:px-20 mb-[12%] lg:mb-16 lg:space-x-20 w-full">
      <div className="relative  w-[50%] my-3 lg:w-[25%] lg:h-[25%]">
        <img src={timer} alt="timer" className="" />
        <div className="absolute z-10 flex flex-col justify-center items-center bottom-2 left-6 lg:bottom-8 lg:left-11">
        <div className="">00</div>
        <div className="">Days</div>
        </div>
        </div>
        <div className="relative w-[50%] lg:w-[25%] lg:h-[25%]">
        <img src={timer} alt="timer" className="" />
        <div className="absolute z-10 flex flex-col justify-center items-center bottom-2 left-6 lg:bottom-8 lg:left-11">
        <div className="">00</div>
        <div className="">Hours</div>
        </div>
        </div>


        <div className="relative w-[50%] lg:w-[25%] lg:h-[25%]">
  <img src={timer} alt="timer"/>
  <div className="absolute z-10 flex flex-col justify-center items-center bottom-2 left-4 lg:bottom-8 lg:left-9">
        <div className="">00</div>
        <div className="">Minutes</div>
        </div>
  </div>
  <div className="relative w-[50%] lg:w-[25%] lg:h-[25%]">
  <img src={timer} alt="timer"/>
  <div className="absolute z-10 flex flex-col justify-center items-center bottom-2 left-4 lg:bottom-8 lg:left-9">
        <div className="">00</div>
        <div className="">Seconds</div>
        </div>
  </div>
</div>
 

  </div>

</div>
  </section>
  );

};

export default Hero;
