import lines_toLeft from "../../assets/icons/lines-toLeft.png"
import line_end_circle_toLeft from "../../assets/icons/line-end-circle-toLeft.png"
const BorderRight = (
    {word}) =>{
     return(
        <div className="flex flex-row ml-[517px]  mt-12 gap-x-6 ">
                    <img className=" w-[34px] h-[50px]" src={lines_toLeft}  />
                <p className="text-[32px] font-semibold ">{word}</p>
                <img  src={line_end_circle_toLeft} alt="" />
                </div>
     )
 }
 export default BorderRight