import LocationImages from "./LocationImages";
import Title from "./Title";

import location1 from "../../../images/location1.png";
import location2 from "../../../images/location2.png";
import BusinessInfo from "./BusinessInfo";

export default function LocationCard({text}) {
  return (
    <div className="container  mx-auto mb-16 px-10 py-10 bg-white rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:shadow-[0_4px_4px_0_rgba(0,0,0,0.6)] transition duration-300 hover:-translate-y-2.5">
      <Title text={text}/>
      <LocationImages imageOne={location1} imageTwo={location2}/>
      <BusinessInfo/>
    </div>
  )
}
