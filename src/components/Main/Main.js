import React from "react";
import MainCard from "./MainCard";
import MainHeader from "./MainHeader";

const Main = () => {
  return (
    <div className="-mt-28 flex flex-col">
      <MainHeader/>
      <MainCard />
    </div>
  );
};

export default Main;
