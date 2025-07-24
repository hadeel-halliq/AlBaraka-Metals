import ServicesCard from "./ServicesCard";

import iron1 from "../../../images/iron1.png";
import iron2 from "../../../images/iron2.png";
import iron3 from "../../../images/iron3.png";
import Tittle from "./Tittle";

export default function SectionThree() {
  return (
    <div className="bg-backGroundColor pt-12 pb-20">
      <div className="container mx-auto px-15">
        <Tittle text="خدماتنا" />
        {/* <div className="flex flex-wrap justify-between items-center"> */}
        <div className="flex flex-wrap justify-evenly lg:justify-between">
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
    </div>
  );
}
