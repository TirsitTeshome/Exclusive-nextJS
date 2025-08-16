
// pages/index.tsx
import React from 'react';

type Product = {
  id: number;
  name: string;
  currentPrice: string;
  originalPrice: string;
  discount: string;
  rating: string;
  reviewCount: string;
};

export default function FlashSales() {
  const products: Product[] = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      currentPrice: "$120",
      originalPrice: "$160",
      discount: "40%",
      rating: "★★★★★",
      reviewCount: "(88)"
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      currentPrice: "$960",
      originalPrice: "$1160",
      discount: "35%",
      rating: "★★★★★",
      reviewCount: "(75)"
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      currentPrice: "$370",
      originalPrice: "$400",
      discount: "30%",
      rating: "★★★★★",
      reviewCount: "(99)"
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      currentPrice: "$375",
      originalPrice: "$400",
      discount: "25%",
      rating: "★★★★★",
      reviewCount: "(99)"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-30">
      {/* New Countdown Timer Section */}
      <div className="mb-10">
        <div className="text-sm text-gray-500 mb-2">Today's</div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Flash Sales</h1>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <div className="text-center">
              <div className="text-2xl font-bold">03</div>
              <div className="text-xs text-gray-500">Days</div>
            </div>
            <div className="text-2xl font-bold">:</div>
            <div className="text-center">
              <div className="text-2xl font-bold">23</div>
              <div className="text-xs text-gray-500">Hours</div>
            </div>
            <div className="text-2xl font-bold">:</div>
            <div className="text-center">
              <div className="text-2xl font-bold">19</div>
              <div className="text-xs text-gray-500">Minutes</div>
            </div>
            <div className="text-2xl font-bold">:</div>
            <div className="text-center">
              <div className="text-2xl font-bold">56</div>
              <div className="text-xs text-gray-500">Seconds</div>
            </div>
          </div>
        </div>
      </div>

      {/* Existing Discount Tags Section */}
      <div className="flex gap-4 mb-6">
        {products.map((product) => (
          <span 
            key={`discount-${product.id}`}
            className="bg-gray-100 px-4 py-2 rounded-md font-bold text-red-500"
          >
            {product.discount}
          </span>
        ))}
      </div>

      <div className="border-t border-gray-200 my-6"></div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-8">Add To Cart</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div 
            key={product.id}
            className="border border-gray-200 rounded-lg p-6 relative transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="absolute -top-2 -right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
              {product.discount} OFF
            </div>
            <h3 className="text-lg text-gray-900 my-4">{product.name}</h3>
            <div className="my-4">
              <span className="text-xl font-bold text-red-500 mr-2">{product.currentPrice}</span>
              <span className="text-gray-500 line-through">{product.originalPrice}</span>
            </div>
            <div className="text-yellow-400 my-4">
              {product.rating} {product.reviewCount}
            </div>
            <button className="w-full bg-gray-900 text-white py-3 rounded-md font-bold hover:bg-gray-700 transition-colors">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
