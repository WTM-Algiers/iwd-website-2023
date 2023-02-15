import Container from "./container";
import BorderRight from "./BorderRight";
import BorderLeft from "./BorderLeft";
import img1 from "../../assets/PreviousEditions/img1.png";
import img2 from "../../assets/PreviousEditions/img2.png";
import img3 from "../../assets/PreviousEditions/img3.png";
import star from "../../assets/icons/star.png";

const PreviousEditions = () => {
  return (
    <section>
      <p className=" mt-14 text-[28px] lg:text-[48px] 2xl:text-[72px] text-center font-bold">Previous Editions</p>
      <div className=" relative bg-gradient-to-r from-iwd-blue to-iwd-purple w-full h-[1000px] 2xl:h-[400px] lg:h-[240px] mt-[52px]">
        <img
          className="absolute hidden lg:flex 2xl:flex lg:w-[136px] lg:h-[128.45px] w-[204px] h-[192.68px] -rotate-12 top-[-75px]"
          src={star}
        />
        <p className="text-iwd-white font-normal text-[32px] lg:text-[27px] 2xl:text-[40px] text-center px-10 py-24 lg:px-20 lg:py-10  2xl:px-[120px] 2xl:py-16 leading-[64px] lg:leading-10  2xl:leading-[60px]">
          International Women’s Day is WTM Algiers’ biggest event, besides many
          others and besides projects, our organizers always put their hearts
          and souls to deliver the best version of this event each, each year,
          better than the previous one. Let’s have a look back on how were few
          past editions!
        </p>
      </div>
      <BorderRight word={"IWD 20"}></BorderRight>

      <Container
        paragraph={
          "The third edition of International Women's Day (IWD20), which took place in March 2020 was a huge success. It was an opportunity for women interested in technology and development to meet, discuss and learn about innovation and new products through various conferences, workshops, and panels. However, the success of this edition is due to the Ideathon, in which they learned about an important subject which was “Women’s online safety” and brought together brilliant ideas to make the experience of women using the internet more comfortable and safer at the same time."}
        reverse={true}
        first={true}
        image={img1}
      ></Container>

      <BorderLeft word={"IWD 21"}></BorderLeft>

      <Container
        paragraph={`For its fourth edition, Women Techmakers Algiers has brought an innovative touch to the IWD 2021, whose duration has been for the first time spread over a week full of interesting talks which were held on our discord server in addition to the fruitful on-set workshop sessions that aims to give a new vision on contemporary technologies, it was a great chance to the female community interested in development and technology, to meet, train and debate on different subjects, as well as to discuss the news and technological innovations through the theme "Courage to create". `}
        reverse={false}
        first={false}
        image={img2}
      ></Container>

      <BorderRight word={"IWD 22"}></BorderRight>

      <Container
        paragraph={
          "For its fifth edition and during two weekends, Women Techmackers Algiers celebrated women in tech and STEM in general for their contributions and achievement under the theme “Progress not perfection “, the first weekend we had the chance to hold incredible talks and during the second weekend an impressive hackathon with general theme striving for well-being we were able to witness some excellent work done by the different teams"}
        reverse={true}
        first={false}
        image={img3}
      ></Container>

      <BorderLeft word={"IWD 23"}></BorderLeft>
    </section>
  );
};

export default PreviousEditions;
