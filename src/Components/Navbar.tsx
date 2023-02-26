import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/storeContext";
import logoDark from "../assets/logo-dark.svg";
import logoLight from "../assets/logo-light.svg";
import dots from "../assets/icon-vertical-ellipsis.svg";
interface selectedProps {
  name: string;
  isActive: boolean;
  columns: [];
}

const Navbar = () => {
  const { theme, sideBar, store } = useContext(StoreContext);
  const [selected, setselected] = useState<any>();
  useEffect(() => {
    const selectedBoard = [
      ...store.filter((item: selectedProps) => item.isActive === true),
    ];
    setselected(selectedBoard);
  }, [store]);
  return (
    <div className={`w-full h-[96px] flex ${theme ? "dark" : "light"}`}>
      <div
        className={`${
          sideBar ? "w-[300px]" : "w-[210px] border-b-2 "
        }  pl-4 pr-6 flex items-center border-r-2 border-gray-500 `}
      >
        <img
          className="w-[153px] h-[26px]"
          src={theme ? logoLight : logoDark}
          alt="logo"
        />
      </div>
      <div
        className={`px-6 h-full flex justify-between items-center border-b-2 border-gray-500 ${
          sideBar ? "navbarThin" : "navbarWide"
        } `}
      >
        {selected && (
          <h1
            className={`font-semibold text-lg ${
              theme ? "text-[#fff]" : "text-[#000]"
            }`}
          >
            {selected[0].name}
          </h1>
        )}
        <div className="flex justify-between items-center">
          <button className="w-[162px] h-[47px] font-semibold text-white text-base bg-[#585fc7] rounded-3xl active:scale-95">
            + Add New Task
          </button>
          <img className="ml-4 cursor-pointer" src={dots} alt="dots" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
