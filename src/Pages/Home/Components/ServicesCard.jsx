import Button from "../../../Components/Common/Button";

export default function ServicesCard({
  image,
  header,
  paragraph,
  buttonName,
  bigImage,
}) {
  return (
    <div
      dir="rtl"
      className={`bg-white h-fit w-full ${bigImage ? `max-w-[350px]` : `max-w-[300px]` } mb-[30px] rounded-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] cursor-pointer transition duration-300 hover:-translate-y-2.5 hover:shadow-[0_4px_4px_0_rgba(0,0,0,0.6)]`}
    >
     
        <img
          src={image}
          className={`mb-5 rounded-xl w-full`}
        />

      
      <div dir="rtl" className=" px-4 pb-5">
        <h2 className="font-bold text-lg mb-2">{header}</h2>
        <p className="mb-5">{paragraph}</p>
        {buttonName && (
          <Button buttonName={buttonName} buttonStyle="mainStyle" />
        )}
      </div>
    </div>
  );
}