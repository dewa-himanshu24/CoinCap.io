import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { HiSearch } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaBitcoin } from "react-icons/fa";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { MdSwapCalls } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";

const NavBar = () => {
  const [navOn, setNavOn] = useState(false);

  const handleClick = () => {
    setNavOn(!navOn);
  };

  return (
    <div className="2xl:px-10 xl:px-16 mt-0 bg-white sticky top-0 shadow-md">
      <div className="flex justify-between px-8 md:flex 2xl:w-4/6 2xl:mx-auto xl:w-9/12 xl:mx-auto lg:w-4/5 lg:mx-auto md:w-5/6 md:mx-auto lg:justify-between 2xl:justify-between md:justify-between items-center">
        <div className="flex md:hidden ">
          <HiSearch size={25} />
        </div>

        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li className="text-sm hover:bg-gray-100 px-4 py-5 cursor-pointer">
              Coins
            </li>
            <li className="text-sm hover:bg-gray-100 px-4 py-5 cursor-pointer">
              Exchanges
            </li>
            <li className="text-sm hover:bg-gray-100 px-4 py-5 cursor-pointer">Swap</li>
          </ul>
        </div>

        <div className="px-4">
          <img
            src="/static/logo/black.svg"
            alt="coin-cap-svg"
            className="w-20 hover:bg-gray-100 py-3 cursor-pointer"
          />
        </div>

        <div className="hidden md:flex space-x-10 items-center cursor-pointer">
          <HiSearch />
          <IoMdSettings />
          <button className="bg-[#18C683] w-36 h-9 rounded-full text-white drop-shadow-xl text-sm font-bold hover:-translate-y-1 transition duration-300">
            Connect Wallet
          </button>
        </div>
        <div
          className="md:hidden lg:hidden xl:hidden 2xl:hidden"
          onClick={handleClick}
        >
          {navOn ? (
            <ImCross className="w-5" size={25} />
            ) : (
            <GiHamburgerMenu className="w-5" size={25} />
          )}
        </div>
      </div>

      <div
        className={
          navOn
          ? "left-0 top-0 md:hidden absolute flex flex-col bg-white w-44 h-screen translate-x-0 transition ease-in-out duration-300"
            : "left-0 top-0 -translate-x-full absolute transition ease-in-out duration-300"
        }
      >
        <div className="flex flex-col border-b-2 border-gray-300 ">
          <div className="flex flex-col items-center p-2">
            <FaBitcoin size={30} />
            <span>Coins</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <RiArrowLeftRightLine size={30} />
            <span>Exchanges</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <MdSwapCalls size={30} />
            <span>Swap</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <FaRegNewspaper size={30} />
            <span>API</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <IoMdSettings size={30} />
            <span>Setting</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <button className="bg-[#18C683] w-32 h-9 rounded-full text-white drop-shadow-xl text-sm font-bold hover:-translate-y-1 transition duration-300">
              Connect Wallet
            </button>
          </div>
        </div>
        <div className="">
          <div className="flex flex-row justify-between p-2">
            <div>USD</div>
            <GoTriangleDown/>
          </div>
          <div className="flex flex-row justify-between p-2">
            <div>English</div>
            <GoTriangleDown/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
