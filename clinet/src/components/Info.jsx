import Logo from "../assets/images/Logo.png";
import {FaWhatsapp} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {IoLocationSharp} from "react-icons/io5";
import {FaTwitter} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";
import {PiPhonePauseLight} from "react-icons/pi";
import {CiMail} from "react-icons/ci";

const Info = () => {
  return (
    <div className="bg-black">
      <div className="container max-w-[1200px] mx-auto text-white py-[80px] px-4">
        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-6 items-center tracking-widest customOswaldFont">
          <div className="border text-neutral-600 border-white rounded-xl h-[140px] p-5 max-w-[330px] w-full flex flex-col justify-center items-center gap-1">
            <h2 className="text-[#0796EF] font-medium text-lg ">Connect With Us</h2>
            <div className="flex gap-2 items-center mt-2 font-medium">
              <a href="tel:+9196473524253" className="inline-flex gap-2 items-center">
                <PiPhonePauseLight /> +91 96473524253
              </a>
            </div>
            <div className="flex gap-2 items-center font-medium">
              <a href="mailto:info@deepNetSoft.com" className="inline-flex gap-2 items-center">
                <CiMail />
                info@deepNetSoft.com
              </a>
            </div>
          </div>

          <div className=" relative border border-white rounded-xl p-5 h-[140px] max-w-[330px] w-full ">
            <div className="absolute top-0 left-[50%]  translate-y-[-50%] translate-x-[-50%] bg-black ">
              <img src={Logo} alt="" />
            </div>
            <div className="flex justify-center items-center flex-col mt-10 gap-3">
              <div className="flex gap-3 text-2xl font-light tracking-widest	">
                <h1 className="text-[#0796EF] ">DEEP</h1>
                <h1>NET</h1>
                <h1 className="text-[#857878] ">SOFT</h1>
              </div>
              <div className="">
                <div className="flex gap-3 text-[14px] text-neutral-600">
                  <a href="">
                    <FaFacebookF />
                  </a>
                  <a href="">
                    <FaInstagram />
                  </a>
                  <a href="">
                    <FaWhatsapp />
                  </a>
                  <a href="">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border customOswaldFont text-neutral-600 border-white rounded-xl  p-5 max-w-[330px] h-[140px] w-full flex flex-col justify-center items-center gap-1">
            <h1 className="text-[#0796EF] font-medium text-lg ">FIND US</h1>
            <div className="flex gap-2 justify-center ">
              <IoLocationSharp size={30} />
              <p className="font-medium">First Floor, Geo Infopark, Infopark EXPY, Kakkanad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
