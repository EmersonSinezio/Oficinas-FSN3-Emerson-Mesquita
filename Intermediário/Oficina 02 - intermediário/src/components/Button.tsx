interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  color?: "gray" | "orange" | "default";
  size?: "double";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color = "default",
  size,
  disabled = false,
}) => {
  const baseClasses = `
    flex items-center justify-center rounded-full h-16 font-medium text-xl
    transition-all duration-200 ease-in-out
    ${
      disabled
        ? "opacity-50 cursor-not-allowed"
        : "active:scale-95 hover:opacity-90"
    }
  `;

  const colorClasses = {
    default: "bg-gray-700 text-white",
    gray: "bg-gray-500 text-black",
    orange: "bg-orange-500 text-white",
  };

  const sizeClasses = size === "double" ? "col-span-2" : "";

  return (
    <button
      className={`${baseClasses} ${colorClasses[color]} ${sizeClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
