import React from "react";
const CryptoHeader = () => {
  return (
    <div className="2xl:mx-20 xl:mx-0">
      <div className="flex bg-white w-screen 2xl:w-3/5 xl:w-9/12 xl:mx-auto lg:w-4/5 lg:mx-auto md:w-11/12 md:mx-auto  h-14 items-center rounded-tl-md border-b-2 border-gray-200 shadow-2xl">
        <div className="flex flex-grow items-center justify-between py-1 text-sm">
          <div className="pl-3 basis-2/6">
            <ul className="flex flex-grow">
              <li className="hidden md:block basis-24 text-gray-500 hover:text-black cursor-pointer">
                Rank
              </li>
              <li className=" basis-64 text-gray-500 hover:text-black cursor-pointer">
                Name
              </li>
            </ul>
          </div>
          <div className="pr-1 basis-4/6">
            <ul className="flex flex-grow justify-end pr-5">
              <li className="basis-32 text-end ml-0 text-gray-500 hover:text-black cursor-pointer">
                Price{" "}
              </li>
              <li className="hidden md:block basis-32 text-end ml-0 text-gray-500 hover:text-black cursor-pointer">
                Market Cap
              </li>
              <li className="hidden basis-32 text-end ml-0 text-gray-500 hover:text-black cursor-pointer md:hidden lg:block">
                VWAP(24Hr)
              </li>
              <li className="hidden basis-28 text-end ml-0 text-gray-500 hover:text-black cursor-pointer md:hidden lg:block">
                Supply
              </li>
              <li className="hidden md:block basis-36 text-end ml-0 text-gray-500 hover:text-black cursor-pointer">
                Volume(24Hr)
              </li>
              <li className="basis-36 text-end ml-0 text-gray-500 hover:text-black cursor-pointer">
                Change(24Hr)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoHeader;

