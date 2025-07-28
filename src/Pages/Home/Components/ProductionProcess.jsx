import Steps from "./Steps";

import icon1 from "../../../images/icon1.png";
import icon2 from "../../../images/icon2.png";
import icon3 from "../../../images/icon3.png";
import icon4 from "../../../images/icon4.png";
import logo from "../../../images/logo.jpg";

import ServicesCard from "./ServicesCard";
import Tittle from "./Tittle";
import Button from "../../../Components/Common/Button";

import { FaWhatsapp } from "react-icons/fa6";

export default function ProductionProcess() {
  return (
    <div className="bg-white py-7 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] ">
      <div className="container mx-auto px-10">
        <Tittle text="  مراحل التصنيع في شركة البركة" />
        <div className="flex flex-wrap-reverse items-center justify-evenly lg:justify-between">
          <div dir="rtl" className="flex flex-col gap-9">
            <Steps
              icon={icon1}
              header="التصميم المبدئي"
              paragraph="تصميم مخصص حسب متطلباتك بدقة متناهية باستخدام أحدث البرامج"
            />
            <Steps
              icon={icon2}
              header="مرحلة التصنيع"
              paragraph="أحدث الآلات لتنفيذ التصاميم بدقة"
            />
            <Steps
              icon={icon3}
              header="مراقبة الجودة"
              paragraph="فحص دقيق لكل مرحلة للتأكد من مطابقة أعلى معايير الجودة"
            />
            <Steps
              icon={icon4}
              header="التسليم النهائي"
              paragraph="تغليف وتوصيل المنتج مع ضمان"
            />
          </div>
          <ServicesCard
            image={logo}
            bigImage={true}
            header="شاهد كيف نصنع منتجاتنا"
            paragraph="فيديو توضيحي لمراحل التصنيع في مصانعنا المتطورة"
          />
        </div>
        <div className="text-center mt-2.5">
          <p className="my-5 font-medium">
            تواصل معنا عبر الواتساب لمعرفة التفاصيل والحصول على استشارة مجانية
          </p>
          <Button buttonStyle="mainStyle">
            <div className="flex gap-1">
              <p className="">تواصل الان</p>
              <FaWhatsapp />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
