import ContactCard from "./Components/ContactCard";

import locationIcon2 from "../../images/locationIcon2.png";
import phoneIcon from "../../images/phoneIcon.png";
import emailIcon from "../../images/emailIcon.png";
import EmailContactForm from "./Components/EmailContactForm";

import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "تواصل معنا | معادن البركة";
  }, []);

  return (
    <div className="bg-backGroundColor pb-20">
      <div className="container mx-auto px-10">
        <div className="grid gap-5 place-items-center grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
          <ContactCard
            icon={locationIcon2}
            title="زيارتنا"
            paragraph="يمكنك زيارتنا في مقرنا الرئيسي خلال أوقات العمل"
            linkText="عرض موقع على الخريطة"
          />
          <ContactCard
            icon={emailIcon}
            title="البريد الإلكتروني"
            paragraph="أرسل لنا رسالة وسنرد عليك في أسرع وقت ممكن"
            linkText="info@albarakametal.com"
          />
          <ContactCard
            icon={phoneIcon}
            title="اتصل بنا"
            paragraph="لدينا فريق دعم متاح خلال أوقات العمل الرسمية"
            linkText="+0963 900 000 000"
          />
        </div>
        <EmailContactForm />
      </div>
    </div>
  );
}
