export default function Button({ buttonName, buttonStyle, onClick, children }) {
  const baseStyle = "rounded-2xl px-3.5 py-2 font-bold leading-none cursor-pointer";
  const styleVariants = {
    mainStyle : "bg-primary text-white",
    secondStyle : "border border-primary"
  }

  const resolvedStyle = `${baseStyle} ${styleVariants[buttonStyle]}`
  return (
    <button onClick={onClick} className={resolvedStyle}>
      {children ? children : buttonName}
    </button>
  );
}
