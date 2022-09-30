import React from "react";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#3F51B5] to-[#64B5F6] h-64">
      <div className="flex mx-44 py-8 justify-center text-white">
        <div className="flex flex-col w-72 h-52">
          <h1 className="font-semibold text-sm">COINCAP.IO</h1>
          <ul className="opacity-40">
            <li>Methodology</li>
            <li>Support</li>
            <li>Our API</li>
            <li>Rate Comparison</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="flex flex-col w-72 h-52">
          <div className="flex flex-col">
            <h1 className="font-semibold text-sm">LEGALS</h1>
            <ul className="opacity-40">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold text-sm">DISCLAIMER</h1>
            <p className="opacity-40">Neither ShapeShift AG nor CoinCap are in any way associated with CoinMarketCap, LLC or any of its goods and services.</p>
          </div>
        </div>

        <div className="flex flex-col w-72 h-52">
          <h1 className="font-semibold text-sm">FOLLOW US</h1>
          <div className="flex"><FiTwitter /><AiOutlineFacebook/></div>
        </div>

        <div className="flex flex-col w-72 h-52">
          <h1 className="font-semibold text-sm">COINCAP APP AVAILABLE ON</h1>
          <img src="/static/logo/google_play.svg" alt="google-play" className="w-36 opacity-40 hover:opacity-100"/>
          <img src="/static/logo/apple_store.svg" alt="apple-store" className="w-36 opacity-40 hover:opacity-100"/>

        </div>
      </div>
    </div>
  );
};

export default Footer;
