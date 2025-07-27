import SectionFour from "./Components/SectionFour";
import SectionOne from "./Components/SectionOne";
import SectionThree from "./Components/SectionThree";
import SectionTwo from "./Components/SectionTwo";
// import StatisticsButton from "./Components/StatisticsButton";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
        document.title = "الصفحة الرئيسية | معادن البركة";
  }, []);

  return (
    <>
      <SectionOne/>
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>
  );
}
