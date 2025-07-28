
import LocationCard from "./Components/LocationCard";

export default function Location() {
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
