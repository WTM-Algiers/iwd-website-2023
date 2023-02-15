import lines_toLeft from "../../assets/icons/lines-toRight.png"
import line_end_circle_toRight from "../../assets/PreviousEditions/line-end-circle-toLeft1.png"
const BorderLeft = (
    {word}) =>{
     return(
        <div className=" ">
        <div className="flex flex-row justify-center  mt-12 lg:mr-[517px] 2xl:mr-[776px] lg:gap-x-6 2xl:gap-10 ">
            <img className="rotate-180 2xl:w-[850px] hidden lg:flex 2xl:flex" src={line_end_circle_toRight} alt="" />
            <p className="text-[32px] lg:text-[32px] 2xl:text-5xl font-bold ">{word}</p>
                    <img className="  w-[33.76px] h-[49.9px] lg:w-[34px] 2xl:w-[51px] lg:h-[50px] 2xl:h-[75px]" src={lines_toLeft}  />
                
                
                </div>
                </div>
     )
 }
 export default BorderLeft