"use client";
import React, { useState } from "react";
import { ChevronDownIcon, HeartIcon, SearchIcon, CartIcon } from "../Icons/index";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // For demonstration, just alert the query. Replace this with your search logic.
    alert(`Searching for: ${searchQuery}`);
    // You can also clear input or do navigation here
    // setSearchQuery("");
  };

  return (
    <header className="w-full sticky top-0 z-50 shadow-md bg-white">
      <div className="text-white bg-black  text-s font-poppins flex gap-5 items-center py-3">
        <span className="mx-auto">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <a href="#" className=" px-3 underline font-bold ">
            ShopNow
          </a>
        </span>
        <button
          type="button"
          className="flex  items-center gap-3 cursor-pointer select-none"
          aria-label="Select Language"
        >
          English <ChevronDownIcon className="w-4 h-4" />
        </button>
      </div>
      <nav>
        <div className="">
          <div className="flex justify-between items-center h-25 w-3/4 mx-auto">
            <div className="f text-3xl font-bold font-poppins text-primary">
              Exclusive
            </div>
            <ul className="flex gap-10 font-poppins">
              <li>
                <a href="#" className="hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Sign Up
                </a>
              </li>
            </ul>
            <div className="hidden md:flex items-center space-x-6 ">
              <form
                onSubmit={handleSearchSubmit}
                className="flex gap-3 items-center border-0 rounded-lg bg-gray-100 px-4 py-2 cursor-pointer"
                aria-label="Search form"
              >
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="font-light font-poppins text-sm text-gray-600 bg-transparent focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="inline-flex items-center justify-center text-gray-600 hover:text-primary"
                >
                  <SearchIcon className="w-6 h-6" />
                </button>
              </form>
              <button aria-label="Favorites" className="hover:text-primary transition cursor-pointer">
                <HeartIcon className="w-6 h-6" />
              </button>
              <button aria-label="Cart" className="hover:text-primary transition cursor-pointer">
                <CartIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
