import React from "react";
import MainCard1 from "./MainCard";
import MainHeader from "./MainHeader";

const Main = () => {
  return (
    <div className=" md:-mt-28 flex flex-col">
      <MainHeader/>
      <MainCard1 />
    </div>
  );
};

export default Main;
