"use client";

interface ButtonProps {
  buttonText: string;
  variant: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

const Button = ({ buttonText, variant, onClick, icon }: ButtonProps) => {
  const variantSwitch = (variant: string) => {
    switch (variant) {
      case "primary":
        return "bg-red-500 text-white px-6 py-2 rounded-lg mb-8 hover:bg-red-600 transition";
      case "secondary":
        return "px-15 py-5 w-max bg-green-500 hover:bg-white hover:text-black text-xl rounded-md duration-300";
      case "ter":
        return "bg-red-500 font-lg text-white px-6 py-4 rounded-lg mb-8 hover:bg-red-600 transition";
      case "qua":
        return "flex items-center font-lg justify-center gap-2 border border-gray-300 rounded-md px-6 py-4 text-black hover:bg-gray-100 transition";
      default:
        return "border-gray text-white px-6 py-2 rounded-lg mb-8 hover:bg-red-600 transition";
    }
  };
  const variantClass = variantSwitch(variant);
  return (
    <button className={`${variantClass} cursor-pointer font-poppins`} onClick={onClick}>
      {icon && <span className="mr-2 flex items-center">{icon}</span>}
      {buttonText}
    </button>
  );
};

export default Button;
