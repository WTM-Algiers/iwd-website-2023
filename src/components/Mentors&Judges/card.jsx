import swipeleft from '../../assets/Mentors&Judges/swipe-left.png'
import swiperight from '../../assets/Mentors&Judges/swipe-right.png'
import titlecover from '../../assets/Mentors&Judges/title-cover.png'
import {mentorsjudges} from'./infos'
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';


const CardMentor = () => {
    const swiperRef = useRef(null);

          return (
<div className="w-screen py-40 lg:py-36 lg:px-28 2xl:py-80 2xl:px-52">
            <div className="bg-iwd-white container flex flex-col lg:flex-row items-center"> 
            <img src={swipeleft} onClick={() => {
            swiperRef.current.swiper.slidePrev();
          }} className="cursor-pointer invisible h-0 lg:h-20 lg:visible" />
         <div className="w-8/12 lg:w-10/12 2xl:w-10/12">
    
          <Swiper
          modules={[Navigation, Pagination]}
          ref={swiperRef}
          slidesPerView={1}
          pagination={{el: 'swiper-pagination', clickable:true, bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`}}
    
          >
            {mentorsjudges.map((prs, idx) => {
            return (
              <SwiperSlide key={idx}>
                {({ isActive, isNext, isPrev }) => (        
                <div className="flex flex-col lg:flex-row gap-2 items-center lg:py-20 lg:gap-14 lg:px-32">
                <div className="flex flex-col-reverse items-center gap-4 lg:flex-col">
                    <img src={prs.image} className="w-32 lg:w-60 2xl:w-80" />
                    <div>
                      <div className="relative">
                      <img src={titlecover} className=" absolute right-[104px] w-20 lg:right-0 lg:w-64 2xl:w-96" />
                      </div> 
                        <div className="font-bold text-xl px-28
                         lg:text-4xl lg:py-4 lg:px-16 2xl:text-6xl">{prs.type}</div>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:items-start lg:gap-4 lg:py-12">
                    <div className="font-bold text-xl lg:text-4xl 2xl:text-6xl">{prs.name}</div>
                    <div className="text-sm text-center py-4 lg:py-0 lg:text-left text-iwd-gray lg:text-xl 2xl:text-3xl font-thin ">{prs.description}</div>
                </div>
               
             </div>
                    
            
             )}
             </SwiperSlide> 
             );
            })}
          </Swiper>
       
          </div>
          

          <img src={swiperight} onClick={() => {
            swiperRef.current.swiper.slideNext();
          }}
          className="cursor-pointer invisible h-0 lg:h-20 lg:visible"/>
            </div>

            </div>
            )
          }
          
export default CardMentor