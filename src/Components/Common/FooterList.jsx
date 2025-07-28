export default function FooterList({title, items}) {
  return (
    <div dir="rtl" className="flex flex-col gap-2 text-[rgba(64,69,74,1)] cursor-pointer">
       <h2 className="text-xs md:text-lg font-bold">{title}</h2>
       <ul className="font-medium text-xs md:text-lg flex flex-col gap-1">
            {items.map((item, index) => 
            <li key={index}>{item}</li>)
            }
       </ul>
    </div>
  )
}
