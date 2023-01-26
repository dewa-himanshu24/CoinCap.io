import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cryptoActions } from "../../store/crypto-slice";
import { processData } from "../../ulits/utils";

const CryptoCard = () => {
  const darkModeStatus = useSelector((state) => state.darkMode.darkModeStatus);
  const dispatch = useDispatch();
  const cryptoData = useSelector((state) => state.crypto.cryptoData);
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    const getCryptoCoinData = async () => {
      const response = await fetch("https://api.coincap.io/v2/assets", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseJson = await response.json();

      const processedData = processData(responseJson.data);

      console.log(processedData);
      dispatch(cryptoActions.setCryptoData(processedData));
    };
    getCryptoCoinData();
  }, [dispatch]);

  const generateCoinDataList = () => {
    return cryptoData
      .slice(0, !viewMore ? 50 : cryptoData.length)
      .map((coinData, index) => (
        <div
          className={`flex flex-grow md:items-center py-1 text-sm h-14 ${darkModeStatus? "hover:bg-[#252525] border-[#252527]":"hover:bg-red-50"}`}
          key={coinData.id + index}
        >
          <div className="pl-3 basis-2/6">
            <ul className="flex flex-grow items-center">
              <li className={`${darkModeStatus ? "text-white": "text-black"} hidden md:block basis-24 w-20  pl-6`}>
                {coinData.rank}
              </li>
              <li className={`${darkModeStatus ? "text-white": "text-black"} flex w-64`}>
                <div>
                  <img
                    src={`https://assets.coincap.io/assets/icons/${coinData.symbol.toLowerCase()}@2x.png`}
                    alt="crypto-coin-icon"
                    className="w-8"
                  />
                </div>
                <div className="ml-1">
                  <h1>{coinData.name}</h1>
                  <p className={`text-xs ${darkModeStatus ? "text-gray-300":"text-gray-500"}`}>{coinData.symbol}</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="pr-1 basis-4/6">
            <ul className="flex flex-grow items-center">
              <li className={`${darkModeStatus ? "text-white": "text-black"} text-end basis-32`}>${coinData.priceUsd}</li>
              <li className={`${darkModeStatus ? "text-white": "text-black"} hidden md:block  text-end basis-32`}>
                ${coinData.marketCapUsd}
              </li>
              <li className={`${darkModeStatus ? "text-white": "text-black"} hidden  text-end basis-32 md:hidden lg:block`}>
                ${coinData.vwap24Hr}
              </li>
              <li className={`${darkModeStatus ? "text-white": "text-black"} hidden text-end basis-28 md:hidden lg:block`}>
                {coinData.supply}
              </li>
              <li className={`${darkModeStatus ? "text-white": "text-black"} hidden md:block  text-end basis-36`}>
                ${coinData.volumeUsd24Hr}b
              </li>
              <li className={`pr-5 text-end basis-36 ${
                  coinData.changePercent24Hr >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {coinData.changePercent24Hr}%
              </li>
            </ul>
          </div>
        </div>
      ));
  };

  return (
    <div className=" 2xl:mx-20 xl:mx-0">
      <div className={`${darkModeStatus ? "bg-[#363636] border-[#252527] divide-slate-[#252527]" : "bg-white border-gray-200 divide-slate-200"} w-screen 2xl:w-4/6 xl:w-9/12 xl:mx-auto lg:w-4/5 lg:mx-auto md:w-11/12 md:mx-auto rounded-tl-sm divide-y  border-b-2 shadow-2xl`}>
        {generateCoinDataList()}
      </div>
      <div className="flex m-6">
        <button
          className="bg-[#18C683] w-36 h-9 rounded-full text-white drop-shadow-xl text-sm font-bold mx-auto hover:-translate-y-1 transition duration-300"
          onClick={() => setViewMore(!viewMore)}
        >
          {!viewMore ? "View More" : "View Less"}
        </button>
      </div>
    </div>
  );
};

export default CryptoCard;
