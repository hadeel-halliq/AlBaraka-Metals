
import LocationCard from "./Components/LocationCard";
import { useEffect } from "react";

export default function Location() {

  useEffect(() => {
    document.title = "مراكز الشركة | معادن البركة";
  }, []);

  return (
    <div className="bg-backGroundColor pt-12 pb-20">
      <div className="container mx-auto px-10 ">
        <LocationCard text="المقر الرئيسي - حلب "/>
        <LocationCard text="المنشأة الصناعي - حلب"/>
        <LocationCard text="المنشأة الصناعي - حلب"/>
      </div>
    </div>
  );
}
