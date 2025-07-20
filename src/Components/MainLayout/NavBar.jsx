import { NavLink } from "react-router-dom";

import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHome } from "react-icons/ai";

import MainIcon from "../../images/MainIcon.png"

export default function NavBar({ isOpen, onClose }) {
  const NavContent = [
    {
      icon: <BsTelephone />,
      text: "تواصل معنا",
      to: "/contact",
    },
    {
      icon: <AiOutlineHome />,
      text: "منتجاتنا",
      to: "/products",
    },
    {
      icon: <CiLocationOn />,
      text: "موقع الشركة",
      to: "/site",
    },
    {
      icon: <AiOutlineHome />,
      text: "الصفحة الرئيسية",
      to: "/",
    },
  ];

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-secondary z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        
        <div className="flex flex-col-reverse justify-center items-center gap-16 px-6 mt-4">
          {NavContent.map((item, index) => (
            <NavLink key={index} to={item.to} onClick={onClose}>
              <div className="flex items-center justify-end gap-2 text-lg font-bold  text-primary">
                <p>{item.text}</p>
                {item.icon}
              </div>
            </NavLink>
          ))}
          <img src={MainIcon} alt="MainIcon" className="w-[150px] h-[150px]"/>
        </div>
      </div>
      <nav className="hidden md:flex gap-5">
        {NavContent.map((item, index) => (
          <NavLink key={index} to={item.to}>
            <div className="flex items-center text-xl font-bold">
              <p>{item.text}</p>
              {item.icon}
            </div>
          </NavLink>
        ))}
      </nav>
    </>
  );
}
