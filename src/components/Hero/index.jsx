import Navbar from "./NavBar";
import heroImg from "../../assets/Hero/hero-img.png"; 
import arrow from "../../assets/icons/line-end-circle-toRight.png"
import timer from "../../assets/Hero/countDown-img.png"
const Hero = () => {
  return (<section id="home" className="">

  
  <div>

<Navbar/>
  </div>

<div align="center" className="">
<div className="container">

<div className="flex lg:flex-row flex-col justify-center items-center lg:py-64 py-36 lg:space-x-20 space-y-20"> 
  <div>
    <span className="fontFamily-sans-serif lg:text-6xl text-2xl">Dare To Be </span>
    <h1 
className="font-extrabold bg-clip-text text-transparent lg:text-8xl  text-4xl bg-gradient-to-r from-iwd-blue to-iwd-pink">
	 Creative!
</h1>
    </div > 
  <div className="flex justify-center items-center">
    <img src={heroImg} alt="hero image" className="lg:w-[70%] w-[80%]"></img>
  </div>
  
  </div> 

</div>
<div>


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
