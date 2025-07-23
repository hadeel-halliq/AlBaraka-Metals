import Button from "../../../Components/Common/Button";

export default function ServicesCard({ image, header, paragraph, buttonName }) {
  return (
    <div dir="rtl" className="bg-white w-full max-w-[300px] rounded-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
      <img src={image} className="mb-5" />
      <div dir="rtl" className=" px-4 pb-5">
        <h2 className="font-bold text-lg mb-2">{header}</h2>
        <p className="mb-5">{paragraph}</p>
        <Button buttonName={buttonName} buttonStyle="mainStyle" />
      </div>
    </div>
  )
}

