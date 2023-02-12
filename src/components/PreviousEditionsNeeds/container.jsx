import cursor from "../../assets/PreviousEditions/cursor.png"
import curve from "../../assets/icons/curve.png"
const Container = (
   { paragraph,
    image,
    reverse,
    first
    }
) =>{
    return(
        <div className="flex flex-row gap-24 items-center px-[106px] mt-[51px]">
            <p className="text-[19px]  leading-10 w-[400px]">{paragraph}</p>
            <div  className={` relative w-[569px] h-[381px] ${
          reverse && "lg:order-first 2xl:order-first"
        }`}>
            <img className="absolute w-[478.52px] h-[310.37px] mx-[46px] my-[35px]" src={image} />
            <img className="absolute top-0 left-0 w-[170.19px] h-[79.24px]" src={curve} alt="" />
            <img className={` absolute bottom-[-40px] right-[-40px] w-[101.33px] h-[100.67px] ${
                !first && "hidden"}`} src={cursor} alt="" />
            </div>
        </div>

    )

}

export default Container