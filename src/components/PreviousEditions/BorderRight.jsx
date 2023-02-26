import lines_toLeft from "../../assets/icons/lines-toLeft.png";
import line_end_circle_toLeft from "../../assets/PreviousEditions/line-end-circle-toLeft1.png";
const BorderRight = ({ word }) => {
  return (
    <div
      data-aos="fade-left"
      className="flex flex-row justify-center lg:ml-[517px] 2xl:ml-[788px] mt-12 gap-7 lg:gap-x-6 2xl:gap-10 "
    >
      <img
        className="w-[33.76px] h-[49.9px] lg:w-[34px] 2xl:w-[51px] lg:h-[50px] 2xl:h-[75px]"
        src={lines_toLeft}
        alt="shape"
      />
      <p className=" text-[32px] lg:text-[32px] 2xl:text-5xl font-bold">
        {word}
      </p>
      <img
        className="hidden lg:flex 2xl:flex 2xl:w-[850px]"
        src={line_end_circle_toLeft}
        alt="shape"
      />
    </div>
  );
};
export default BorderRight;
