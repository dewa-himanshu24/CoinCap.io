import React from "react";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#3F51B5] to-[#64B5F6] h-48">
      <div className="mx-44">
        <div className="grid grid-cols-6 pt-4 text-white mx-40">
          <div className="text-center">
            <h3 className="text-sm font-semibold">MARKET CAP</h3>
            <span className="text-2xl ">$1.16T</span>
          </div >
          <div className="text-center">
            <h3 className="text-sm font-semibold">EXCHANGE VOL</h3>
            <span className="text-2xl">$56.23B</span>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-semibold">ASSETS</h3>
            <span className="text-2xl">2,295</span>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-semibold">EXCHANGES</h3>
            <span className="text-2xl">73</span>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-semibold">MARKETS</h3>
            <span className="text-2xl">13,975</span>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-semibold">BTC DOM INDEX</h3>
            <span className="text-2xl">32.1%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
