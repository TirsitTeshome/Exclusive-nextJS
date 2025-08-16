

import Image from "next/image";

export default function SidebarVoucher() {
  const menuItems = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <div className="flex max-w-7xl mx-auto min-h-[380px] p-4">
      {/* Sidebar */}
      <aside className="min-w-[200px] border-r border-gray-200 pr-6">
        <ul className="space-y-4 text-lg font-poppins text-black">
          {menuItems.map((item, idx) => (
            <li key={idx} className="flex justify-between items-center cursor-pointer hover:font-semibold">
              <span>{item}</span>
              {(item === "Woman’s Fashion" || item === "Men’s Fashion") && <span>&gt;</span>}
            </li>
          ))}
        </ul>
      </aside>

      {/* Voucher Banner */}
      <section className="flex-1 bg-black rounded-lg relative flex items-center px-10">
        <div className="flex-1 text-white">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
              <svg fill="black" viewBox="0 0 24 24" width={20} height={20}>
                <path d="M17.7 13.5c-.1-2.1 1.6-3.1 1.7-3.2-.9-1.3-2.3-1.4-2.8-1.4-1.2-.1-2.4.7-3 .7-.6 0-1.5-.7-2.4-.7-1.2 0-2.3.7-2.9 1.8-1.2 2.1-.3 5.1.9 6.7.6.8 1.3 1.7 2.2 1.7.9 0 1.3-.5 2.4-.5s1.5.5 2.4.5c.9 0 1.5-.8 2.1-1.7.6-.8.8-1.6.8-1.7 0-.1-2.1-.8-2.2-3.1zm-2.7-6.2c.5-.6.9-1.4.8-2.2-.8.1-1.7.5-2.2 1.2-.5.6-.9 1.4-.8 2.1.8 0 1.7-.4 2.2-1.1z"/>
              </svg>
            </span>
            <span className="font-semibold">iPhone 14 Series</span>
          </div>
          <h2 className="text-5xl font-bold mb-4 leading-tight">Up to 10%<br />off Voucher</h2>
          <button className="underline text-white flex items-center gap-1 font-poppins text-lg">
            Shop Now <span className="ml-1">&#8594;</span>
          </button>
        </div>

        <div className="flex-1 flex justify-end items-center">
          <Image
            src="/phone.jpg"
            alt="iPhone 14 Series"
            width={300}
            height={220}
            priority
            className="object-contain"
          />
        </div>

        {/* Carousel dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
          <span className="w-3 h-3 rounded-full bg-pink-600"></span>
          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
        </div>
      </section>
    </div>
  );
}
