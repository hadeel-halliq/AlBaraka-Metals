import LocationImages from "./LocationImages";
import Title from "./Title";

import location1 from "../../../images/location1.png";
import location2 from "../../../images/location2.png";

export default function LocationCard() {
  return (
    <div className="container mx-auto px-15 bg-white">
      <Title text="المنشأة الصناعي - حلب"/>
      <LocationImages imageOne={location1} imageTwo={location2}/>
      
    </div>
  )
}
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";