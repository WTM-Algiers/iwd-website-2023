import { useState, useEffect } from "react";
import CounterCard from "./CounterCard";
import getRemainingTime from "../../utils/countDownTimer";
const CounterContainer = ({ countDownLimit }) => {
  const defaultRemainingTime = {
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  };
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
  const updateRemainingTime = (countdown) => {
    setRemainingTime(getRemainingTime(countdown));
  };
  useEffect(() => {
    const timer = setInterval(() => {
      updateRemainingTime(countDownLimit);
    }, 1000);

    return () => clearInterval(timer);
  }, [countDownLimit]);
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-2 p-[2%] place-items-center md:flex md:flex-row md:justify-center md:items-center md:w-full md:px-20 mb-[12%] md:mb-16 md:space-x-20 w-full mt-8 space-y-5">
        <CounterCard time="Days" timeLeft={remainingTime.days}/>
        <CounterCard time="Hours" timeLeft={remainingTime.hours}/>
        <CounterCard time="Minutes" timeLeft={remainingTime.minutes}/>
        <CounterCard time="Seconds" timeLeft={remainingTime.seconds}/>
      </div>
    </div>
  );
};

export default CounterContainer;
