import heroImg from "../../assets/Hero/hero-img.png";
import arrow from "../../assets/icons/line-end-circle-toRight.png";
import arrowRight from "../../assets/icons/line-end-circle-toLeft.png";
import CounterContainer from "./CounterContainer";
const Hero = () => {
  return (
    <section id="home" className="pt-12">
      <div align="center" className="overflow-hidden min-h-screen">
        <div
          data-aos="fade-right"
          className="hidden md:flex md:flex-row gap-2 justify-start items-center md:mt-[9vw] md:-ml-36"
        >
          <img src={arrow} alt="point-right" className="w-[20%] 2xl:w-[18%]" />
          <span className="text-[12px] 2xl:text-[18px]">
            Where everyone can thrive in tech!{" "}
          </span>
        </div>
        <div className="container">
          <div className="flex md:flex-row flex-col items-center gap-12 lg:gap-0 mt-36 sm:mt-32 md:mt-0">
            <div className="2xl:flex-1 flex flex-col justify-center items-center md:items-start">
              <h1 className="font-bold leading-[58px] text-5xl md:text-[6vw] lg:text-[6.5vw] md:text-left lg:leading-[104px] 2xl:leading-[150px]">
                Dare to <br /> <span>be</span>{" "}
                <div className="inline-block animated-text animated-text-lg">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-iwd-blue to-iwd-green gradient-text">
                    Creative!
                    <br />
                    Unique!
                    <br />
                    Original!
                    <br />
                  </span>
                </div>
              </h1>

              <p className="my-6 text-iwd-gray text-[17px] leading-[24px] md:text-left lg:leading-[32px] 2xl:leading-[48px] 2xl:text-2xl w-[80%]">
                Sometimes we get too idealistic we could imagine a whole perfect
                world, in IWD’23 Algiers we dare to create it!
              </p>
              <div>
                <a href="https://tripetto.app/run/ZTAK3F5C4V"
                target="__blank"
                  className="bg-iwd-dark mt-2 text-iwd-white py-2 px-6 rounded-full transform-all duration-500 hover:text-bold lg:text-2xl lg:px-12 lg:py-[15px] 2xl:py-[18px] 2xl:px-14 hover:bg-iwd-blue"
                >
                  Register
                </a>
              </div>
            </div>

            <img
              src={heroImg}
              alt="hero image"
              className="lg:w-[50%] lg:h-[40%] w-[80%] h-[80%] 2xl:w-[45%]"
            />
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="hidden md:flex md:flex-row gap-2  justify-end items-center md:pt-8 md:-mr-36 "
        >
          <span>Together we thrive!</span>
          <img
            src={arrowRight}
            alt="point-right"
            className="w-[20%] 2xl:w-[18%]"
          />
        </div>
      </div>
      <CounterContainer countDownLimit={1678986000000} />
    </section>
  );
};

export default Hero;
