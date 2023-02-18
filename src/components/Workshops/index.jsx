import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";

import { workshopsData } from "./data";

import swiperleft from "../../assets/Workshops/swipe-left.png";
import swiperright from "../../assets/Workshops/swipe-right.png";
import titlecover from "../../assets/Workshops/title-cover.png";

const Workshops = () => {
  const swiperRef = useRef(null);

  return (
    <section>
      <div className="h-[55vh] lg:h-screen w-full flex flex-col items-center justify-center lg:justify-start mb-20">
        <div>
          <h1 className="font-bold text-3xl pb-40 lg:pb-0 lg:text-7xl 2xl:text-8xl">
            Workshops
          </h1>
        </div>

        <div className="flex justify-center items-center w-full py-12 lg:py-16 lg:p-24 relative">
          <div className="absolute invisible lg:visible bg-iwd-dark lg:h-96 lg:w-24 left-0 lg:top-40 2xl:top-96 rounded-tr-full rounded-br-full"></div>
          <div className="absolute invisible lg:visible bg-iwd-dark lg:h-96 lg:w-24 right-0 lg:top-1 2xl:-top-10 rounded-tl-full rounded-bl-[50px]"></div>

          <div className="flex items-center justify-center absolute  lg:top-20 2xl:top-32">
            <div
              onClick={() => {
                swiperRef.current.swiper.slidePrev();
              }}
              className="cursor-pointer invisible lg:pb-32 lg:visible lg:w-1/6"
            >
              <img
                src={swiperleft}
                alt="swipeleft"
                className="hover:scale-110"
              />
            </div>

            <Swiper
              ref={swiperRef}
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              className="flex justify-center items-center w-[500px] lg:w-[450px] 2xl:w-[700px] "
            >
              {workshopsData.map((wrkshop, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    {() => (
                      <div className="w-full flex flex-col items-center justify-center space-y-6">
                        <div className="w-full ">
                          <img
                            src={wrkshop.image}
                            alt={wrkshop.alt}
                            className=" rounded-lg"
                            layout="responsive"
                          />
                        </div>

                        <div>
                          <div className=" mb-16 relative mx-auto flex px-12 py-3 lg:py-5 lg:px-16  rounded-3xl justify-center ">
                            <img
                              src={titlecover}
                              className=" absolute h-10 lg:h-16 lg:w-80 2xl:h-20 2xl:w-[800px] z-10 top-0 lg:top-3"
                              alt="cover"
                            />
                            <p className="text-center font-semibold text-xs lg:text-xl 2xl:text-3xl lg:p-2">
                              {" "}
                              {wrkshop.description}{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div
              onClick={() => {
                swiperRef.current.swiper.slideNext();
              }}
              className="cursor-pointer invisible lg:visible lg:pb-32 lg:w-1/6"
            >
              <img src={swiperright} alt="swiper" className="hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
