import NavBar from "./NavBar";
import MainIcon from "../../images/MainIcon.png";

import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

export default function Header() {

    const [isOpen , setIsOpen] = useState(false);
    

    const handleClick = () =>  {
        setIsOpen((prev) => !prev)
    }
  return (
    <header className="bg-backGroundColor py-6">
      <div className="container px-7 py-1.5 flex flex-row-reverse md:flex-row justify-between items-center border border-primary rounded-2xl ">
        <img
          src={MainIcon}
          className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
        />
        <button onClick={handleClick} className="block text-2xl cursor-pointer md:hidden">
            {isOpen ? <IoCloseOutline/> : <HiOutlineBars3/>}
        </button>
        <NavBar isOpen={isOpen} onClick={handleClick}/>
      </div>
    </header>
  );
}
//             <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
//   {/* الصورة الرئيسية */}
//   <img
//     src={machin1}
//     alt="machin1"
//     className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20 w-[150px] sm:w-[200px] md:w-[250px]"
//   />

//   {/* الصورة الخلفية اليسار */}
//   <img
//     src={machin2}
//     alt="machin2"
//     className="absolute top-[100px] left-1/4 transform -translate-x-1/2 z-10 w-[130px] sm:w-[180px] md:w-[230px] opacity-90"
//   />

//   {/* الصورة الخلفية اليمين */}
//   <img
//     src={machin3}
//     alt="machin3"
//     className="absolute top-[100px] right-1/4 transform translate-x-1/2 z-10 w-[130px] sm:w-[180px] md:w-[230px] opacity-90"
//   />
// </div>