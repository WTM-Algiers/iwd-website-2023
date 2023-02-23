import Navbar from "./NavBar";
import heroImg from "../../assets/Hero/hero-img.png";
import arrow from "../../assets/icons/line-end-circle-toRight.png";
import timer from "../../assets/Hero/countDown-img.png";
import arrowRight from "../../assets/icons/line-end-circle-toLeft.png";
const Hero = () => {
  return (
    <section id="home" className="">
      <div align="center" className="overflow-hidden">
        <div className="hidden md:flex md:flex-row gap-2 justify-start items-center md:mt-[9vw] md:-ml-36">
          <img src={arrow} alt="point-right" className=" w-[20%] h-[15%]" />
          <span>Welcome to this beautiful community!</span>
        </div>
        <div className="container">
          <div className="flex md:flex-row flex-col items-center md:gap-36 gap-12 mt-[33vw] md:mt-0">
            <div className="flex flex-col justify-center items-center ">
              <p className="md:text-left md:leading-[8.126934984520123vw] font-extrabold md:text-[6.5015479876160995vw] text-5xl">
                Dare to <br /> be{" "}
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-iwd-blue to-iwd-pink">
                  Creative!
                </span>
              </p>

              <p className="md:text-left py-5 w-[80%]">
                Do you “Dare To Be” this International Women’s Day by WTM
                Algiers chapter?{" "}
              </p>
              <button className="bg-iwd-dark px-6 py-2 text-iwd-white rounded-full">
                Register
              </button>
            </div>

            <img
              src={heroImg}
              alt="hero image"
              className="md:w-[40%] md:h-[40%] w-[80%] h-[80%]"
            ></img>
          </div>
        </div>

        <div className="hidden  md:flex md:flex-row gap-2 justify-end items-center md:py-10 md:-mr-36">
          <span>Together we thrive!</span>
          <img src={arrowRight} alt="point-right" className=" w-[20vw]" />
        </div>
        <div className="container">
          <div className="grid grid-cols-2 gap-2 p-[2%] place-items-center md:flex md:flex-row md:justify-center md:items-center md:w-full md:px-20 mb-[12%] md:mb-16 md:space-x-20 w-full">
            <div className="bg-[url('./assets/Hero/countDown-img.png')] w-[12vw] aspect-[1.29] bg-cover flex flex-col justify-center items-center ">
              <div className="">00</div>
              <div className="">Days</div>
            </div>
            <div className="bg-[url('./assets/Hero/countDown-img.png')] w-[12vw] aspect-[1.29] bg-cover flex flex-col justify-center items-center ">
              <div className="">00</div>
              <div className="">Hours</div>
            </div>
            <div className="bg-[url('./assets/Hero/countDown-img.png')] w-[12vw] aspect-[1.29] bg-cover flex flex-col justify-center items-center ">
              <div className="">00</div>
              <div className="">Minutes</div>
            </div>
            <div className="bg-[url('./assets/Hero/countDown-img.png')] w-[12vw] aspect-[1.29] bg-cover flex flex-col justify-center items-center ">
              <div className="">00</div>
              <div className="">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
