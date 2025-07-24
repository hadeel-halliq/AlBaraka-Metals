import Button from "../../../Components/Common/Button";

import machin1 from "../../../images/machin1.png";
import machin2 from "../../../images/machin2.png";
import machin3 from "../../../images/machin3.png";

export default function SectionTwo() {
  return (
    <div className="bg-white py-7 shadow-[34px_0_13px_0_rgba(0,0,0,0.25)]">
      <div className="container mx-auto px-15 flex flex-col items-center gap-7 md:flex md:flex-row ">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
          <img
            src={machin1}
            alt="machin1"
            className="absolute bottom-1/6 left-1/2 transform -translate-x-1/2 z-20 w-[140px] sm:w-[180px] md:w-[230px]"
          />

          <img
            src={machin2}
            alt="machin2"
            className="absolute top-[100px] left-1/4 transform -translate-x-1/2 z-10 w-[140px] sm:w-[180px] md:w-[230px] "
          />

          <img
            src={machin3}
            alt="machin3"
            className="absolute top-[100px] right-1/4 transform translate-x-1/2 z-10 w-[140px] sm:w-[180px] md:w-[230px]"
          />
        </div>

        <div
          dir="rtl"
          className="w-[350px] sm:w-[500px]  md:w-[600px] lg:w-[700px] flex  flex-col gap-8 items-center md:items-start"
        >
          <h2 className="font-bold text-xl  sm:text-2xl lg:text-3xl">
            شركة البركة لصناعات الحديد:
          </h2>
          <p className="font-medium  md:text-sm  lg:text-lg ">
            رواد في تصنيع الحديد والهياكل المعدنية منذ عام 1985 نقدم حلولاً
            متكاملة تشمل التصميم والتنفيذ والتركيب جميع منتجاتنا تتميز بجودة
            معتمدة منتجاتنا تتوافق مع أعلى المعايير المحلية والدولية نمتلك طاقات
            إنتاجية ضخمة نلبي احتياجات المشاريع الكبرى بفضل خطوط إنتاج حديثة
          </p>
          <p className="font-medium text-lg">
            للطلب أو الاستفسار تواصل معنا عبر
          </p>
          <div className="flex gap-3">
            <Button buttonName="تواصل عبر الوتس اب" buttonStyle="mainStyle" />
            <Button buttonName="اتصل بنا" buttonStyle="secondStyle" />
          </div>
        </div>
      </div>
    </div>
  );
}
