import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { HiSearch } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const NavBar = () => {
  const [navOn, setNavOn] = useState(false);

  const handleClick = () => {
    setNavOn(!navOn);
  };

  return (
    <div className="py-3 2xl:px-10 xl:px-16 mt-0 bg-white sticky top-0 shadow-md">
      <div className="flex justify-between p-1 px-8 md:flex 2xl:w-3/5 2xl:mx-auto xl:w-9/12 xl:mx-auto lg:w-4/5 lg:mx-auto md:w-5/6 md:mx-auto lg:justify-between 2xl:justify-between md:justify-between items-center">
        <div className="flex md:hidden ">
          <HiSearch size={25} />
        </div>

        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li className="text-sm">Coins</li>
            <li className="text-sm">Exchanges</li>
            <li className="text-sm">Swap</li>
          </ul>
        </div>

        <div>
          <img
            src="/static/logo/black.svg"
            alt="coin-cap-svg"
            className="w-20"
          />
        </div>

        <div className="hidden md:flex space-x-10 items-center">
          <HiSearch />
          <IoMdSettings />
          <button className="bg-[#18C683] w-36 h-9 rounded-full text-white drop-shadow-xl text-sm font-bold">
            Connect Wallet
          </button>
        </div>
        <div
          className="md:hidden lg:hidden xl:hidden 2xl:hidden"
          onClick={handleClick}
        >
          {!navOn ? (
            <GiHamburgerMenu className="w-5" size={25} />
          ) : (
            <ImCross className="w-5" size={25} />
          )}
        </div>
      </div>

      <div className={!navOn ? "hidden" : "absolute grid-rows-2 w-52 h-screen"}>
        <div className="row-span-1">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="row-span-1">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
