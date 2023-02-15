import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import cursor from "../../assets/PreviousEditions/cursor.png"
import curve from "../../assets/icons/curve.png"


const Container = ({ paragraph, image, reverse, first }) => {
      
      useEffect(()=> {
        AOS.init({duration:1500});
      },[])
  
  return (
    <div className="flex flex-col items-center lg:flex-row 2xl:flex-row lg:gap-24 2xl:gap-28 lg:px-[106px] 2xl:px-[160px] mt-[51px]">
      
      <div
        className={` relative w-[350px] h-[234.4px] lg:w-[569px] lg:h-[381px] 2xl:w-[854.44px] 2xl:h-[572.22px] ${
          reverse && "lg:order-last 2xl:order-last"
        }`}
      >
        <img
          className="absolute w-[294.02px] h-[190.7px] lg:w-[478.52px] lg:h-[310.37px] 2xl:w-[717.78px] 2xl:h-[465.56px] mx-[26px] my-[20px] lg:mx-[46px] lg:my-[35px] 2xl:mx-[68px] 2xl:my-[53px]"
          src={image}
        />
        <img
          className="absolute top-0 left-0 w-[104.57px] h-[48.69px] lg:w-[170.19px] lg:h-[79.24px] 2xl:w-[255.29px] 2xl:h-[118.87px]"
          src={curve}
          alt=""
        />
        
        <img
          className={` absolute  bottom-[-20px] right-[-10px]  lg:-bottom-10 2xl:bottom-0 lg:-right-10 2xl:right-0 w-[58.53px] h-[58.15px] lg:w-[101.33px] lg:h-[100.67px] 2xl:w-[120px] 2xl:h-[151px]${
            !first && " hidden lg:hidden 2xl:hidden"
          }`}
          src={cursor}
          alt=""
          data-aos="fade-up"
        />
  
      </div>

      <p className="text-justify mt-14 text-iwd-gray text-normal text-[22px] lg:text-[19px] 2xl:text-[28px] lg:leading-10 2xl:leading-[48px] w-[350px] lg:w-[399.33px] 2xl:w-[599px]">{paragraph}</p>

    </div>
  );
};

export default Container;
