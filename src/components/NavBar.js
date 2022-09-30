import React from "react";
import { IoMdSettings } from "react-icons/io";
import { HiSearch } from "react-icons/hi";

const NavBar = () => {
  return (
    <div className="py-3 px-10  mt-0 bg-white sticky top-0">
      <div className="flex mx-48 justify-around items-center">
        <div>
          <ul className="flex space-x-4">
            <li className="text-sm">Coins</li>
            <li className="text-sm">Exchanges</li>
            <li className="text-sm">Swap</li>
          </ul>
        </div>

        <div>
          <img src="/static/logo/black.svg" alt="coin-cap-svg" className="w-20"/>
        </div>

        <div className="flex space-x-10 items-center">
          <HiSearch />
          <IoMdSettings />
          <button className="bg-[#18C683] w-36 h-9 rounded-full text-white drop-shadow-xl text-sm font-bold">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
