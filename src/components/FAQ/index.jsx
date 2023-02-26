import Data from "./Data";
import icon from "../../assets/FAQ/title-icon.png";
import questions from "./faqs";
const FAQ = () => {
  return (
    <section className="w-full grid place-items-center my-[50px]" id="faq">
      <div>
        <img
          className="w-[23px] h-[22px] ml-[40px] lg:w-[71px] lg:h-[68px] lg:ml-[90px] 2xl:w-[108px] 2xl:h-[102px] 2xl:ml-[150px]"
          src={icon}
        />

        <h1 className="text-[28px] lg:text-5xl font-bold align-center 2xl:text-[72px]">
          FAQs
        </h1>
      </div>

      <div className="mt-[50px] mb-[70px] container">
        {questions.map((question, idx) => (
          <Data
            key={idx}
            question={question.qst}
            answer={question.answer}
            i={idx + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
