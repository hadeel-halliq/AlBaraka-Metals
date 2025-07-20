import { NavLink } from "react-router-dom";

import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHome } from "react-icons/ai";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">
        <div>
            <AiOutlineHome/>
            <p>الصفحة الرئيسية</p>
        </div>
      </NavLink>
      <NavLink to="/site">
        <div>
            <CiLocationOn/>
            <p>موقع الشركة</p>
        </div>
      </NavLink>
      <NavLink to="/products">
        <div>
            <AiOutlineHome/>
            <p>منتجاتنا</p>
        </div>
      </NavLink>
      <NavLink to="/contact">
        <div>
            <BsTelephone/>
            <p>تواصل معنا</p>
        </div>
      </NavLink>
    </nav>
  )
}
