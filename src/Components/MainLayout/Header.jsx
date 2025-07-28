import NavBar from "./NavBar";
import MainIcon from "../../images/MainIcon.png";

import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="bg-backGroundColor py-6">
      <div className="container mx-auto px-10">
        <div className="py-1.5 px-3 flex flex-row-reverse md:flex-row justify-between items-center border border-primary rounded-2xl ">
          <img
            src={MainIcon}
            className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] cursor-pointer"
          />
          <button
            onClick={handleClick}
            className="block text-2xl cursor-pointer md:hidden"
          >
            {isOpen ? <IoCloseOutline /> : <HiOutlineBars3 />}
          </button>
          <NavBar isOpen={isOpen} onClick={handleClick} />
        </div>
      </div>
    </header>
  );
}
