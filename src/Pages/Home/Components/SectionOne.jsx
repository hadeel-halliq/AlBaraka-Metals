import Button from "../../../Components/Common/Button";
import StatisticsButton from "./StatisticsButton";

import ironFactory from "../../../images//ironFactory.png";

export default function SectionOne() {
  return (
  <div className="bg-backGroundColor pt-12 pb-20">
        <div className="container mx-auto px-15 flex flex-col items-center gap-7 md:flex md:flex-row justify-between">
          <img
            src={ironFactory}
            alt="ironFactory"
            className="w-[336px] lg:w-[480px] cursor-pointer"
          />
          <div
            className="flex flex-col  gap-6  items-center md:items-start "
            dir="rtl"
          >
            <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl">
              مرحبًا بكم في <span className="text-primary">شركة البركة</span>
            </h1>
            <div className="text-lg  text-[#5D5D5D]  lg:text-xl">
              <p>لصناعة البروفيلات والأنابيب المعدنية</p>
              <p>شركة رائدة في تصنيع الحديد بأحدث التقنيات</p>
            </div>
            <div className="flex gap-3">
              <Button buttonName="عرض المنتجات" buttonStyle="mainStyle" />
              <Button buttonName="اتصل بنا" buttonStyle="secondStyle" />
            </div>
            <div className="flex gap-3">
              <StatisticsButton
                paragraphOne="35 سنة"
                paragraphTwo="من الخبرة"
              />
              <StatisticsButton paragraphOne="+150" paragraphTwo="عميل دائم" />
              <StatisticsButton
                paragraphOne="+10.000"
                paragraphTwo="مشروع ناجح"
              />
            </div>
          </div>
        </div>
      </div>
  )
}
