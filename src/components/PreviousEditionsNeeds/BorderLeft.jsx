import lines_toLeft from "../../assets/icons/lines-toRight.png"
import line_end_circle_toLeft from "../../assets/icons/line-end-circle-toRight.png"
const BorderLeft = (
    {word}) =>{
     return(
        <div className="flex flex-row  mt-12 gap-x-6 ">
            <img  src={line_end_circle_toLeft} alt="" />
            <p className="text-[32px] font-semibold ">{word}</p>
                    <img className=" w-[34px] h-[50px]" src={lines_toLeft}  />
                
                
                </div>
     )
 }
 export default BorderLeft