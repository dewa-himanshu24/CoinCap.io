import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cryptoActions } from "../../store/crypto-slice";
import { processData } from "../../ulits/utils";

const MainCard = () => {
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
          className="flex items-center py-1 text-sm"
          key={coinData.id + index}
        >
          <div className="pl-3">
            <ul className="flex items-center">
              <li className="flex-none w-20">{coinData.rank}</li>
              <li className="flex w-64">
                <div>
                  <img
                    src={`https://assets.coincap.io/assets/icons/${coinData.symbol.toLowerCase()}@2x.png`}
                    alt="crypto-coin-icon"
                    className="w-8"
                  />
                </div>
                <div className="ml-1">
                  <h1>{coinData.name}</h1>
                  <p className="text-xs text-gray-500">{coinData.symbol}</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="pr-1 w-7/12">
            <ul className="flex items-center">
              <li className="flex-none text-end w-32">${coinData.priceUsd}</li>
              <li className="flex-none text-end w-32">
                ${coinData.marketCapUsd}
              </li>
              <li className="flex-none text-end w-32">${coinData.vwap24Hr}</li>
              <li className="flex-none text-end w-28">{coinData.supply}</li>
              <li className="flex-none text-end w-36">
                ${coinData.volumeUsd24Hr}b
              </li>
              <li className="flex-none text-end w-36">
                {coinData.changePercent24Hr}%
              </li>
            </ul>
          </div>
        </div>
      ));
  };

  return (
    <div className="mx-20">
      <div className="bg-white w-4/6 mx-auto p-1 rounded-tl-sm divide-y divide-slate-200 border-b-2 border-gray-200 shadow-2xl">
        {generateCoinDataList()}
      </div>
      <div className="flex m-6">
        <button
          className="bg-[#18C683] w-36 h-9 rounded-full text-white drop-shadow-xl text-sm font-bold mx-auto"
          onClick={() => setViewMore(!viewMore)}
        >
          {!viewMore ? "View More" : "View Less"}
        </button>
      </div>
    </div>
  );
};

export default MainCard;
