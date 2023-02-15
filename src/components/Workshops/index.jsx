import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { workshopsData } from "./data";

import swiperleft from "../../assets/Workshops/swipe-left.png"
import swiperright from "../../assets/Workshops/swipe-right.png"


const Workshops = () => {
    
    const swiperRef = useRef(null);

    return (
        <section>
            <div className="h-screen w-full flex flex-col items-center justify-start ">

                    <div>
                         <h1 className=" font-PTsans font-bold text-7xl "> Workshops</h1>
                    </div>

                    <div className="flex justify-center items-center w-full py-16 lg:p-24 relative " >
                            <div className="absolute bg-iwd-dark lg:h-96 lg:w-24 left-0 top-40 rounded-tr-full rounded-br-full"></div>

                            <div className="absolute bg-iwd-dark lg:h-96 lg:w-24 right-0 top-1 rounded-tl-full rounded-bl-full "></div>


                           
                                <div className="flex items-center justify-center ">
                                    <div
                                        onClick={() => {
                                            swiperRef.current.swiper.slidePrev();
                                        }}
                                        className="cursor-pointer invisible lg:visible lg:w-1/6"
                                        >
                                        <img src={swiperleft} alt="swipeleft" className="hover:scale-110" />
                                    </div>

                                    <Swiper
                                    ref={swiperRef}
                                    className=" flex justify-center items-center w-96 lg:w-80 "
                                    >
                                    {workshopsData.map((wrkshop, idx) => {
                                        return (
                                        <SwiperSlide key={idx}>
                                            {() => (
                                            
                                                <div className=" w-full flex flex-col items-center justify-center space-y-6">
                                                <div className=" border-2 ">
                                                    <img src={wrkshop.image} alt={wrkshop.alt} className=" rounded-lg" layout="responsive"/>
                                                </div>
                                                    <div className="mx-auto flex px-12 py-3 lg:py-5 lg:px-16 border-2 rounded-3xl justify-center text-[12px] lg:text-20 font-semibold">
                                                    <p className="text-center"> {wrkshop.description} </p>
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
                                        className="cursor-pointer invisible lg:visible lg:w-1/6"
                                        >
                                        <img src={swiperright} alt="swiper" className="hover:scale-110" />
                                    </div>

                                </div>
                           

                          

                    </div>

           
           
            </div>
        </section>
    )
}

export default Workshops