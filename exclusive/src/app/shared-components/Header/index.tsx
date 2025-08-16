"use client";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

export default function TopNav() {
  return (
    <nav>
      <div className="flex justify-between items-center h-20 w-3/4 mx-auto">
        <div className="text-3xl font-bold font-poppins text-primary">Exclusive</div>

        <ul className="flex gap-10 font-poppins hover:text-secondary">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-secondary">
              Sign Up
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-6">
          <button
            aria-label="Search"
            className="hover:text-primary transition cursor-pointer md:flex gap-5 inline-flex items-center border-0 rounded-lg bg-gray-100 px-7 py-2"
          >
            <span className="font-light font-poppins text-sm text-gray-600">What are you looking for?</span>
            <AiOutlineSearch className="w-6 h-6" />
          </button>
          <button aria-label="Favorites" className="hover:text-primary transition cursor-pointer">
            <AiOutlineHeart className="w-6 h-6" />
          </button>
          <button aria-label="Cart" className="hover:text-primary transition cursor-pointer">
            <AiOutlineShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
