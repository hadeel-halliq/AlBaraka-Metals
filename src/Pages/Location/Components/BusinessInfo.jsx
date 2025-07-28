import InfoItem from "./InfoItem";

import manager from "../../../images/manager.png";
import phone from "../../../images/phone.png";
import time from "../../../images/time.png";
import locationIcon from "../../../images/locationIcon.png"


export default function BusinessInfo() {
  return (
    <div className="bg-backGroundColor mt-6 p-5 rounded-xl flex flex-col-reverse  lg:flex lg:flex-row lg:justify-between">
      <InfoItem 
        icon={time}
        title="ساعات العمل : "
        paragraph="8:00 صباحاً _ 4:00 مساً (الأحد-الخميس)"
      />
      <InfoItem 
        icon={phone}
        title="الهاتف : "
        paragraph="000 000 900 963+"
      />
      <InfoItem 
        icon={locationIcon}
        title="العنوان : "
        paragraph="حي السريان، شارع المكتب، حلب، سوريا"
      />
      <InfoItem 
        icon={manager}
        title="المدير : "
        paragraph="محمد محمد محمد"
      />
    </div>
  )
}
