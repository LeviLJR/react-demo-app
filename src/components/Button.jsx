export function Button({
  children,
  onClick,
  variant = "default",
  className = "",
}) {
  const base =
    "px-4 h-10 text-sm rounded-lg transition focus:outline-none";

  const variants = {
    default: "border border-gray-500 text-gray-800 hover:bg-white",
    danger: "bg-red-500 text-white hover:bg-red-600",
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    ghost: "text-gray-600 hover:bg-gray-100",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
