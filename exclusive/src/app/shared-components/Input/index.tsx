"use client";

import React, { FC, ElementType, ChangeEvent } from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  variant?: string;
  Icon?: ElementType;
  onIconClick?: () => void;
}

const Input: FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  className = "",
  variant,
  Icon,
  onIconClick,
}) => {
  const variantSwitch = (variant?: string) => {
    switch (variant) {
      case "default":
        return "w-full border-b-2 border-gray-400 py-1 px-0 mb-5 focus:outline-none focus:border-black";
      default:
        return "w-full border-b-2 border-gray-400 py-1 px-0 mb-4 focus:outline-none focus:border-black";
    }
  };

  const variantClass = variantSwitch(variant);

  return (
    <div className={`flex font-poppins items-center py-2 ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${variantClass}`}
      />
      {Icon && (
        <button
          type="button"
          aria-label="icon button"
          onClick={onIconClick}
          className="focus:outline-none focus:border-gray-800 focus:ring-0 border-none p-0 cursor-pointer"
        >
          <Icon />
        </button>
      )}
    </div>
  );
};

export default Input;
