import Button from "../../Components/Common/Button";
import ServicesCard from "./Components/ServicesCard";

import ironFactory from "../../images/ironFactory.png";
import machin1 from "../../images/machin1.png";
import machin2 from "../../images/machin2.png";
import machin3 from "../../images/machin3.png";
import iron1 from "../../images/iron1.png";
import iron2 from "../../images/iron2.png";
import iron3 from "../../images/iron3.png";

export default function Home() {
  return (
    <>
      {/* Section One */}
      <div className="bg-backGroundColor pt-12 pb-20">
        <div className=" container px-7 flex flex-col items-center gap-7 md:flex md:flex-row justify-between">
          <img
            src={ironFactory}
            alt="ironFactory"
            className="w-[21rem]  lg:w-[30rem]"
          />
          <div className="flex flex-col  gap-6" dir="rtl">
            <h1 className="font-bold text-3xl">
              مرحبًا بكم في <span className="text-primary">شركة البركة</span>
            </h1>
            <p className="text-[1.3rem] text-[#5D5D5D]">
              لصناعة البروفيلات والأنابيب المعدنية
            </p>
            <p className="text-[1.3rem] text-[#5D5D5D]">
              شركة رائدة في تصنيع الحديد بأحدث التقنيات
            </p>
            <div className="flex gap-3">
              <Button buttonName="عرض المنتجات" buttonStyle="mainStyle" />
              <Button buttonName="اتصل بنا" buttonStyle="secondStyle" />
            </div>
            <div className="flex gap-3">
              <Button buttonStyle="secondStyle">
                <p dir="rtl">35 سنة</p>
                <p>من الخبرة</p>
              </Button>
              <Button buttonStyle="secondStyle">
                <p>+150</p>
                <p>عميل دائم</p>
              </Button>
              <Button buttonStyle="secondStyle">
                <p>+10.000</p>
                <p>مشروع ناجح</p>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Two */}
      <div className="bg-white py-7 shadow-[34px_0_13px_0_rgba(0,0,0,0.25)]">
        <div className="container px-7 flex flex-col items-center gap-7 md:flex md:flex-row ">
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
            className="w-[350px] sm:w-[500px] md:w-[600px] lg:w-[700px] flex flex-col gap-8"
          >
            <h2 className="font-bold text-2xl">شركة البركة لصناعات الحديد:</h2>
            <p className="font-medium text-lg">
              رواد في تصنيع الحديد والهياكل المعدنية منذ عام 1985 نقدم حلولاً
              متكاملة تشمل التصميم والتنفيذ والتركيب جميع منتجاتنا تتميز بجودة
              معتمدة منتجاتنا تتوافق مع أعلى المعايير المحلية والدولية نمتلك
              طاقات إنتاجية ضخمة نلبي احتياجات المشاريع الكبرى بفضل خطوط إنتاج
              حديثة
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

      {/* Section Three */}
      <div className="bg-backGroundColor pt-12 pb-20">
        <h2 className="container px-7">خدماتنا</h2>
        <div className="container px-7  grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-11 justify-items-center">
          <ServicesCard
            image={iron3}
            header="تطعيج الحديد"
            paragraph="ثني وتشكيل الحديد حسب المقاسات المطلوبة بدقة عالية باستخدام مكابس هيدروليكية متطورة."
            buttonName="تطعيج الحديد"
          />
          <ServicesCard
            image={iron2}
            header="تطعيج الحديد"
            paragraph="ثني وتشكيل الحديد حسب المقاسات المطلوبة بدقة عالية باستخدام مكابس هيدروليكية متطورة."
            buttonName="تطعيج الحديد"
          />
          <ServicesCard
            image={iron1}
            header="تطعيج الحديد"
            paragraph="ثني وتشكيل الحديد حسب المقاسات المطلوبة بدقة عالية باستخدام مكابس هيدروليكية متطورة."
            buttonName="تطعيج الحديد"
          />
        </div>
      </div>
    </>
  );
}
