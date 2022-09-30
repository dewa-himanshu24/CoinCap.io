import React from "react";
const MainHeader = () => {
  return (
    <div className="mx-20">
      <div className="flex bg-white w-4/6 mx-auto  h-14 items-center p-1 rounded-tl-md border-b-2 border-gray-200 shadow-2xl">
        <div className="flex items-center py-1 text-sm">
          <div className="pl-3">
            <ul className="flex">
              <li className="flex-none w-20 text-gray-500 hover:text-black cursor-pointer">
                Rank
              </li>
              <li className="flex-none w-64 text-gray-500 hover:text-black cursor-pointer">
                Name
              </li>
            </ul>
          </div>
          <div className="pr-1 w-[]">
            <ul className="flex">
              <li className="flex-none text-end w-32 ml-0 text-gray-500 hover:text-black cursor-pointer">
                Price{" "}
              </li>
              <li className="flex-none text-end w-32 ml-0 text-gray-500 hover:text-black cursor-pointer">
                Market Cap
              </li>
              <li className="flex-none text-end w-32 ml-0 text-gray-500 hover:text-black cursor-pointer">
                VWAP(24Hr)
              </li>
              <li className="flex-none text-end w-28 ml-0 text-gray-500 hover:text-black cursor-pointer">
                Supply
              </li>
              <li className="flex-none text-end w-36 ml-0 text-gray-500 hover:text-black cursor-pointer">
                Volume(24Hr)
              </li>
              <li className="flex-none text-end w-36 ml-0 text-gray-500 hover:text-black cursor-pointer">
                Change(24Hr)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
