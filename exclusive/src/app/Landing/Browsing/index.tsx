
// // components/CategoryBrowser.jsx
// "use client";
// import { useState } from "react";
// import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
// import { FaMobileAlt, FaDesktop, FaCamera, FaHeadphones, FaGamepad } from "react-icons/fa";
// import { MdWatch } from "react-icons/md";

// export default function CategoryBrowser() {
//   const categories = [
//     { name: "Phones", icon: <FaMobileAlt size={30} /> },
//     { name: "Computers", icon: <FaDesktop size={30} /> },
//     { name: "SmartWatch", icon: <MdWatch size={30} /> },
//     { name: "Camera", icon: <FaCamera size={30} /> },
//     { name: "HeadPhones", icon: <FaHeadphones size={30} /> },
//     { name: "Gaming", icon: <FaGamepad size={30} /> },
//   ];

//   const [activeIndex, setActiveIndex] = useState(3); // Default Camera selected

//   const handlePrev = () => {
//     setActiveIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="flex flex-col items-center py-10">
//       {/* Button */}
//       <button className="bg-red-500 text-white px-6 py-2 rounded-lg mb-8 hover:bg-red-600 transition">
//         View All Products
//       </button>

//       {/* Title */}
//       <div className="w-full max-w-4xl">
//         <p className="text-red-500 font-semibold">Categories</p>
//         <h2 className="text-3xl font-bold mb-6">Browse By Category</h2>

//         {/* Categories */}
//         <div className="flex items-center gap-4">
//           {/* Left Arrow */}
//           <button
//             className="p-2 rounded-full border hover:bg-gray-100"
//             onClick={handlePrev}
//           >
//             <FiArrowLeft size={20} />
//           </button>

//           {/* Category Items */}
//           <div className="flex gap-4 overflow-x-auto no-scrollbar">
//             {categories.map((cat, index) => (
//               <div
//                 key={cat.name}
//                 className={`flex flex-col items-center justify-center w-32 h-28 border rounded-lg cursor-pointer transition-colors duration-300
//                   ${
//                     activeIndex === index
//                       ? "bg-white text-black  hover:bg-red-500 hover:text-white"
//                       : "bg-white text-black hover:bg-red-500 hover:text-white"
//                   }`}
//                 onClick={() => setActiveIndex(index)}
//               >
//                 {cat.icon}
//                 <span className="mt-2 text-sm font-medium">{cat.name}</span>
//               </div>
//             ))}
//           </div>

//           {/* Right Arrow */}
//           <button
//             className="p-2 rounded-full border hover:bg-gray-100"
//             onClick={handleNext}
//           >
//             <FiArrowRight size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";

// --------- Data & Constants ----------
const CATEGORIES = [
  {
    key: "phones",
    label: "Phones",
    icon: (
      <svg width="40" height="40" stroke="currentColor" fill="none" viewBox="0 0 40 40">
        <rect x="14" y="8" width="12" height="24" rx="3" strokeWidth="2" />
        <rect x="19" y="28" width="2" height="2" rx="1" />
      </svg>
    ),
  },
  {
    key: "computers",
    label: "Computers",
    icon: (
      <svg width="40" height="40" stroke="currentColor" fill="none" viewBox="0 0 40 40">
        <rect x="8" y="14" width="24" height="14" rx="2" strokeWidth="2" />
        <rect x="14" y="28" width="12" height="2" rx="1" />
      </svg>
    ),
  },
  {
    key: "smartwatch",
    label: "SmartWatch",
    icon: (
      <svg width="40" height="40" stroke="currentColor" fill="none" viewBox="0 0 40 40">
        <rect x="14" y="14" width="12" height="12" rx="6" strokeWidth="2" />
        <rect x="18" y="8" width="4" height="6" rx="2" />
        <rect x="18" y="26" width="4" height="6" rx="2" />
      </svg>
    ),
  },
  {
    key: "camera",
    label: "Camera",
    icon: (
      <svg width="40" height="40" stroke="currentColor" fill="none" viewBox="0 0 40 40">
        <rect x="8" y="16" width="24" height="14" rx="2" strokeWidth="2" />
        <circle cx="20" cy="23" r="5" strokeWidth="2" />
      </svg>
    ),
  },
  {
    key: "headphones",
    label: "HeadPhones",
    icon: (
      <svg width="40" height="40" stroke="currentColor" fill="none" viewBox="0 0 40 40">
        <path d="M10 26v-4a10 10 0 1 1 20 0v4" strokeWidth="2" />
        <rect x="8" y="22" width="4" height="8" rx="2" />
        <rect x="28" y="22" width="4" height="8" rx="2" />
      </svg>
    ),
  },
  {
    key: "gaming",
    label: "Gaming",
    icon: (
      <svg width="40" height="40" stroke="currentColor" fill="none" viewBox="0 0 40 40">
        <rect x="10" y="16" width="20" height="12" rx="3" strokeWidth="2" />
        <rect x="17" y="22" width="2" height="2" rx="1" />
        <rect x="21" y="22" width="2" height="2" rx="1" />
        <rect x="19" y="24" width="2" height="2" rx="1" />
      </svg>
    ),
  },
];

