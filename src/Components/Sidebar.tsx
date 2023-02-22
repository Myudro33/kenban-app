import React, { useContext } from "react";
import { StoreContext } from "../context/storeContext";
import logoDark from "../assets/logo-dark.svg";
import logoLight from "../assets/logo-light.svg";
import Board from "./Board";
import NewBoardBut from "./NewBoardBut";
import ThemeSwitcher from "./ThemeSwitcher";
import HideSidebar from "./HideSidebar";
import OpenSidebar from "./OpenSidebar";

interface BoardProps {
  name: string;
  isActive: boolean;
  columsn: {}[];
}

const Sidebar = () => {
  const { store, setstore, theme, settheme, sideBar, setsideBar } =
    useContext(StoreContext);

  console.log(store);

  return (
    <>
        <div
          className={`w-[300px] h-full ${
            theme ? "dark" : "light"
          } flex flex-col  ${!sideBar&&'-translate-x-[300px]'} `}
        >
          <img
            className="w-[153px] h-[26px] mx-5 my-8"
            src={theme ? logoLight : logoDark}
            alt="logo"
          />
          <div className="w-full h-[25rem] mt-8 overflow-y-scroll">
            <p className="ml-8 my-4 tracking-widest text-xs font-bold">
              ALL BOARDS (3)
            </p>
            <div className="w-[95%] flex flex-col">
              {store.map((board: BoardProps, index: number) => (
                <Board
                  key={index}
                  name={board.name}
                  isActive={board.isActive}
                  index={index}
                />
              ))}
              <NewBoardBut />
            </div>
          </div>
          <ThemeSwitcher />
          <HideSidebar />
        </div>
           <OpenSidebar />
    </>
  );
};

export default Sidebar;
