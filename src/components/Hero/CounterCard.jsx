const CounterCard = ({ time, timeLeft }) => {
  return (
    <div className="bg-[url('./assets/Hero/countDown-img.png')] w-[28vw] aspect-[1.29] bg-cover flex flex-col justify-center items-center lg:w-[15vw]">
      <div className="lg:text-2xl 2xl:text-5xl mb-4 2xl:mb-8">{timeLeft}</div>
      <div className="font-bold lg:text-[21px] 2xl:text-4xl">{time}</div>
    </div>
  );
};

export default CounterCard;
