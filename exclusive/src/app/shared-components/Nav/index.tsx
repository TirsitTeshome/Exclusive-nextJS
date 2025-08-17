import { ChevronDownIcon } from "../Icons"

export default function Nav() {
    <header className="w-full sticky top-0 z-50 shadow-md bg-white">
        <div className="bg-black font-poppins text-white flex items-center justify-between px-6 py-4 m-0 text-sm  md:px-60 ">
            <span className="flex-1 text-center">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
                <a href="#" className="font-bold underline ml-2">
                    ShopNow
                </a>
            </span>
            <div className="flex items-center space-x-1">
                <span>English</span>
                <ChevronDownIcon className="w-4 h-4 text-white" />
            </div>
        </div>
    </header>
}