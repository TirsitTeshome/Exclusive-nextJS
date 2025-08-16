"use client";
import { useState } from "react";
import {
  Mobile,
  Computer,
  CameraIcon,
  Game,
  EarPhoneIcon,
  AppleIcon,
  ArrowRightIcon,
} from "@/app/shared-components/Icons";
import { ArrowLeftIcon } from "@/app/shared-components/Icons";
export default function Category() {
  const categories = [
    { name: "Phones", icon: <Mobile /> },
    { name: "Computers", icon: <Computer /> },
    { name: "SmartWatch", icon: <AppleIcon /> },
    { name: "Camera", icon: <CameraIcon /> },
    { name: "HeadPhones", icon: <EarPhoneIcon /> },
    { name: "Gaming", icon: <Game /> },
  ];
  const [activeIndex, setActiveIndex] = useState(3);
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setActiveIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="">
      <div className="w-3/4 m-auto flex items-center gap-4 mb-35">
        {/* <div className="mb-10"><hr/></div> */}
        <div className="flex gap-8 overflow-x-auto no-scrollbar ">
          {categories.map((cat, index) => (
            <div
              key={cat.name}
              className={`rounded-sm flex flex-col items-center justify-center w-520 h-38 border-gray-500 border cursor-pointer transition-colors duration-200 font-poppins py-5
                ${
                  index === activeIndex
                    ? "bg-red-500 text-white border-0"
                    : "bg-white text-black hover:bg-red-500 hover:text-white hover:border-0"
                }
              `}
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
