import cursor from "../../assets/Footer/cursor.png";
import fb from "../../assets/logos/facebook.png";
import insta from "../../assets/logos/instagram.png";
import linkedin from "../../assets/logos/linkedin.png";
import twitter from "../../assets/logos/twitter.png";
import GDGLogo from "../../assets/logos/gdg-algiers.png";
import WTMLogo from "../../assets/logos/wtm-algiers.png";

const Footer = () => {
  return (
    <section id="footer">
      <div className="flex flex-col items-center justify-end w-full lg:h-screen">
        <div className="flex items-center justify-center w-full font-bold text-[50px] p-12 mb-12  lg:text-[70px] lg:h-[30%] 2xl:h-[35%] text-iwd-white bg-grandient">
          <p
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="2000"
            className="text-center"
          >
            Still have a question ?
          </p>
        </div>

        <div className="footeranimation flex flex-col items-end mb-10 lg:mb-16 mt-3 space-y-0 relative">
          <p className="font-bold text-[30px] lg:text-[45px] px-8  ">
            {" "}
            Contact us{" "}
          </p>
          <img
            src={cursor}
            className="w-5 lg:w-8 absolute top-8 right-3 lg:top-10 lg:right-1 2xl:right-0 "
            alt="icon"
          />
        </div>

        <div className="grid grid-cols-2 gap-20 p-[2%] lg:flex lg:flex-row justify-center items-center lg:w-full lg:px-20 mb-[12%] lg:mb-16 lg:space-x-20 ">
          <a href="https://www.instagram.com/wtm_algiers/" target="_blank">
            <img
              src={insta}
              className="footer-social-icons hover:scale-110 "
              alt="WTM Algiers instagram"
            />
          </a>

          <a
            href="https://web.facebook.com/WomenTechmakersAlgiers"
            target="_blank"
          >
            <img
              src={fb}
              className="footer-social-icons"
              alt="WTM Algiers facebook"
            />
          </a>

          <a
            href="https://www.linkedin.com/company/wtm-algiers/"
            target="_blank"
          >
            <img
              src={linkedin}
              className="footer-social-icons"
              alt="WTM Algiers Linkedin"
            />
          </a>

          <a href="https://twitter.com/AlgiersWTM" target="_blank">
            <img
              src={twitter}
              className="footer-social-icons"
              alt="WTM Algiers Twitter"
            />
          </a>
        </div>

        <div className="flex flex-row justify-center gap-9 items-center border-t-2 border-iwd-gray border-opacity-30 w-full lg:justify-between py-[10%] px-2 lg:py-8 lg:px-24 2xl:py-12 ">
          <img
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="2000"
            src={WTMLogo}
            className="lg:p-1/3 w-[100px] h-[20px] lg:w-[170px] lg:h-[30px]"
            alt="WTM Algiers"
          />

          <p className="lg:p-1/3 text-[13px] lg:text-base 2xl:text-[20px]">
            © 2023 WTM Algiers All rights reserved
          </p>
          <img
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="2000"
            src={GDGLogo}
            className="lg:p-1/3 w-[90px] h-[15px] lg:w-[170px] lg:h-[22px]"
            alt="GDG Algiers"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
