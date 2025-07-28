import FooterList from "../Common/FooterList";
import logo from "../../images/logo.jpg";

export default function Footer() {
  return (
    <div className="container mx-auto px-10 border-t border-t-primary">
      <div className="flex justify-between items-center ">
        <FooterList
          title="روابط سريعة"
          items={["الصفحة الرئيسية", "منتجاتنا", "موقع الشركة"]}
        />
        <FooterList
          title="خدماتنا"
          items={["تطعيج حديد", "سحب بواري", "صفائح حديد"]}
        />
        <FooterList
          title="للتواصل معنا"
          items={["الصفحة الرئيسية", "منتجاتنا", "موقع الشركة"]}
        />
        <div className="w-[180px] sm:w-[260px] flex flex-col items-center p-2.5">
          <img src={logo} className="w-[100px] md:w-[200px] cursor-pointer rounded" />
          <p dir="rtl" className="text-center text-xs sm:text-sm ">
            نحن رواد في مجال الصناعات المعدنية منذ أكثر من 25 عاماً نقدم منتجات
            عالية الجودة بأسعار تنافسية.
          </p>
        </div>
      </div>
    </div>
  );
}
