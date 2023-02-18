const About = () => {
  return (
    <section className="about-cntnr w-screen flex flex-col sm:overflow-hidden justify-center items-center relative">
      {/* Divs Horizontally */}
      <img
        className="upper-border hidden sm:block absolute  sm:left-1/2 sm:top-10 sxm:top-2 lxm:top-10  2xl:hidden"
        src="\src\assets\About\upper-border-md.png"
        alt="upper border"
      />
      <img
        className="upper-border hidden 2xl:block absolute 2xl:left-1/2 2xl:top-10  "
        src="\src\assets\About\upper-border-lg.png"
        alt="down border"
      />

      <div className="flex flex-col items-center sm:w-full sm:flex-row">
        <div className="w-full px-[20px] sm:w-1/2 sm:order-3 sm:p-10 sm:pt-0 lg:pl-20">
          <h1 className="text-center p-3 sm:pt-8 sm:mt-10 md:mt-0 font-bold sm:order-1 text-[20px] md:text-[27px] 2xl:text-[40px]">
            What is WTM Algiers ?
          </h1>
          <p className="text-justify p-3 paragraph-sizing">
            Women Techmakers is a program created by Google, that encourages
            women to integrate, pursue, and outshine in technology careers
            through their Google Developers Groups communities dispersed
            worldwide. Women Techmakers Algiers (WTM Algiers) is part of this
            international community that helps empower and improve the
            enrollment of women in the STEM field.
          </p>
        </div>
        <img
          className="p-3 w-2/3 sm:w-1/2 sm:p-10 sm:items-end  sm:pb-0 lg:pr-20"
          src="\src\assets\About\about-upper-img.png"
          alt="upper border"
        />
      </div>

      <img
        className="about-element hidden sm:block sxm:hidden lxm:block absolute sm:insert-x-1/2 2xl:hidden"
        src="\src\assets\About\about-element-md.png"
        alt="shape"
      />
      <img
        className="about-element hidden 2xl:block pl-12 absolute 2xl:insert-x-1/2"
        src="\src\assets\About\about-element-lg.png"
        alt="shape"
      />

      <div className="flex flex-col items-center sm:w-full sm:flex-row">
        <div className="w-full px-[20px] sm:w-1/2 sm:p-10 sm:pt-0 lg:pr-20">
          <h1 className="text-center p-3 sm:pt-8 font-bold text-[20px] md:text-[27px] 2xl:text-[40px]">
            What is IWD?
          </h1>
          <p className="text-justify p-3 pb-0 paragraph-sizing">
            Iwd stands for international women's day, an annual event organized
            by all Women Techmakers chapters in the world to highlight the
            contributions of women in tech fields to educate and inspire our
            community.
          </p>
          <p className="text-justify p-3 pt-0 paragraph-sizing">
            Last year's theme was ‘progress not perfection’ but this year's is
            ‘DareToBe’ to celebrate the woman who challenges their fear to
            improve and demonstrate their existence in the STEM world.
          </p>
        </div>
        <img
          className="p-3 w-2/3 sm:w-1/2 sm:-mt-20 md:-mt-30 sm:items-start sm:p-10 sm:pt-0 lg:pl-20 "
          src="\src\assets\About\about-lower-img-md.png"
          alt="shape"
        />
      </div>
      <img
        className="hidden sm:block absolute sm:right-1/2 sm:-mr-5 sm:bottom-10 sxm:bottom-2 lxm:bottom-10 2xl:hidden"
        src="\src\assets\About\lower-border-md.png"
        alt="shape"
      />
      <img
        className="hidden 2xl:block absolute 2xl:right-1/2 2xl:-mr-5 2xl:bottom-10"
        src="\src\assets\About\lower-border-lg.png"
        alt="shape"
      />
    </section>
  );
};

export default About;
