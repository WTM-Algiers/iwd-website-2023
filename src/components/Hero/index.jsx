import Navbar from "./NavBar";
import heroImg from "../../assets/Hero/hero-img.png"; 
import arrow from "../../assets/icons/line-end-circle-toRight.png"
import timer from "../../assets/Hero/countDown-img.png"
const Hero = () => {
  return (<section id="home" className="">

  
  <div>

<Navbar/>
  </div>

  <div className="container">

<div className="flex justify-end flex py-60 space-x-20"> 
  <div>
    <span className="fontFamily-sans-serif text-6xl">Dare To Be </span>
    <span className="text-transparent text-8xl bg-clip-text bg-gradient-to-r from-iwd-blue by-iwd-green to-iwd-green">
	 Creative!
</span>
    </div> 
  <div>
    <img src={heroImg} alt="hero image" className=""></img>
  </div>
  
  </div> 

</div>
<div>


</div>
  <div className="container">

    <div className="flex flex-wrap justify-evenly py-20 flex-wrap max-width">
      <div className="flex">
        <img src={timer} alt="timer" width={"100%"} />
  <img src={timer} alt="timer" width={"100%"} />
  </div>
  <div className="flex"><img src={timer} alt="timer" width={"100%"} />
  <img src={timer} alt="timer" width={"100%"} /></div>
  
</div>
 

  </div>
<>

</>
  </section>
  );

};

export default Hero;
