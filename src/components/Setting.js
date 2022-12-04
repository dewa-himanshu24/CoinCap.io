import React from "react";
import { useDispatch } from "react-redux";

import { BsGearWideConnected } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { darkModeActions } from "../store/dark-mode-slice";

const Setting = (props) => {
  const dispatch = useDispatch();

  const toggleDarkModeStatusHandler = () => {
    dispatch(darkModeActions.toggleDarkModeStatus())
  }

  return (
    <div className="bg-black backdrop-blur-sm h-screen">
      <div className="flex flex-col w-96 mx-auto text-white  pt-16">
        <div className="flex justify-between items-center px-3 border-b-2 border-gray-900">
          <div className="flex items-center text-2xl pb-4">
            <BsGearWideConnected size={30} />
            <div className="ml-1">Setting</div>
          </div>
          <div>
            <ImCross
              size={15}
              onClick={props.onClose}
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between border-b-2 border-gray-900 py-4">
            <div>Dark Theme</div>
            <div
              className="cursor-pointer"
              onClick={toggleDarkModeStatusHandler}
            >
              <input type="checkbox" className="cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-between border-b-2 border-gray-900 py-4">
            <div>Flash Price Indicators</div>
            <input type="checkbox" className="cursor-pointer" />
          </div>
          <div className="flex justify-between border-b-2 border-gray-900 py-4">
            <div>USD</div>
            <input type="checkbox" className="cursor-pointer" />
          </div>
          <div className="flex justify-between py-4">
            <div>English</div>
            <input type="checkbox" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
