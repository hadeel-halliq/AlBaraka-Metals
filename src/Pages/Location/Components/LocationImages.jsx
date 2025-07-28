export default function LocationImages({ imageOne, imageTwo }) {
  const imageStyle = "sm:w-[220px] md:w-[240px] lg:w-[360px]"
  return (
    <div className="w-full  flex flex-col-reverse items-center gap-10 md:flex md:flex-row justify-between mt-9">
      <img src={imageOne} className={`${imageStyle} cursor-pointer`}/>
      <img src={imageTwo} className={`${imageStyle} cursor-pointer`}/>
    </div>
    
  );
}
