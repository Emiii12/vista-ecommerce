"use client";
import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ChevronDownIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const Navbar: React.FC = () => {
  return (
    <>
      <header
        className={`fixed top-0 flex h-[70px] w-full bg-gray-900 duration-00 border-b-2 border-[#121212] `}
        style={{ zIndex: 999 }}
      >
        <div className="mx-12 flex w-full items-center justify-between">
          <div className=" flex items-center max-xl:w-[180px]">
            <h1 className="text-2xl text-white font-bold">YourClothes.<span className="text-blue-700">com</span></h1>
          </div>
          <nav className="flex justify-center items-center">
            <ul className="flex gap-16 text-txtWhite font-maven">
              <li className="flex">
                <Link
                  href={"/"}
                  className={`text-base transition-colors duration-100 hover:text-slate-300 hover:font-medium flex gap-2 items-center`}
                >
                  Productos
                  <ChevronDownIcon className="w-4 h-4" />
                </Link>
              </li>
              <li className="">
                <Link
                  href={"/"}
                  className={`text-base transition-colors duration-100 hover:text-slate-300 hover:font-medium text-blue-500`}
                >
                  Hombre
                </Link>
              </li>
              <li className="">
                <Link
                  href={"/"}
                  className={`text-base transition-colors duration-100 hover:text-slate-300 hover:font-medium`}
                >
                  Mujer
                </Link>
              </li>
              <li className="">
                <Link
                  href={"/"}
                  className={`text-base transition-colors duration-100 hover:text-slate-300 hover:font-medium`}
                >
                  Niño  
                </Link>
              </li>
              <li className="">
                <Link
                  href={"/"}
                  className={`text-base transition-colors duration-100 hover:text-slate-300 hover:font-medium`}
                >
                  <ShoppingCartIcon className="w-5 h-5 text-white" />
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-2 text-txtWhite font-maven">
            <UserCircleIcon className="w-10 h-10 text-white" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;