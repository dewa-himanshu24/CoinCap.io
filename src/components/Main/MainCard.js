import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cryptoActions } from "../../store/crypto-slice";

const MainCard = () => {
  const dispatch = useDispatch();
  const cryptoData = useSelector((state) => state.crypto.cryptoData);
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    getCryptoCoinData();
  }, []);

  const getCryptoCoinData = async () => {
    const response = await fetch("https://api.coincap.io/v2/assets", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseJson = await response.json();
    console.log(responseJson.data);
    const page1 = responseJson.data.slice(0, 50);
    dispatch(cryptoActions.setCryptoData(responseJson.data));
  };

  const generateCoinDataList = () => {
    return cryptoData
      .slice(0, !viewMore ? 50 : cryptoData.length)
      .map((coinData) => (
        <div className="flex items-center py-1 text-sm" key={coinData.id}>
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
              <li className="flex-none text-end w-28">{coinData.supply}m</li>
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
        {/* OneCardStart */}
        {/* <div className="flex items-center py-1 text-sm">
          <div className="pl-3">
            <ul className="flex items-center">
              <li className="flex-none w-20">1</li>
              <li className="flex w-64">
                <div>
                  <img
                    src="https://assets.coincap.io/assets/icons/btc@2x.png"
                    className="w-8"
                  />
                </div>
                <div className="ml-1">
                  <h1>Bitcoin</h1>
                  <p className="text-xs text-gray-500">BTC</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="pr-1 w-7/12">
            <ul className="flex items-center">
              <li className="flex-none text-end w-32">$19,514.27</li>
              <li className="flex-none text-end w-32">$373.99b</li>
              <li className="flex-none text-end w-32">$19,346.43</li>
              <li className="flex-none text-end w-28">19.16m</li>
              <li className="flex-none text-end w-36">$16.74b</li>
              <li className="flex-none text-end w-36">-0.54%</li>
            </ul>
          </div>
        </div> */}
        {/* OneCardEnd */}
      </div>
      <div>
        <button onClick={() => setViewMore(true)}>View More</button>
      </div>
    </div>
  );
};

export default MainCard;
