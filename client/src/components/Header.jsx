import Logo from "../assets/images/Logo.png";
import {FaBars} from "react-icons/fa";
import {useEffect, useState} from "react";
import AOS from "aos";

import {IoCloseOutline} from "react-icons/io5";
import FormComponent from "./FormComponent";
// import CreateMenuItem from "../../Modals/MenuModals/CreateMenuItem";

const Header = () => {
  const [isAddModal, setisAddModal] = useState(false);
  const [isMenuopen, setisMenuopen] = useState(false);

  const handleModalOpen = () => {
    setisAddModal(true);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="bg-[#121618] z-40">
        <div className="container max-w-[1200px] max-h-[60px] md:max-h-[100px] mx-auto text-white flex justify-between items-center md:items-baseline pb-1 px-2">
          <div
            data-aos="fade-up"
            className="relative top-[35px] md:top-[50px] left-[50%] translate-x-[-50%] md:left-0 md:translate-x-0"
          >
            <div className="flex gap-1">
              <img className="w-[80px] md:w-[90px] h-fit" src={Logo} alt="Logo" />
              <div className=" hidden text-3xl mt-2 md:block">
                <div className="flex gap-1">
                  <h1 className="text-[#0796EF]">DEEP</h1>
                  <h1 data-aos="fade-up">NET</h1>
                </div>
                <div>
                  <h1 className="text-[#857878]">SOFT</h1>
                </div>
              </div>
            </div>
          </div>

          {!isMenuopen ? (
            <button className="block md:hidden text-neutral-500 p-2" onClick={() => setisMenuopen(true)}>
              <FaBars size={28} />
            </button>
          ) : (
            <div className="fixed inset-0 z-50 flex md:hidden">
              <div className="w-[25%] h-full bg-transparent" onClick={() => setisMenuopen(false)}></div>
              <div
                className={`w-[75%] h-full bg-[#121618] p-4 relative transition-transform duration-300 ease-in-out ${
                  isMenuopen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <button
                  className="absolute top-2 right-2 border border-white text-neutral-500 rounded-2xl"
                  onClick={() => setisMenuopen(false)}
                >
                  <IoCloseOutline size={30} />
                </button>
                <div className="mt-10 text-white text-center">
                  <p className="text-lg mb-3">HOME</p>
                  <p className="text-lg mb-3">MENU</p>
                  <p className="text-lg mb-3" onClick={handleModalOpen}>
                    CREATE NEW
                  </p>
                  <p className="text-lg">CONTACT US</p>
                </div>
              </div>
            </div>
          )}

          <div className="hidden z-50 md:flex text-base tracking-widest gap-[33px] justify-center items-center">
            <p>HOME</p>
            <p>MENU</p>
            <p onClick={handleModalOpen}>CREATE NEW</p>
            <p>CONTACT US</p>
          </div>
        </div>
      </div>

      {isAddModal && <FormComponent isOpen={isAddModal} onClose={() => setisAddModal(false)} />}
    </>
  );
};

export default Header;
