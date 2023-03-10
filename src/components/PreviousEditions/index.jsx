import Container from "./container";
import BorderRight from "./BorderRight";
import BorderLeft from "./BorderLeft";
import img1 from "../../assets/PreviousEditions/img1.png";
import img2 from "../../assets/PreviousEditions/img2.png";
import img3 from "../../assets/PreviousEditions/img3.png";
import star from "../../assets/icons/star.png";

const PreviousEditions = () => {
  return (
    <section id="previous">
      <p className=" mt-14 text-[28px] lg:text-[48px] 2xl:text-[72px] text-center font-bold">
        Previous Editions
      </p>
      <div className="relative bg-grandient w-full mt-[52px]">
        <img
          className="absolute hidden lg:flex 2xl:flex lg:w-[136px] lg:h-[128.45px] w-[204px] h-[192.68px] -rotate-12 top-[-75px]"
          src={star}
        />
        <p className="text-iwd-white font-normal text-[27px] 2xl:text-[40px] text-center px-10 py-24 lg:px-20 lg:py-10 2xl:px-[120px] 2xl:py-16 leading-[64px] lg:leading-10  2xl:leading-[60px]">
          International Women’s Day is WTM Algiers’ biggest event, besides many
          others and besides projects, our organizers always put their hearts
          and souls to deliver the best version of this event, each year, better
          than the previous one. Let’s have a look back on how were few past
          editions!
        </p>
      </div>
      <BorderRight word={"IWD 20"} />

      <Container
        paragraph={
          "In its third edition, IWD20 took place in March 2020 and was an absolute success. It was an opportunity for women interested in technology and development to meet, discuss and learn about innovation and new products through various conferences, workshops, and panels. However, the success of this edition is due to the Ideathon, in which they learned about an important subject “Women’s online safety”, and brought together brilliant ideas to make the women's experience using the internet safer and more comfortable."
        }
        reverse={true}
        first={true}
        image={img1}
      />

      <BorderLeft word={"IWD 21"} />

      <Container
        paragraph={`For its fourth edition, Women Techmakers Algiers has brought an innovative touch to the IWD 2021, whose duration has been for the first time spread over a week full of intriguing talks. In addition to a fruitful weekend, marked by a set of in-person workshops, aiming to give a new vision on contemporary technologies. It was a golden opportunity to meet, debate on different subjects, and acquire the "Courage to Create" new memories, skills, and connection.`}
        reverse={false}
        first={false}
        image={img2}
      />

      <BorderRight word={"IWD 22"} />
      <Container
        paragraph={
          "For its fifth edition and during two weekends, Women Techmackers Algiers celebrated women in tech and STEM in general for their contributions and achievement under the theme “Progress not Perfection “. The first weekend we had the chance to hold incredible talks and during the second weekend an impressive hackathon holding the theme of 'Striving for Well-being' we were able to witness some excellent work done by the brilliant teams."
        }
        reverse={true}
        first={false}
        image={img3}
      />

      <BorderLeft word={"IWD 23"} />
      <div className="mt-[50px] lg:mt-[100px] flex items-center justify-center w-full font-bold p-12 mb-12 text-[56px] lg:text-[85px] 2xl:text-[128px] lg:h-[30%] 2xl:h-[35%] text-iwd-white bg-grandient relative">
        <p className="text-center">Dare To Be Part Of It!</p>
        <img
          src={star}
          alt="shape"
          className="hidden lg:block absolute -right-20 -top-36 h-[200px] w-[200px] 2xl:h-[300px] 2xl:w-[300px] 2xl:-right-28"
        />
      </div>
    </section>
  );
};

export default PreviousEditions;