const PINK = "#EA4C89";

// ---------- Component ----------
const BrowseCategories: React.FC = () => {
  const [active, setActive] = useState("camera");

  return (
    <div
      style={{
        padding: "48px 0 0 0",
        maxWidth: 1100,
        margin: "0 auto",
        minHeight: "90vh",
      }}
    >
      {/* Top Button */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 44 }}>
        <button
          style={{
            background: PINK,
            border: "none",
            borderRadius: 6,
            color: "#fff",
            fontWeight: 600,
            fontSize: 18,
            padding: "14px 42px",
            cursor: "pointer",
            boxShadow: "0 2px 10px 0 rgba(234,76,137,0.07)",
          }}
        >
          View All Products
        </button>
      </div>
      {/* Category Section */}
      <div style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
        <span
          style={{
            display: "inline-block",
            width: 16,
            height: 16,
            background: PINK,
            borderRadius: 4,
          }}
        />
        <span
          style={{
            color: PINK,
            fontWeight: 500,
            fontSize: 16,
            letterSpacing: 1,
          }}
        >
          Categories
        </span>
      </div>
      <h2
        style={{
          fontSize: 32,
          fontWeight: 700,
          letterSpacing: "0.02em",
          marginBottom: 24,
        }}
      >
        Browse By Category
      </h2>
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        {/* Left Arrow */}
        <button
          style={{
            background: "#fafafa",
            border: "none",
            borderRadius: "50%",
            width: 44,
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 8,
            fontSize: 22,
            color: "#222",
            cursor: "pointer",
            boxShadow: "0 1px 4px #eee",
          }}
          aria-label="scroll left"
        >
          &#8592;
        </button>
        <div style={{ display: "flex", gap: 24 }}>
          {CATEGORIES.map((cat) => {
            const isActive = active === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActive(cat.key)}
                style={{
                  width: 160,
                  height: 170,
                  borderRadius: 12,
                  border: isActive ? `2px solid ${PINK}` : "2px solid #D0D0D0",
                  background: isActive ? PINK : "#fff",
                  color: isActive ? "#fff" : "#222",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 500,
                  fontSize: 19,
                  cursor: "pointer",
                  boxShadow: isActive ? "0 2px 14px 0 rgba(234,76,137,0.07)" : "none",
                  transition:
                    "border 0.15s, background 0.15s, color 0.15s, box-shadow 0.2s",
                  outline: isActive ? "none" : undefined,
                  position: "relative",
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.border = `2px solid ${PINK}`;
                    e.currentTarget.style.background = "#fff0f6";
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.border = "2px solid #D0D0D0";
                    e.currentTarget.style.background = "#fff";
                  }
                }}
              >
                <span
                  style={{
                    color: isActive ? "#fff" : "#333",
                    marginBottom: 16,
                  }}
                >
                  {cat.icon}
                </span>
                <span
                  style={{
                    color: isActive ? "#fff" : "#121212",
                    fontSize: 17,
                    fontWeight: 500,
                  }}
                >
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>
        {/* Right Arrow */}
        <button
          style={{
            background: "#fafafa",
            border: "none",
            borderRadius: "50%",
            width: 44,
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 8,
            fontSize: 22,
            color: "#222",
            cursor: "pointer",
            boxShadow: "0 1px 4px #eee",
          }}
          aria-label="scroll right"
        >
          &#8594;
        </button>
      </div>
      {/* Line below */}
      <div style={{ height: 1, background: "#eee", marginTop: 44 }} />
    </div>
  );
};

export default BrowseCategories;
