import React, { useContext } from "react";
import openIcon from "../assets/icon-show-sidebar.svg";
import { StoreContext } from "../context/storeContext";

const OpenSidebar = () => {
  const { setsideBar, sideBar } = useContext(StoreContext);
  return (
    <div
      onClick={() => {
        setsideBar(true);
      }}
      className={`w-[52px] h-[48px] flex justify-center z-10
       ${sideBar&&'-translate-x-20'}
      items-center openSidebar rounded-r-full absolute bottom-20`}
    >
      <img src={openIcon} alt="open icon" />
    </div>
  );
};

export default OpenSidebar;
