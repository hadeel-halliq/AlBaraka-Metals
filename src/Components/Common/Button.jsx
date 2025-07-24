export default function Button({ buttonName, buttonStyle, onClick, children }) {
  const baseStyle =
    "rounded-2xl px-3.5 py-2 font-bold leading-none cursor-pointer";

  const styleVariants = {
    mainStyle: "bg-primary text-white",
    secondStyle:
      "border border-primary bg-[linear-gradient(to_left,_var(--color-primary)_50%,_transparent_50%)] bg-[length:200%_100%] bg-[position:left_bottom]  transition-all duration-500  hover:bg-[position:right_bottom] ",
  };

  const resolvedStyle = `${baseStyle} ${styleVariants[buttonStyle]}`;
  return (
    <button onClick={onClick} className={resolvedStyle}>
      {children ? children : buttonName}
    </button>
  );
}
