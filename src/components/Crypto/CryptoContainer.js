import React from "react";
import CryptoCard from "./CryptoCard";
import CryptoHeader from "./CryptoHeader";

const CryptoContainer = () => {
  return (
    <div className=" md:-mt-28 flex flex-col">
      <CryptoHeader/>
      <CryptoCard />
    </div>
  );
};

export default CryptoContainer;
