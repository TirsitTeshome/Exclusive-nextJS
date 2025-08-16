"use client";
import { useState } from "react";
import {
  Mobile,
  Computer,
  CameraIcon,
  Game,
  EarPhoneIcon,
} from "@/app/shared-components/Icons";

export default function Category() {
  const categories = [
    { name: "Phones", icon: <Mobile /> },
    { name: "Computers", icon: <Computer /> },
    { name: "SmartWatch", icon: <CameraIcon /> },
    { name: "Camera", icon: <CameraIcon /> },
    { name: "HeadPhones", icon: <EarPhoneIcon /> },
    { name: "Gaming", icon: <Game /> },
  ];

  const [activeIndex, setActiveIndex] = useState(3);

  return (
    <div>
      <div className="w-3/4 mx-auto flex items-center gap-4 mb-9">
        <div className="flex gap-8 overflow-x-auto no-scrollbar">
          {categories.map((cat, index) => (
            <div
              key={cat.name}
              onClick={() => setActiveIndex(index)}
              className={`rounded-sm flex flex-col items-center justify-center w-[130px] h-[38px] border border-gray-500 cursor-pointer transition-colors duration-200 py-5 font-poppins ${
                activeIndex === index
                  ? "bg-red-500 text-white border-0"
                  : "bg-white text-black hover:bg-red-500 hover:text-white hover:border-0"
              }`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveIndex(index);
                }
              }}
            >
              {cat.icon}
              <span className="mt-2 text-sm font-medium">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
