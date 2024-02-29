"use client";

import { cn } from "@/lib/utils";
import { La_Belle_Aurore } from "next/font/google";
import Link from "next/link";
import { BsBasket } from "react-icons/bs";
import { useSelector } from "react-redux";

const logoFont = La_Belle_Aurore({
  subsets: ["latin"],
  weight: ["400"],
});

const Header = () => {
  const cartItems = useSelector((state: CartItems) => state.cart);
  console.log(cartItems);
  const totalItems = cartItems.length > 9 ? "9+" : cartItems.length;

  return (
    <header className="h-20 flex items-center justify-between">
      <div>
        <Link
          href="/"
          className={cn("text-3xl text-neutral-600", logoFont.className)}
        >
          e-Commerce
        </Link>
      </div>

      <div className="bg-white shadow-sm px-5 py-2 rounded-full hidden lg:block">
        <div className="flex items-center space-x-3">
          <Link
            href="#login"
            className="text-sm font-bold text-gray-800 hover:text-rose-500 duration-300"
          >
            Login
          </Link>
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          <Link
            href="#register"
            className="text-sm font-semibold border-r-2 border-gray-300 text-gray-800 hover:text-rose-500 duration-300 pr-3"
          >
            Register
          </Link>

          <div className="relative">
            {cartItems.length > 0 && (
              <div className="bg-gradient-to-tr from-rose-500 to-rose-300 rounded-full w-5 h-5 flex items-center justify-center text-xs text-white absolute -top-3 left-2 opacity-85">
                {totalItems}
              </div>
            )}

            <Link href="/cart">
              <BsBasket className="w-5 h-5 text-gray-800 cursor-pointer hover:text-rose-500 duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
