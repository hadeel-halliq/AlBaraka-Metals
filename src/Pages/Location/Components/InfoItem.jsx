export default function InfoItem({ icon, title, paragraph }) {
  return (
    <div dir="rtl" className="mb-3 cursor-pointer">
      <div className="flex gap-2">
        <img src={icon} />
        <h2 >{title}</h2>
      </div>
      <p>{paragraph}</p>
    </div>
  );
}
