import React from "react";
import { GoTriangleLeft } from "react-icons/go";


const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#3F51B5] to-[#64B5F6] 2xl:h-48 xl:h-48 lg:h-64 md:h-64">
      <div className="flex justify-between items-center md:hidden bg-gradient-to-r from-[#3F51B5] to-[#64B5F6] h-11">
        <div className="text-white">Market Snapshot</div>
        <div><GoTriangleLeft/></div>
      </div>
      <div className="hidden md:block 2xl:w-3/4 2xl:mx-auto  xl:mx-30 xl:mx-auto xl:w-9/12 lg:w-4/5 lg:mx-auto md:w-11/12 md:mx-auto">
        <div className="grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 md:gap-y-5 pt-4 text-white 2xl:mx-40 xl:mx-38">
          <div className="text-center col-span-1">
            <h3 className="text-sm font-semibold">MARKET CAP</h3>
            <span className="text-2xl ">$1.16T</span>
          </div >
          <div className="text-center col-span-1">
            <h3 className="text-sm font-semibold">EXCHANGE VOL</h3>
            <span className="text-2xl">$56.23B</span>
          </div>
          <div className="text-center col-span-1">
            <h3 className="text-sm font-semibold">ASSETS</h3>
            <span className="text-2xl">2,295</span>
          </div>
          <div className="text-center col-span-1">
            <h3 className="text-sm font-semibold">EXCHANGES</h3>
            <span className="text-2xl">73</span>
          </div>
          <div className="text-center col-span-1">
            <h3 className="text-sm font-semibold">MARKETS</h3>
            <span className="text-2xl">13,975</span>
          </div>
          <div className="text-center col-span-1">
            <h3 className="text-sm font-semibold">BTC DOM INDEX</h3>
            <span className="text-2xl">32.1%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
