import React, { useState } from "react";
import { GoTriangleLeft, GoTriangleDown } from "react-icons/go";
import { useSelector } from "react-redux";



const Header = () => {
  const darkModeStatus = useSelector(state => state.darkMode.darkModeStatus);
  const [mobileHeaderListOn, setMobileHeaderListOn] = useState(false);

  const handleClick = () => {
    setMobileHeaderListOn(!mobileHeaderListOn);
  };

  return (
    <div className={`${darkModeStatus ? "bg-[#424242]": "bg-gradient-to-r from-[#3F51B5] to-[#64B5F6]"} 2xl:h-48 xl:h-48 lg:h-64 md:h-64`}>
      <div className={`flex justify-between px-2 items-center md:hidden ${darkModeStatus ? "bg-[#424242]" : "bg-gradient-to-r from-[#3F51B5] to-[#64B5F6]"} h-11`}>
        <div className="text-white">Market Snapshot</div>
        <div onClick={handleClick}>
          {mobileHeaderListOn ? (
            <GoTriangleDown style={{ color: "white" }} />
          ) : (
            <GoTriangleLeft style={{ color: "white" }} />
          )}
        </div>
      </div>
      <div className="hidden md:block 2xl:w-4/5 2xl:mx-auto  xl:mx-30 xl:mx-auto xl:w-9/12 lg:w-4/5 lg:mx-auto md:w-11/12 md:mx-auto">
        <div className="grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 md:gap-y-5 pt-4 text-white 2xl:mx-40 xl:mx-38">
          <div className="text-center col-span-1">
            <h3 className="text-sm font-semibold">MARKET CAP</h3>
            <span className="text-2xl ">$1.16T</span>
          </div>
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

      <div
        className={
          mobileHeaderListOn
            ? `flex flex-col md:hidden text-white ${darkModeStatus ? "bg-[#424242]" : "bg-gradient-to-r from-[#3F51B5] to-[#64B5F6]"} 2xl:h-48 xl:h-48 lg:h-64 md:h-64`
            : "hidden"
        }
      >
        <div className={`flex justify-between px-4 py-1 border-b-2 ${darkModeStatus ? "border-[#404040]" : "border-[#64B5F6]"}`}>
          <div>Market Cap:</div>
          <div>$1.15t</div>
        </div>
        <div className={`flex justify-between px-4 py-1 border-b-2 ${darkModeStatus ? "border-[#404040]" : "border-[#64B5F6]"}`}>
          <div>Exchange Vol:</div>
          <div>$58.79b</div>
        </div>
        <div className={`flex justify-between px-4 py-1 border-b-2 ${darkModeStatus ? "border-[#404040]" : "border-[#64B5F6]"}`}>
          <div>Assets</div>
          <div>2,295</div>
        </div>
        <div className={`flex justify-between px-4 py-1 border-b-2 ${darkModeStatus ? "border-[#404040]" : "border-[#64B5F6]"}`}>
          <div>Exchanges:</div>
          <div>73</div>
        </div>
        <div className={`flex justify-between px-4 py-1 border-b-2 ${darkModeStatus ? "border-[#404040]" : "border-[#64B5F6]"}`}>
          <div>Markets:</div>
          <div>13,994</div>
        </div>
        <div className={`flex justify-between px-4 py-1 border-b-2 ${darkModeStatus ? "border-[#404040]" : "border-[#64B5F6]"}`}>
          <div>BTC Dom Index:</div>
          <div>31.2%</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
