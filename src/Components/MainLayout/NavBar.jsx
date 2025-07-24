import { NavLink } from "react-router-dom";

import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHome } from "react-icons/ai";

import logo from "../../images/logo.jpg";

export default function NavBar({ isOpen, onClick }) {
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
      to: "/location",
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
        <div className="flex flex-col-reverse justify-center items-center gap-16 px-6 mt-7 ">
          {NavContent.map((item, index) => (
            <NavLink key={index} to={item.to} onClick={onClick} className="hover:underline underline-offset-8 hover:decoration-primary">
              <div className="flex items-center justify-end gap-2 text-lg font-bold  text-primary ">
                <p>{item.text}</p>
                {item.icon}
              </div>
            </NavLink>
          ))}
          <img
            src={logo}
            alt="MainIcon"
            className="w-[150px] h-[150px] rounded-3xl"
          />
        </div>
      </div>
      <nav className="hidden md:flex gap-5">
        {NavContent.map((item, index) => (
          <NavLink key={index} to={item.to}>
            <div className="flex items-center gap-1.5 text-lg font-bold">
              <p>{item.text}</p>
              {item.icon}
            </div>
          </NavLink>
        ))}
      </nav>
    </>
  );
}
