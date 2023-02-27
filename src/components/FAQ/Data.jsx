import { useState } from "react";
const Data = ({ question, answer, i }) => {
  const [color, setColor] = useState("bg-iwd-blue-second");

  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      setColor("bg-iwd-blue-second");
      return setSelected(null);
    }
    {
      setSelected(i);
      setColor("bg-iwd-blue");
    }
  };
  return (
    <div className={`mb-[5px] ${color}`}>
      <div
        className="flex justify-between text-base lg:text-[22px] 2xl:text-[32px] cursor-pointer text-iwd-white container py-6 2xl:py-8"
        onClick={() => toggle(i)}
      >
        {question}
        <span>{selected == i ? "-" : "+"}</span>
      </div>
      <div
        className={`${
          selected === i ? " max-h-56 lg:max-h-28" : "max-h-0"
        } transition-all duration-300 overflow-hidden`}
      >
        <div className=" text-iwd-white text-[14px] lg:text-base 2xl:text-lg container pb-6">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Data;
